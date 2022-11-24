import { Action } from "@mg/github/action/action-mocker.types";
import { Env } from "@mg/github/env/env-mocker.types";
import { Repositories } from "@mg/github/repository/repository-mocker.types";

export type Config = {
  repo?: Repositories;
  env?: Env;
  action?: Action;
};
