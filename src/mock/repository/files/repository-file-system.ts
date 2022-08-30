import {
  copy,
  ensureFile,
  lstatSync,
  writeFile,
} from "fs-extra";
import path from "path";
import { totalist } from "totalist";
import {
  RepositoryFile,
  SetupRepositoryFile,
} from "../repository-mocker.types";
import { DEFAULT_BRANCH, REMOTE } from "../repository.constants";

export class RepositoryFileSystem {
  private readonly repoPath: string;

  constructor(repoPath: string) {
    this.repoPath = repoPath;
  }

  private checkDest(dest: string) {
    return dest.split("/")[0] === REMOTE;
  }

  private async copyFile(file: SetupRepositoryFile, currentBranch: string) {
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

    const result: RepositoryFile[] = [];
    if (lstatSync(destinationPath).isDirectory()) {
      await totalist(destinationPath, (name, abs, stats) => {
        if (stats.isFile()) {
        result.push({path: abs, branch: currentBranch});

        }
      })
    } else {
        result.push({path: destinationPath, branch: currentBranch})
    }
    return result;
  }

  async copyFiles(
    files: SetupRepositoryFile[] = [],
    currentBranch: string = DEFAULT_BRANCH
  ) {
    let promises = files.map((file) => this.copyFile(file, currentBranch));
    const fileState: RepositoryFile[] = []
    const result = await Promise.all(promises);
    result.forEach((res) => {
      fileState.push(...res)
    })
    return fileState;
  }

  async createFile(dest: string, data: string, currentBranch: string = DEFAULT_BRANCH) {
    const destinationPath = path.join(this.repoPath, dest);
    await writeFile(
      destinationPath,
      data
    );
    return {path: destinationPath, branch: currentBranch};
  }
}
