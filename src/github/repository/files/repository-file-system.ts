import { copy, ensureDir, ensureFile, lstatSync, writeFile } from "fs-extra";
import path from "path";
import { GITIGNORE, REMOTE } from "../repository.constants";
import { CreateRepositoryFile } from "./repository-file-system.types";

export class RepositoryFileSystem {
  private readonly repoPath: string;

  constructor(repoPath: string) {
    this.repoPath = repoPath;
  }

  async copyFiles(files?: CreateRepositoryFile[]): Promise<boolean> {
    if (files) {
      await Promise.all(
        files.map(async (file) => {
          await this.createDest(file.dest, lstatSync(file.src).isFile());
          return copy(file.src, path.join(this.repoPath, file.dest), {
            overwrite: true,
          });
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

  private async createDest(dest: string, isFile: boolean): Promise<void> {
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
  }
}
