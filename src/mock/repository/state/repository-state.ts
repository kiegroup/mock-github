import { lstatSync } from "fs";
import path from "path";
import { totalist } from "totalist/sync";
import {
  GitAction,
  GitActionTypes,
  Push,
} from "../history/repository-history.types";
import {
  Repositories,
  RepositoryFile,
  SetupRepositoryFile,
} from "../repository-mocker.types";
import { DEFAULT_BRANCH, DUMMY_FILE_NAME } from "../repository.constants";
import { State } from "./repository-state.types";

export class RepositoryState {
  private repositories: Repositories;
  private setupPath: string;

  constructor(repositories: Repositories, setupPath: string) {
    this.repositories = repositories;
    this.setupPath = setupPath;
  }

  getState(repositoryName: string): State | undefined {
    const repository = this.repositories[repositoryName];
    if (!repository) {
      return;
    }
    const filesInRepository = this.getFiles(
      repository.files,
      repository.history,
      repository.currentBranch
    );
    const currentBranch = repository.currentBranch ?? DEFAULT_BRANCH;
    const localBranches = repository.localBranches ?? [];
    const pushedBranches = [
      ...(repository.pushedBranches ?? []),
      DEFAULT_BRANCH,
    ];
    if (
      !localBranches.includes(currentBranch) &&
      !localBranches.includes(currentBranch)
    ) {
      localBranches.push(currentBranch);
    }
    return {
      name: repositoryName,
      path: path.join(this.setupPath, repositoryName),
      currentBranch,
      pushedBranches,
      localBranches,
      files: filesInRepository,
    };
  }

  getAllState() {
    const result: State[] = [];
    for (const repoName of Object.keys(this.repositories)) {
      result.push(this.getState(repoName)!);
    }
  }

  private getFile(file: SetupRepositoryFile, branch: string) {
    const result: RepositoryFile[] = [];
    if (lstatSync(file.src).isDirectory()) {
      totalist(file.src, (_name, abs, stats) => {
        if (stats.isFile()) {
          result.push({
            path: abs.replace(file.src, file.dest),
            branch,
          });
        }
      });
    } else {
      result.push({
        path: file.dest,
        branch,
      });
    }
    return result;
  }

  private getFiles(
    files?: SetupRepositoryFile[],
    gitActions?: GitAction[],
    currentBranch?: string
  ) {
    const result: RepositoryFile[] = [];
    for (const file of files ?? []) {
      result.push(...this.getFile(file, currentBranch ?? DEFAULT_BRANCH));
    }

    let counter = 0;
    for (const action of gitActions ?? []) {
      if (action.action === GitActionTypes.PUSH) {
        const pushAction = action as Push;
        if (pushAction.files) {
          for (const file of pushAction.files ?? []) {
            result.push(...this.getFile(file, pushAction.branch));
          }
        } else {
          result.push({
            path: `${DUMMY_FILE_NAME}${counter}`,
            branch: pushAction.branch,
          });
        }
      }
      counter += 0;
    }

    return result;
  }
}
