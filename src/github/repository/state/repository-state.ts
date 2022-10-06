import { lstatSync } from "fs-extra";
import path from "path";
import { totalist } from "totalist";
import { CreateRepositoryFile } from "../files/repository-file-system.types";
import {
  GitAction,
  GitActionTypes,
  Push,
} from "../history/repository-history.types";
import { Repositories } from "../repository-mocker.types";
import { DEFAULT_BRANCH, DUMMY_FILE_NAME } from "../repository.constants";
import {
  BranchState,
  FileState,
  RepositoryStateMethods,
  State,
} from "./repository-state.types";

export class RepositoryState implements RepositoryStateMethods {
  private repositories: Repositories;
  private setupPath: string;

  constructor(repositories: Repositories, setupPath: string) {
    this.repositories = repositories;
    this.setupPath = setupPath;
  }

  async getState(repositoryName: string): Promise<State | undefined> {
    if (this.repositories[repositoryName]) {
      return {
        name: repositoryName,
        owner: this.getOwner(repositoryName),
        path: this.getPath(repositoryName),
        branches: this.getBranchState(repositoryName),
        files: await this.getFileSystemState(repositoryName),
        forkedFrom: this.getForkedFrom(repositoryName),
      };
    }
  }

  getForkedFrom(repositoryName: string): string | undefined {
    return this.repositories[repositoryName]?.forkedFrom;
  }

  isFork(repositoryName: string): boolean {
    return !!this.repositories[repositoryName]?.forkedFrom;
  }

  getPath(repositoryName: string): string | undefined {
    if (this.repositories[repositoryName]) {
      return path.join(this.setupPath, repositoryName);
    }
  }

  getOwner(repositoryName: string): string | undefined {
    if (this.repositories[repositoryName]) {
      return (
        this.repositories[repositoryName].owner ?? process.env.LOGNAME ?? ""
      );
    }
  }

  getBranchState(repositoryName: string): BranchState | undefined {
    const repository = this.repositories[repositoryName];
    if (repository) {
      const currentBranch = repository.currentBranch ?? DEFAULT_BRANCH;
      const localBranches = repository.localBranches ?? [];
      const pushedBranches = [
        ...(repository.pushedBranches ?? []),
        DEFAULT_BRANCH,
      ];
      if (
        !localBranches.includes(currentBranch) &&
        !pushedBranches.includes(currentBranch)
      ) {
        localBranches.push(currentBranch);
      }
      return {
        currentBranch,
        pushedBranches,
        localBranches,
      };
    }
  }

  async getFileSystemState(
    repositoryName: string
  ): Promise<FileState[] | undefined> {
    const repository = this.repositories[repositoryName];
    if (!repository) {
      return;
    }
    return this.getFiles(
      repository.files,
      repository.history,
      repository.currentBranch
    );
  }

  private async getFiles(
    files?: CreateRepositoryFile[],
    gitActions?: GitAction[],
    currentBranch?: string
  ): Promise<FileState[]> {
    const result: FileState[] = [];

    const promises = [];
    for (const file of files ?? []) {
      promises.push(this.getFile(file, currentBranch ?? DEFAULT_BRANCH));
    }

    let counter = 0;
    for (const action of gitActions ?? []) {
      if (action.action === GitActionTypes.PUSH) {
        const pushAction = action as Push;
        if (pushAction.files) {
          for (const file of pushAction.files ?? []) {
            promises.push(this.getFile(file, pushAction.branch));
          }
        } else {
          result.push({
            path: `/${DUMMY_FILE_NAME}${counter}`,
            branch: pushAction.branch,
          });
        }
      }
      counter += 0;
    }

    (await Promise.all(promises)).forEach((res) => result.push(...res));

    return result;
  }

  private async getFile(
    file: CreateRepositoryFile,
    branch: string
  ): Promise<FileState[]> {
    const result: FileState[] = [];
    if (lstatSync(file.src).isDirectory()) {
      await totalist(file.src, (_name, abs, stats) => {
        if (stats.isFile()) {
          const absSplit = abs.split(file.src);
          result.push({
            path: path.join(file.dest, absSplit[absSplit.length - 1]),
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
}
