import simpleGit, { SimpleGit } from "simple-git";
import { Mocker } from "../mocker";
import {
  Repositories,
  RepositoryFile,
  RepositoryInterface,
  RepositoryState,
  SetupRepositoryFile,
} from "./repository-mocker.types";
import path from "path";
import { rm, writeFile } from "node:fs/promises";
import { mkdirSync } from "fs";
import { GitHistory } from "./history/git-history-mocker";
import { GitBranches } from "./branches/git-branches";
import {
  DEFAULT_BRANCH,
  ORIGIN,
  REMOTE,
  UPSTREAM,
} from "./repository.constants";
import { RepositoryFileSystem } from "./files/repository-file-system";
import { GitAction } from "./history/git-history.types";

export class RepositoryMocker implements Mocker, RepositoryInterface {
  private repositories: Repositories | undefined;
  private setupPath: string;
  private repositoryState: RepositoryState[];

  constructor(repositories: Repositories | undefined, setupPath: string) {
    this.repositories = repositories;
    this.setupPath = setupPath;
    this.repositoryState = [];
  }

  /**
   * Create and initialize repo
   * @param repoName name of the repo to initialize
   * @returns git instance and path to repo
   */
  private async initRepo(repoName: string): Promise<{
    git: SimpleGit;
    repoPath: string;
  }> {
    // get repository, remote, remote/origin and remote/upstream paths
    const repoPath = path.join(this.setupPath, repoName);
    const remotePath = path.join(repoPath, REMOTE);
    const originPath = path.join(remotePath, ORIGIN);
    const upstreamPath = path.join(remotePath, UPSTREAM);

    // create origin and upstream folders
    mkdirSync(originPath, { recursive: true });
    mkdirSync(upstreamPath, { recursive: true });

    // load git instances for the repository, origin and upstream
    const git: SimpleGit = simpleGit(repoPath);
    const originGit: SimpleGit = simpleGit(originPath);
    const upstreamGit: SimpleGit = simpleGit(upstreamPath);

    await Promise.all([
      originGit
        .init(true, ["-b", DEFAULT_BRANCH])
        .addConfig("user.name", "Github")
        .addConfig("user.email", "noreply@github.com"), // initialize origin as a git repository
      upstreamGit
        .init(true, ["-b", DEFAULT_BRANCH])
        .addConfig("user.name", "Github")
        .addConfig("user.email", "noreply@github.com"), // initialize upstream as a git repository
      writeFile(path.join(repoPath, ".gitignore"), REMOTE), // add remote to gitignore of the repository so that upstream and origin aren't pushed,
    ]);

    // initialize the repository and add origin, upstream and perform first push on main
    await git
      .init(["-b", DEFAULT_BRANCH])
      .addConfig("user.name", "Github")
      .addConfig("user.email", "noreply@github.com")
      .addRemote(ORIGIN, originPath)
      .addRemote(UPSTREAM, upstreamPath)
      .add(".")
      .commit("initialization")
      .push(ORIGIN, DEFAULT_BRANCH, ["--set-upstream"]);

    return {
      git,
      repoPath,
    };
  }

  private async setFiles(
    git: SimpleGit,
    repoPath: string,
    files?: SetupRepositoryFile[]
  ) {
    const repofs = new RepositoryFileSystem(repoPath);
    const filesCreated = await repofs.copyFiles(files);
    if (filesCreated.length > 0) {
      await git
        .add(".")
        .commit("created repository files")
        .push(ORIGIN, DEFAULT_BRANCH);
    }
    return filesCreated;
  }

  private async setBranches(
    git: SimpleGit,
    localBranches?: string[],
    pushedBranches?: string[]
  ) {
    const gitBranches = new GitBranches(git);
    await gitBranches.setLocalBranches(localBranches);
    await gitBranches.setPushedBranches(pushedBranches);
    return {
      localBranches: gitBranches.localBranches,
      pushedBranches: gitBranches.pushedBranches,
    };
  }

  private async setCurrentBranch(git: SimpleGit, currBranch?: string) {
    const gitBranch = new GitBranches(git);
    return gitBranch.setCurrentBranch(currBranch);
  }

  private async setHistory(
    git: SimpleGit,
    repoPath: string,
    history?: GitAction[]
  ) {
    const gitHistory = new GitHistory(git, repoPath);
    return gitHistory.setHistory(history);
  }

  async setup(): Promise<void> {
    if (!this.repositories) {
      return;
    }

    const repoState: RepositoryState[] = [];

    // loop through all the repositories and construct them according to the state specified in config file
    for (const [repoName, currentRepo] of Object.entries(this.repositories)) {
      // initialize the repo and return git instance configured for the repo and return repo path
      const { git, repoPath } = await this.initRepo(repoName);

      // create repository files
      const filesCreated = await this.setFiles(
        git,
        repoPath,
        currentRepo.files
      );

      // create all local and remote branches
      const { localBranches, pushedBranches } = await this.setBranches(
        git,
        currentRepo.localBranches,
        currentRepo.pushedBranches
      );

      // create the required history for the repo
      const historyFiles = await this.setHistory(
        git,
        repoPath,
        currentRepo.history
      );

      // set the active branch if defined otherwise let it be main
      const currentBranch = await this.setCurrentBranch(
        git,
        currentRepo.currentBranch
      );

      // add the repo details which are to be returned
      repoState.push({
        name: repoName,
        path: repoPath,
        currentBranch,
        pushedBranches,
        localBranches,
        files: [...filesCreated, ...historyFiles],
      });
    }
    this.repositoryState = repoState;
  }

  async teardown(): Promise<void> {
    let promises: any[] = [];
    this.repositoryState.forEach((state) => {
      promises.push(rm(state.path, { recursive: true }));
    });
    await Promise.all(promises);
    this.repositoryState = [];
  }

  getAllStates(): RepositoryState[] {
    return this.repositoryState;
  }

  getState(name: string): RepositoryState | undefined {
    return this.repositoryState.find((state) => {
      return name === state.name;
    });
  }
}
