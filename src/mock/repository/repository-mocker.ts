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
import { rm, copyFile, writeFile } from "node:fs/promises";
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
  private async initRepo(
    repoName: string,
    files?: SetupRepositoryFile[]
  ): Promise<{
    git: SimpleGit;
    repoPath: string;
    repoFiles: RepositoryFile[];
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

    // generate repository files
    const repofs = new RepositoryFileSystem(repoPath);

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
      repofs.copyFiles(files),
    ]);

    const [gitignore, repoFiles] = await Promise.all([
      writeFile(path.join(repoPath, ".gitignore"), REMOTE).then(() => ({
        path: path.join(repoPath, ".gitignore"),
        branch: DEFAULT_BRANCH,
      })), // add remote to gitignore of the repository so that upstream and origin aren't pushed,
      repofs.copyFiles(files),
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
      repoFiles: [...repoFiles, gitignore]
    };
  }

  async setup(): Promise<void> {
    if (!this.repositories) {
      return;
    }

    // get all names of the repositories
    const repoNames = Object.keys(this.repositories);
    const repoState: RepositoryState[] = [];

    // loop through all the repositories and construct them according to the state specified in config file
    for (let i = 0; i < repoNames.length; i++) {
      const currRepo = this.repositories[repoNames[i]];

      // initialize the repo and return git instance configured for the repo and return repo path
      const { git, repoPath, repoFiles } = await this.initRepo(repoNames[i]);

      // create all local and remote branches
      const gitBranches = new GitBranches(git);
      await gitBranches.setLocalBranches(currRepo.localBranches);
      await gitBranches.setPushedBranches(currRepo.localBranches);

      // set the active branch if defined otherwise let it be main
      const currentBranch = await gitBranches.setCurrentBranch(
        currRepo.currentBranch
      );

      // create the required history for the repo
      const gitHistory = new GitHistory(git, repoPath);
      const gitHistoryFiles: RepositoryFile[] = await gitHistory.setHistory();

      // add the repo details which are to be returned
      repoState.push({
        name: repoNames[i],
        path: repoPath,
        branch: currentBranch,
        pushedBranches: [...gitBranches.pushedBranches, DEFAULT_BRANCH],
        localBranches: gitBranches.localBranches,
        files: [...gitHistoryFiles, ...repoFiles],
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
