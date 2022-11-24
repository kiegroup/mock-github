import { SimpleGit } from "simple-git";
import {
  GitAction,
  GitActionTypes,
  Merge,
  Push,
} from "@mg/github/repository/history/repository-history.types";
import {
  DEFAULT_COMMIT_MSG,
  DEFAULT_MERGE_COMMIT_MSG,
  DUMMY_FILE_DATA,
  DUMMY_FILE_NAME,
  ORIGIN,
} from "@mg/github/repository/repository.constants";
import { RepositoryFileSystem } from "@mg/github/repository/files/repository-file-system";

export class RepositoryHistory {
  private readonly git: SimpleGit;
  private readonly repoPath: string;
  private readonly repofs: RepositoryFileSystem;

  constructor(git: SimpleGit, repoPath: string) {
    this.git = git;
    this.repoPath = repoPath;
    this.repofs = new RepositoryFileSystem(this.repoPath);
  }

  private async push(action: Push, histIndex: number): Promise<void> {
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
      .commit(action.commitMessage ?? DEFAULT_COMMIT_MSG(histIndex))
      .push(ORIGIN, action.branch);
  }

  private async merge(action: Merge): Promise<void> {
    await this.git.checkout(action.base);
    await this.git.merge([
      action.head,
      "-m",
      action.commitMessage ??
        DEFAULT_MERGE_COMMIT_MSG(action.base, action.head),
    ]);
    await this.git.push(ORIGIN, action.base);
  }

  /**
   * Reconstruct git history
   * @returns Array of objects describing what files were created and on which branch
   */
  async setHistory(history?: GitAction[]): Promise<void> {
    let counter = 0;
    for (const hist of history ?? []) {
      switch (hist.action) {
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
