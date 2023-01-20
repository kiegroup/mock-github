import { ActionMocker } from "@mg/github/action/action-mocker";
import { EnvMocker } from "@mg/github/env/env-mocker";
import { Config } from "@mg/github/github-mocker.types";
import { Mocker } from "@mg/github/mocker";
import { RepositoryMocker } from "@mg/github/repository/repository-mocker";
import { readFileSync, mkdirSync, existsSync, rmSync } from "fs-extra";
import { EnvMethods } from "@mg/github/env/env-mocker.types";
import { ActionMockerMethods } from "@mg/github/action/action-mocker.types";
import { RepositoryStateMethods } from "@mg/github/repository/state/repository-state.types";
import Ajv from "ajv";
import { GithubConfigSchema } from "@mg/github/schema/github";

export class MockGithub implements Mocker {
  private actionMocker: ActionMocker;
  private envMocker: EnvMocker;
  private repoMocker: RepositoryMocker;
  private setupPath: string;
  private config: Config;
  private setupDirCreated: boolean;
  private hasCalledSetup: boolean;

  constructor(config: string | Config, setupPath: string = process.cwd()) {
    this.config = this.validateConfig(config);
    this.setupPath = setupPath;
    this.actionMocker = new ActionMocker(this.config.action, this.setupPath);
    this.envMocker = new EnvMocker(this.config.env);
    this.repoMocker = new RepositoryMocker(this.config.repo, this.setupPath);
    this.setupDirCreated = false;
    this.hasCalledSetup = false;
  }

  async setup(): Promise<void> {
    // create the setup dir if does not exist
    if (!existsSync(this.setupPath)) {
      mkdirSync(this.setupPath);
      this.setupDirCreated = true;
    }

    await Promise.all([this.repoMocker.setup(), this.envMocker.setup()]);

    // trigger after env has been setup so that any env vars needed in action mocker are not overriden by user env vars
    await this.actionMocker.setup();

    this.hasCalledSetup = true;
  }

  async teardown(): Promise<void> {
    await Promise.all([
      this.repoMocker.teardown(),
      this.actionMocker.teardown(),
      this.envMocker.teardown(),
    ]);

    // rm the setup dir only if we had created it
    if (this.setupDirCreated) {rmSync(this.setupPath, { recursive: true });}

    this.hasCalledSetup = false;
  }

  get env(): EnvMethods {
    if (!this.hasCalledSetup) {
      throw new Error("Env has not been setup");
    }
    return {
      update: this.envMocker.update.bind(this.envMocker),
      delete: this.envMocker.delete.bind(this.envMocker),
      get: this.envMocker.get.bind(this.envMocker),
    };
  }

  get repo(): RepositoryStateMethods {
    if (!this.hasCalledSetup) {
      throw new Error("Repositories have not been setup");
    }
    return this.repoMocker.repositoryState;
  }

  get action(): ActionMockerMethods {
    if (!this.hasCalledSetup) {
      throw new Error("Action has not been setup");
    }
    return {
      input: this.actionMocker.input,
      archiver: this.actionMocker.archiver,
    };
  }

  private validateConfig(config: string | Config) {
    const rawJSON =
      typeof config === "string"
        ? JSON.parse(readFileSync(config, "utf8"))
        : config;
    const ajv = new Ajv({ allowUnionTypes: true });
    const validate = ajv.compile(GithubConfigSchema);
    if (validate(rawJSON)) {
      return rawJSON;
    } else {
      throw new Error(JSON.stringify(validate.errors));
    }
  }
}
