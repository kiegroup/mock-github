import { JSONSchemaType } from "ajv";
import { Repository } from "../../github/repository/repository-mocker.types";
import { BranchSchema } from "./branch";
import { MergeSchema, PushSchema } from "./history";
import { CreateRepositoryFileSchema } from "./repository-file";

export const RepositorySchema: JSONSchemaType<Repository> = {
  type: "object",
  properties: {
    localBranches: {
      ...BranchSchema,
      nullable: true,
    },
    pushedBranches: {
      ...BranchSchema,
      nullable: true,
    },
    currentBranch: {
      type: "string",
      nullable: true,
    },
    owner: {
      type: "string",
      nullable: true,
    },
    forkedFrom: {
      type: "string",
      nullable: true,
    },
    files: {
      ...CreateRepositoryFileSchema,
      nullable: true,
    },
    history: {
      type: "array",
      items: {
        anyOf: [MergeSchema, PushSchema],
      },
      nullable: true,
    },
  },
};
