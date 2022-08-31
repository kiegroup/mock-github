import { SimpleGit } from "simple-git";
import { GitAction, GitActionTypes, Merge, Push } from "./repository-history.types";
import { RepositoryFile } from "../repository-mocker.types";
import { DEFAULT_BRANCH } from "../repository.constants";
import { RepositoryFileSystem } from "../files/repository-file-system";

export class RepositoryHistory {
  private readonly git: SimpleGit;
  private readonly repoPath: string;
  private readonly repofs: RepositoryFileSystem;

  constructor(git: SimpleGit, repoPath: string) {
    this.git = git;
    this.repoPath = repoPath;
    this.repofs = new RepositoryFileSystem(this.repoPath);
  }

  private async push(action: Push, histIndex: number, currentBranch: string) {
    const files: RepositoryFile[] = [];

    // checkout to branch
    await this.git.checkout(action.branch);

    // setup files
    if (!action.file) {
      files.push(
        await this.repofs.createFile(
          `dummy-file${histIndex}`,
          "dummy data",
          currentBranch
        )
      );
    } else {
      await this.repofs.copyFiles(action.file);
      files.push(...(await this.repofs.copyFiles(action.file, currentBranch)));
    }

    // commit and push
    await this.git
      .add(".")
      .commit(`adding files to mimic history index ${histIndex}`)
      .push();

    return files;
  }

  private async merge(action: Merge) {
    await this.git.checkout(action.base);
    await this.git.merge([
      action.head,
      "-m",
      action.commitMessage ?? `Merging ${action.head} to ${action.base}`,
    ]);
    await this.git.push();
  }

  /**
   * Reconstruct git history
   * @returns Array of objects describing what files were created and on which branch
   */
  async setHistory(
    history?: GitAction[],
    currentBranch: string = DEFAULT_BRANCH
  ): Promise<RepositoryFile[]> {
    const files: RepositoryFile[] = [];

    let counter = 0;
    for (const hist of history ?? []) {
      switch (hist.action.toLowerCase()) {
        case GitActionTypes.PUSH:
          files.push(
            ...(await this.push(hist as Push, counter, currentBranch))
          );
          break;
        case GitActionTypes.MERGE:
          await this.merge(hist as Merge);
          break;
        default:
          throw new Error("Unknown action");
      }
    }
    return files;
  }
}
