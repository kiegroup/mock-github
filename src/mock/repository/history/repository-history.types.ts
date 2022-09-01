import { CreateRepositoryFile } from "../files/repository-file-system.types";

export interface GitAction {
  action: string;
}

export interface Push extends GitAction {
  branch: string;
  files?: CreateRepositoryFile[];
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
