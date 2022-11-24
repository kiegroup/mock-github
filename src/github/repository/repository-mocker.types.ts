import { CreateRepositoryFile } from "@mg/github/repository/files/repository-file-system.types";
import { Merge, Push } from "@mg/github/repository/history/repository-history.types";

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
