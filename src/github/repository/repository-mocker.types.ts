import { CreateRepositoryFile } from "./files/repository-file-system.types";
import { Merge, Push } from "./history/repository-history.types";

export type Repository = {
  pushedBranches?: string[];
  localBranches?: string[];
  currentBranch?: string;
  history?: (Push | Merge)[];
  owner?: string;
  files?: CreateRepositoryFile[];
  forkedFrom?: string;
};
export type Repositories = {
  [key: string]: Repository;
};
