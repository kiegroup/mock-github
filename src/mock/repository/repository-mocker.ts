import simpleGit, { SimpleGit } from "simple-git";
import { Mocker } from "../mocker";
import {
  Repositories,
  RepositoryFile,
  RepositoryInterface,
  RepositoryState,
} from "./repository-mocker-types";
import path from "path";
import { rm, copyFile, writeFile } from "node:fs/promises";
import { mkdirSync } from "fs";
import { GitHistory } from "./git-history-mocker";

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
    workflow?: string[]
  ): Promise<{ git: SimpleGit; repoPath: string }> {
    // get repository, remote, remote/origin and remote/upstream paths
    const repoPath = path.join(this.setupPath, repoName);
    const remotePath = path.join(repoPath, "remote");
    const originPath = path.join(remotePath, "origin");
    const upstreamPath = path.join(remotePath, "upstream");

    // create origin and upstream folders
    mkdirSync(originPath, { recursive: true });
    mkdirSync(upstreamPath, { recursive: true });

    // load git instances for the repository, origin and upstream
    const git: SimpleGit = simpleGit(repoPath);
    const originGit: SimpleGit = simpleGit(originPath);
    const upstreamGit: SimpleGit = simpleGit(upstreamPath);

    const promises: Promise<unknown>[] = [
      originGit
        .init(true, ["-b", "main"])
        .addConfig("user.name", "Github")
        .addConfig("user.email", "noreply@github.com"), // initialize origin as a git repository
      upstreamGit
        .init(true, ["-b", "main"])
        .addConfig("user.name", "Github")
        .addConfig("user.email", "noreply@github.com"), // initialize upstream as a git repository
      writeFile(path.join(repoPath, ".gitignore"), "remote"), // add remote to gitignore of the repository so that upstream and origin aren't pushed
    ];

    if (workflow) {
      const workflowDir = path.join(repoPath, ".github", "workflows");
      mkdirSync(workflowDir, { recursive: true });
      workflow.forEach((flow) => {
        promises.push(
          copyFile(flow, path.join(workflowDir, path.basename(flow)))
        );
      });
    }

    await Promise.all(promises);

    // initialize the repository and add origin, upstream and perform first push on main
    await git
      .init(["-b", "main"])
      .addConfig("user.name", "Github")
      .addConfig("user.email", "noreply@github.com")
      .addRemote("origin", originPath)
      .addRemote("upstream", upstreamPath)
      .add(".")
      .commit("initialization")
      .push("origin", "main", ["--set-upstream"]);

    return { git, repoPath };
  }

  /**
   * Create branches and push them if necessary
   * @param git git instance
   * @param lb array of branches to be kept local (unpushed)
   * @param pb array of branches to be pushed
   * @returns
   */
  private async setBranches(
    git: SimpleGit,
    lb: string[] | undefined,
    pb: string[] | undefined
  ): Promise<{ localBranches: string[]; pushedBranches: string[] }> {
    // get branch info and create all the branches and push them to remote
    const pushedBranches = pb ? pb : [];

    for (const branch of pushedBranches) {
      await git
        .checkoutLocalBranch(branch)
        .push("origin", branch, ["--set-upstream"]);
      await git.checkout("main");
    }

    // get branch info and create all the branches and push them to remote
    const localBranches = lb ? lb : [];
    for (const branch of localBranches) {
      await git.checkoutLocalBranch(branch).checkout("main");
    }

    return { localBranches, pushedBranches: ["main", ...pushedBranches] };
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
      const { git, repoPath } = await this.initRepo(
        repoNames[i],
        currRepo.workflow
      );

      // create all local and remote branches
      const { localBranches, pushedBranches } = await this.setBranches(
        git,
        currRepo.localBranches,
        currRepo.pushedBranches
      );

      // set the active branch if defined otherwise let it be main
      const currBranch = currRepo.currentBranch ?? "main";
      if (
        localBranches.includes(currBranch) ||
        pushedBranches.includes(currBranch)
      ) {
        await git.checkout(currBranch);
      } else {
        await git.checkoutLocalBranch(currBranch);
        localBranches.push(currBranch);
      }

      // create the required history for the repo
      const gitHistory = new GitHistory(
        git,
        currRepo.history,
        repoPath,
        currBranch
      );
      const files: RepositoryFile[] = await gitHistory.setHistory();

      // add the repo details which are to be returned
      repoState.push({
        name: repoNames[i],
        path: repoPath,
        branch: currBranch,
        pushedBranches,
        localBranches,
        files,
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
