export type PullRequest = { [key: string]: any } & {
    head: string;
    base: string;
    isOpen: boolean;
};

export type PullRequests = {
  [key: string]: PullRequest;
};

export type FileState = {
  path: string;
  branch: string;
};

export type BranchState = {
  localBranches: string[];
  pushedBranches: string[];
  currentBranch: string;
};

export type State = {
  name: string;
  path?: string;
  owner?: string;
  forkedFrom?: string;
  branches?: BranchState;
  files?: FileState[];
  pullRequests?: PullRequest[];
};

export interface RepositoryStateInterface {
  getState(repositoryName: string): Promise<State | undefined>;
  getForkedFrom(repositoryName: string): string | undefined;
  isFork(repositoryName: string): boolean;
  getPath(repositoryName: string): string | undefined;
  getOwner(repositoryName: string): string | undefined;
  getBranchState(repositoryName: string): BranchState | undefined;
  getFileSystemState(repositoryName: string): Promise<FileState[] | undefined>;
  getPullRequestState(
    repositoryName: string,
    pullRequestName?: string
  ): PullRequest[] | undefined;
}
