import { Merge, Push } from "./history/git-history.types";

export type RepositoryFile = {
  path: string;
  branch: string;
};

export type RepositoryState = {
  name: string;
  path: string;
  branch: string;
  pushedBranches: string[];
  localBranches: string[];
  files: RepositoryFile[];
};

export type SetupRepositoryFile = {
  src: string;
  dest: string;
};

export type History = Push | Merge;

export type PullRequest = {
  [key: string]: { [key: string]: any } & {
    open: {
      head: string;
      base: string;
    };
    closed: {
      head: string;
      base: string;
    };
  };
};

export type Repositories = {
  [key: string]: {
    pushedBranches?: string[];
    localBranches?: string[];
    currentBranch?: string;
    history?: History[];
    owner?: string;
    files?: SetupRepositoryFile[];
    forkedFrom?: string;
    pullRequests?: PullRequest[];
  };
} & { create: boolean };

export interface RepositoryInterface {
  getAllStates(): RepositoryState[];
  getState(name: string): RepositoryState | undefined;
}
