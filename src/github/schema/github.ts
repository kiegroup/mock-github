import { JSONSchemaType } from "ajv";
import { Config } from "@mg/github/github-mocker.types";
import { ActionSchema } from "@mg/github/schema/action";
import { RepositorySchema } from "@mg/github/schema/repository";

export const GithubConfigSchema: JSONSchemaType<Config> = {
  type: "object",
  properties: {
    repo: {
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
