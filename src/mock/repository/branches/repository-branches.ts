import { SimpleGit } from "simple-git";
import { DEFAULT_BRANCH, ORIGIN } from "../repository.constants";

export class RepositoryBranches {
  private readonly git: SimpleGit;
  private pushedBranches: string[];
  private localBranches: string[];

  constructor(git: SimpleGit) {
    this.git = git;
    this.localBranches = [];
    this.pushedBranches = [DEFAULT_BRANCH];
  }

  async setPushedBranches(branches?: string[]): Promise<string[]> {
    for (const branch of branches ?? []) {
      if (!this.pushedBranches.includes(branch)) {
        await this.git
          .checkoutLocalBranch(branch)
          .push(ORIGIN, branch, ["--set-upstream"]);
        await this.git.checkout(DEFAULT_BRANCH);
        this.pushedBranches.push(branch);
      }
    }
    return this.pushedBranches;
  }

  async setLocalBranches(branches?: string[]): Promise<string[]> {
    for (const branch of branches ?? []) {
      if (!this.localBranches.includes(branch)) {
        await this.git.checkoutLocalBranch(branch).checkout(DEFAULT_BRANCH);
        this.localBranches.push(branch);
      }
    }
    return this.localBranches;
  }

  async setCurrentBranch(branch?: string): Promise<string> {
    const currBranch = branch ?? DEFAULT_BRANCH;
    if (
      this.localBranches.includes(currBranch) ||
      this.pushedBranches.includes(currBranch)
    ) {
      await this.git.checkout(currBranch);
    } else {
      await this.git.checkoutLocalBranch(currBranch);
      this.localBranches.push(currBranch);
    }
    return currBranch;
  }
}
