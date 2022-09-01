import { copy, ensureFile, writeFile } from "fs-extra";
import path from "path";
import { REMOTE } from "../repository.constants";
import { CreateRepositoryFile } from "./repository-file-system.types";

export class RepositoryFileSystem {
  private readonly repoPath: string;

  constructor(repoPath: string) {
    this.repoPath = repoPath;
  }

  private checkDest(dest: string) {
    return dest.split("/")[0] === REMOTE;
  }

  private async copyFile(file: CreateRepositoryFile) {
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

  async copyFiles(
    files: CreateRepositoryFile[] = [],
  ) {
    await Promise.all(files.map((file) => this.copyFile(file)));
  }

  async createFile(
    dest: string,
    data: string,
  ) {
    const destinationPath = path.join(this.repoPath, dest);
    await writeFile(destinationPath, data);
  }
}
