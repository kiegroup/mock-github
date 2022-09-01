export type RepositoryFile = {
  path: string;
  branch: string;
};

export type State = {
  name: string;
  path: string;
  currentBranch: string;
  pushedBranches: string[];
  localBranches: string[];
  files: RepositoryFile[];
};
