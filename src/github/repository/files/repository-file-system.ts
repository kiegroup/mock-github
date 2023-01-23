import {
  copy,
  ensureDir,
  ensureFile,
  lstatSync,
  writeFile,
  mkdtemp,
  rm,
} from "fs-extra";
import path from "path";
import { GITIGNORE, REMOTE } from "@mg/github/repository/repository.constants";
import { CreateRepositoryFile } from "@mg/github/repository/files/repository-file-system.types";
import { tmpdir } from "os";
import * as fg from "fast-glob";

export class RepositoryFileSystem {
  private readonly repoPath: string;

  constructor(repoPath: string) {
    this.repoPath = repoPath;
  }

  async copyFiles(files?: CreateRepositoryFile[]): Promise<boolean> {
    if (files) {
      await Promise.all(
        files.map(async file => {
          const isFile = lstatSync(file.src).isFile();
          const [dest, src] = await Promise.all([
            this.createDest(file.dest, isFile),
            this.createTemp(file.src, path.join(this.repoPath, file.dest)),
          ]);
          const entries =
            file.filter && !isFile
              ? fg.sync(file.filter, {
                  absolute: true,
                  cwd: src,
                  dot: true,
                  onlyFiles: false,
                })
              : [];

          await copy(src, dest, {
            overwrite: true,
            dereference: true,
            filter: (filterSrc: string, _dest: string) =>
              !filterSrc.startsWith(this.repoPath) &&
              !entries.includes(filterSrc),
          });
          return this.cleanupTemp(src);
        })
      );
      return true;
    }
    return false;
  }

  async createFile(dest: string, data: string) {
    const destinationPath = path.join(this.repoPath, dest);
    await this.createDest(dest, true);
    await writeFile(destinationPath, data);
  }

  /**
   * Make sure that the destination path does not begin with REMOTE or GITIGNORE.
   * REMOTE is reserved directory to setup a local git repository
   * GITIGNORE is reserved for .gitignore file that prevents REMOTE from being pushed
   * @param dest
   * @returns true if destination path begins from REMOTE
   */
  private checkDest(dest: string): boolean {
    const beginsWith = dest.split("/")[0];
    return beginsWith === REMOTE || beginsWith === GITIGNORE;
  }

  private async createDest(dest: string, isFile: boolean): Promise<string> {
    if (this.checkDest(dest)) {
      throw new Error(
        "Cannot create a file in the remote directory. Directory remote is reserved"
      );
    }
    const destinationPath = path.join(this.repoPath, dest);

    // create the file and any directories needed
    if (isFile) {
      await ensureFile(destinationPath);
    } else {
      await ensureDir(destinationPath);
    }
    return destinationPath;
  }

  private isSubDir(parent: string, dir: string) {
    const relative = path.relative(parent, dir);
    return !relative.startsWith("..") && !path.isAbsolute(relative);
  }

  private async createTemp(src: string, dest: string) {
    if (this.isSubDir(src, dest)) {
      const tmpPath = await mkdtemp(`${tmpdir()}${path.sep}`);
      await copy(src, tmpPath, {
        overwrite: true,
        dereference: true,
        filter: (filterSrc: string, _filterDest) => {
          return filterSrc !== this.repoPath;
        },
      });
      return tmpPath;
    }
    return src;
  }

  private async cleanupTemp(src: string) {
    const tmpPath = `${tmpdir()}${path.sep}`;
    if (src.startsWith(tmpPath)) {
      await rm(src, { recursive: true });
    }
  }
}
