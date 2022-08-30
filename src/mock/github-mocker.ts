import { ActionMocker } from "./action/action-mocker";
import { ApiMocker } from "./api/api-mocker";
import { EnvMocker } from "./env/env-mocker";
import { Config } from "./github-mocker.types";
import { Mocker } from "./mocker";
import { RepositoryMocker } from "./repository/repository-mocker";
import { readFileSync, mkdirSync, existsSync, rmSync } from "fs";
import { RepositoryInterface } from "./repository/repository-mocker.types";
import { EnvInterface } from "./env/env-mocker.types";
import { ApiInterface } from "./api/api-mocker.types";
import { ActionInterface } from "./action/action-mocker.types";

export class MockGithub implements Mocker {
  private actionMocker: ActionMocker;
  private apiMocker: ApiMocker;
  private envMocker: EnvMocker;
  private repoMocker: RepositoryMocker;
  private setupPath: string;
  private config: Config;
  private setupDirCreated: boolean;

  constructor(configFilePath: string, setupPath: string = __dirname) {
    this.config = JSON.parse(readFileSync(configFilePath, "utf8"));
    this.setupPath = setupPath;
    this.actionMocker = new ActionMocker(this.config.action, this.setupPath);
    this.apiMocker = new ApiMocker(this.config.api);
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
      this.repoMocker.setup(),
      this.envMocker.setup(),
      this.apiMocker.setup(),
    ]);

    // trigger after env has been setup so that any env vars needed in action mocker are not overriden by user env vars
    await this.actionMocker.setup();
  }

  async teardown(): Promise<void> {
    await Promise.all([
      this.repoMocker.teardown(),
      this.actionMocker.teardown(),
      this.envMocker.teardown(),
      this.apiMocker.teardown(),
    ]);
    if (this.setupDirCreated) rmSync(this.setupPath, { recursive: true });
  }


  get env(): EnvInterface {
    return {
        update: this.envMocker.update,
        delete: this.envMocker.delete,
        get: this.envMocker.get,
        getAll: this.envMocker.getAll
    }
  }

  get api(): ApiInterface {
    return {
        add: this.apiMocker.add,
        activate: this.apiMocker.activate,
        deactivate: this.apiMocker.deactivate
    }
  }
  
  get repository(): RepositoryInterface {
    return {
        getAllStates: this.repoMocker.getAllStates,
        getState: this.repoMocker.getState
    }
  }

  get action(): ActionInterface {
    return {
        event: this.actionMocker.event,
        input: this.actionMocker.input,
        archiver: this.actionMocker.archiver
    }
  }

}
