import { SimpleGit } from "simple-git";
import { DEFAULT_BRANCH, ORIGIN } from "@mg/github/repository/repository.constants";

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
        await this.git.checkoutLocalBranch(branch).push(ORIGIN, branch);
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
    // if branch wasn't defined checkout main branch
    if (!branch) {
      await this.git.checkout(DEFAULT_BRANCH);
      return DEFAULT_BRANCH;
    }

    // branch does not exist. create it first
    if (
      !this.localBranches.includes(branch) &&
      !this.pushedBranches.includes(branch)
    ) {
      await this.git.branch([branch]);
      this.localBranches.push(branch);
    }
    await this.git.checkout(branch);
    return branch;
  }
}
