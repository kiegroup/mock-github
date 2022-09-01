import { copy, ensureFile, writeFile } from "fs-extra";
import path from "path";
import { REMOTE } from "../repository.constants";
import { CreateRepositoryFile } from "./repository-file-system.types";

export class RepositoryFileSystem {
  private readonly repoPath: string;

  constructor(repoPath: string) {
    this.repoPath = repoPath;
  }

  async copyFiles(files?: CreateRepositoryFile[]): Promise<boolean> {
    if (files) {
      await Promise.all(files.map((file) => this.copyFile(file)));
      return true;
    }
    return false;
  }

  async createFile(dest: string, data: string) {
    const destinationPath = path.join(this.repoPath, dest);
    await writeFile(destinationPath, data);
  }

  /**
   * Make sure that the destination path does not begin with REMOTE.
   * REMOTE is reserved directory to setup a local git repository
   * @param dest
   * @returns true if destination path begins from REMOTE
   */
  private checkDest(dest: string): boolean {
    return dest.split("/")[0] === REMOTE;
  }

  private async copyFile(file: CreateRepositoryFile): Promise<void> {
    if (this.checkDest(file.dest)) {
      throw new Error(
        "Cannot create a file in the remote directory. Directory remote is reserved"
      );
    }
    const destinationPath = path.join(this.repoPath, file.dest);

    // create the file and any directories needed
    await ensureFile(destinationPath);

    // copy files and directories
    await copy(file.src, file.dest, { overwrite: true });
  }
}
