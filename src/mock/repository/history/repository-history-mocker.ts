import { SimpleGit } from "simple-git";
import {
  GitAction,
  GitActionTypes,
  Merge,
  Push,
} from "./repository-history.types";
import {
  DUMMY_FILE_DATA,
  DUMMY_FILE_NAME,
} from "../repository.constants";
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

  private async push(action: Push, histIndex: number) {
    // checkout to branch
    await this.git.checkout(action.branch);

    // setup files
    if (!action.files) {
      await this.repofs.createFile(
        `${DUMMY_FILE_NAME}${histIndex}`,
        DUMMY_FILE_DATA
      );
    } else {
      await this.repofs.copyFiles(action.files);
    }

    // commit and push
    await this.git
      .add(".")
      .commit(`adding files to mimic history at index ${histIndex}`)
      .push();
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
  async setHistory(history?: GitAction[]) {
    let counter = 0;
    for (const hist of history ?? []) {
      switch (hist.action.toLowerCase()) {
        case GitActionTypes.PUSH:
          await this.push(hist as Push, counter);
          break;
        case GitActionTypes.MERGE:
          await this.merge(hist as Merge);
          break;
        default:
          throw new Error("Unknown action");
      }
      counter += 1;
    }
  }
}
