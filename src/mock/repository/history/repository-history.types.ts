import { CreateRepositoryFile } from "../files/repository-file-system.types";

export interface GitAction {
  action: GitActionTypes;
}

export interface Push extends GitAction {
  branch: string;
  files?: CreateRepositoryFile[];
  commitMessage?: string;
}

export interface Merge extends GitAction {
  head: string;
  base: string;
  commitMessage?: string;
}

export enum GitActionTypes {
  PUSH = "push",
  MERGE = "merge",
}
