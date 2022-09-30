import { ActionMocker } from "./action/action-mocker";
import { EnvMocker } from "./env/env-mocker";
import { Config } from "./github-mocker.types";
import { Mocker } from "./mocker";
import { RepositoryMocker } from "./repository/repository-mocker";
import { readFileSync, mkdirSync, existsSync, rmSync } from "fs";
import { EnvMethods } from "./env/env-mocker.types";
import { ActionMockerMethods } from "./action/action-mocker.types";
import { RepositoryStateInterface } from "./repository/state/repository-state.types";

export class MockGithub implements Mocker {
  private actionMocker: ActionMocker;
  private envMocker: EnvMocker;
  private repoMocker: RepositoryMocker;
  private setupPath: string;
  private config: Config;
  private setupDirCreated: boolean;

  constructor(configFilePath: string, setupPath: string = __dirname) {
    this.config = JSON.parse(readFileSync(configFilePath, "utf8"));
    this.setupPath = setupPath;
    this.actionMocker = new ActionMocker(this.config.action, this.setupPath);
    this.envMocker = new EnvMocker(this.config.env);
    this.repoMocker = new RepositoryMocker(
      this.config.repositories,
      this.setupPath
    );
    this.setupDirCreated = false;
  }
  async setup(): Promise<void> {
    if (!existsSync(this.setupPath)) {
      mkdirSync(this.setupPath);
      this.setupDirCreated = true;
    }
    await Promise.all([
      ...(this.config.create ? [this.repoMocker.setup()] : []),
      this.envMocker.setup(),
    ]);

    // trigger after env has been setup so that any env vars needed in action mocker are not overriden by user env vars
    await this.actionMocker.setup();
  }

  async teardown(): Promise<void> {
    await Promise.all([
      ...(this.config.create ? [this.repoMocker.teardown()] : []),
      this.actionMocker.teardown(),
      this.envMocker.teardown(),
    ]);
    if (this.setupDirCreated) rmSync(this.setupPath, { recursive: true });
  }

  get env(): EnvMethods {
    return {
      update: this.envMocker.update,
      delete: this.envMocker.delete,
      get: this.envMocker.get,
      getAll: this.envMocker.getAll,
    };
  }

  get repository(): RepositoryStateInterface {
    return this.repoMocker.repositoryState;
  }

  get action(): ActionMockerMethods {
    return {
      input: this.actionMocker.input,
      archiver: this.actionMocker.archiver,
    };
  }
}
