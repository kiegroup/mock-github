import { SimpleGit } from "simple-git";
import fs from "fs";
import path from "path";
import { GitAction, Merge, Push, Unknown } from "./git-history.types";
import { RepositoryFile } from "./repository-mocker-types";

export class GitHistory {
  private readonly git: SimpleGit;
  private readonly repoPath: string;
  private history: GitAction[] | undefined;
  private currentBranch: string;

  constructor(
    git: SimpleGit,
    history: GitAction[] | undefined,
    repoPath: string,
    currentBranch: string
  ) {
    this.git = git;
    this.history = history;
    this.repoPath = repoPath;
    this.currentBranch = currentBranch;
  }

  private async push(action: Push, histIndex: number) {
    const files: RepositoryFile[] = [];

    // checkout to branch
    await this.git.checkout(action.branch);

    // setup files
    if (!action.file) {
      fs.writeFileSync(
        path.join(this.repoPath, `dummy-file${histIndex}`),
        "dummy data"
      );
      files.push({
        path: path.join(this.repoPath, `dummy-file${histIndex}`),
        branch: action.branch,
      });
    } else {
      fs.copyFileSync(action.file.path, this.repoPath);
      files.push({
        path: path.join(this.repoPath, action.file.name),
        branch: action.branch,
      });
    }

    // commit and push
    await this.git
      .add(".")
      .commit(`adding files to mimic history index ${histIndex}`)
      .push();

    await this.git.checkout(this.currentBranch);

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
    await this.git.checkout(this.currentBranch);
  }

  private async unknown(action: Unknown) {
    const files: RepositoryFile[] = [];
    if (action.file) {
      fs.copyFileSync(action.file.path, this.repoPath);
      files.push({
        path: path.join(this.repoPath, action.file.name),
        branch: (await this.git.branch()).current,
      });
    }
    await this.git.raw(action.cmd);
    return files;
  }
  /**
   * Reconstruct git history
   * @returns Array of objects describing what files were created and on which branch
   */
  async setHistory(): Promise<RepositoryFile[]> {
    const files: RepositoryFile[] = [];
    if (this.history) {
      for (let j = 0; j < this.history.length; j++) {
        const hist = this.history[j];

        switch (hist.action.toLowerCase()) {
          // perform known actions
          case "push":
            files.push(...(await this.push(hist as Push, j)));
            break;

          case "merge":
            await this.merge(hist as Merge);
            break;

          // perform unknown actions
          default:
            files.push(...(await this.unknown(hist as Unknown)));
        }
      }
    }
    return files;
  }
}
