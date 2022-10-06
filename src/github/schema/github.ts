import { JSONSchemaType } from "ajv";
import { Config } from "../github-mocker.types";
import { ActionSchema } from "./action";
import { RepositorySchema } from "./repository";

export const GithubConfigSchema: JSONSchemaType<Config> = {
  type: "object",
  properties: {
    repositories: {
      type: "object",
      additionalProperties: RepositorySchema,
      required: [],
      nullable: true,
    },
    env: {
      type: "object",
      additionalProperties: {
        type: "string",
      },
      required: [],
      nullable: true,
    },
    action: {
      ...ActionSchema,
      nullable: true,
    },
  },
};
