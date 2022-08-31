import { SimpleGit } from "simple-git";
import { DEFAULT_BRANCH } from "../repository.constants";

export class RepositoryBranches {
  private readonly git: SimpleGit;
  private _pushedBranches: string[];
  private _localBranches: string[];

  constructor(git: SimpleGit) {
    this.git = git;
    this._localBranches = [];
    this._pushedBranches = [DEFAULT_BRANCH];
  }

  async setPushedBranches(branches?: string[]) {
    for (const branch of branches ?? []) {
      await this.git
        .checkoutLocalBranch(branch)
        .push("origin", branch, ["--set-upstream"]);
      await this.git.checkout("main");
    }
    this._pushedBranches.push(...(branches ?? []));
  }

  async setLocalBranches(branches?: string[]) {
    for (const branch of branches ?? []) {
      await this.git.checkoutLocalBranch(branch).checkout("main");
    }
    this._localBranches.push(...(branches ?? []));
  }

  async setCurrentBranch(branch?: string) {
    const currBranch = branch ?? DEFAULT_BRANCH
    if (
      this._localBranches.includes(currBranch) ||
      this._pushedBranches.includes(currBranch)
    ) {
      await this.git.checkout(currBranch);
    } else {
      await this.git.checkoutLocalBranch(currBranch);
      this._localBranches.push(currBranch);
    }
    return currBranch;
  }

  get pushedBranches() {
    return this._pushedBranches;
  }

  get localBranches() {
    return this._localBranches;
  }


}
