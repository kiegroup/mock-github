import { Action } from "./action/action-mocker.types"
import { Api } from "./api/api-mocker.types"
import { Env } from "./env/env-mocker.types"
import { Repositories } from "./repository/repository-mocker-types"

export type Config = {
    repositories?: Repositories,
    api?: Api,
    env?: Env,
    action?: Action
}