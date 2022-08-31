import { SetupRepositoryFile } from "../repository-mocker.types"

export interface GitAction {
    action: string
}

export interface Push extends GitAction {
    branch: string,
    file?: SetupRepositoryFile[]
}

export interface Merge extends GitAction {
    head: string,
    base: string,
    commitMessage?: string
}

export enum GitActionTypes {
    PUSH = "push",
    MERGE = "merge"
}