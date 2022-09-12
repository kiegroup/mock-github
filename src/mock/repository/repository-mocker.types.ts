import { CreateRepositoryFile } from "./files/repository-file-system.types";
import { GitAction } from "./history/repository-history.types";
import { PullRequests } from "./state/repository-state.types";

export type Repository = {
  pushedBranches?: string[];
  localBranches?: string[];
  currentBranch?: string;
  history?: GitAction[];
  owner?: string;
  files?: CreateRepositoryFile[];
  forkedFrom?: string;
  pullRequests?: PullRequests;
};
export type Repositories = {
  [key: string]: Repository
};
