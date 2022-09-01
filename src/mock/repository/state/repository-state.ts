import { lstatSync } from "fs";
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
  PullRequest,
  State,
} from "./repository-state.types";

export class RepositoryState implements RepositoryState {
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
        pullRequests: this.getPullRequestState(repositoryName),
      };
    }
  }

  getForkedFrom(repositoryName: string): string | undefined {
    return this.repositories[repositoryName]?.forkedFrom;
  }

  isFork(repositoryName: string): boolean {
    return !!this.repositories[repositoryName]?.forkedFrom;
  }

  getPath(repositoryName: string): string {
    return path.join(this.setupPath, repositoryName);
  }

  getOwner(repositoryName: string): string | undefined {
    if (this.repositories[repositoryName]) {
      return (
        this.repositories[repositoryName].owner ?? process.env.LOGNAME ?? ""
      );
    }
  }

  getPullRequestState(
    repositoryName: string,
    pullRequestName?: string
  ): PullRequest[] | undefined {
    const repository = this.repositories[repositoryName];
    if (!repository) {
      return;
    }

    if (pullRequestName) {
      const pr = this.getPullRequest(repositoryName, pullRequestName);
      return pr ? [pr] : [];
    } else {
      if (repository.pullRequests) {
        return Object.keys(repository.pullRequests).map(
          (name) => this.getPullRequest(repositoryName, name)!
        );
      }
      return [];
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
        !localBranches.includes(currentBranch)
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

  private async getFile(
    file: CreateRepositoryFile,
    branch: string
  ): Promise<FileState[]> {
    const result: FileState[] = [];
    if (lstatSync(file.src).isDirectory()) {
      await totalist(file.src, (_name, abs, stats) => {
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
            path: `${DUMMY_FILE_NAME}${counter}`,
            branch: pushAction.branch,
          });
        }
      }
      counter += 0;
    }

    (await Promise.all(promises)).forEach((res) => result.push(...res));

    return result;
  }

  private getPullRequest(
    repositoryName: string,
    pullRequestName: string
  ): PullRequest | undefined {
    const repository = this.repositories[repositoryName];
    if (!repository.pullRequests) {
      return;
    }

    return repository?.pullRequests[pullRequestName];
  }
}
