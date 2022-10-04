import { Action } from "./action/action-mocker.types";
import { Env } from "./env/env-mocker.types";
import { Repositories } from "./repository/repository-mocker.types";

export type Config = {
  repositories: Repositories;
  env?: Env;
  action?: Action;
};
