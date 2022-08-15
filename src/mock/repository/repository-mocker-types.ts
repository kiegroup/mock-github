import { Merge, Push, Unknown } from "./git-history.types"

export type RepositoryFile = {
    path: string,
    branch: string
}

export type RepositoryState = {
    name: string,
    path: string,
    branch: string,
    pushedBranches: string[],
    localBranches: string[],
    files: RepositoryFile[]
}



export type Repositories = {
    [key: string]: {
        pushedBranches?: string[],
        localBranches?: string[],
        currentBranch?: string,
        history?: (Push | Merge | Unknown)[],
        workflow?: string[],
    }
}

export interface RepositoryInterface {
    getAllStates(): RepositoryState[];
    getState(name: string): RepositoryState | undefined;
}
