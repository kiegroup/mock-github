import { JSONSchemaType } from "ajv";
import { Repository } from "@mg/github/repository/repository-mocker.types";
import { BranchSchema } from "@mg/github/schema/branch";
import { MergeSchema, PushSchema } from "@mg/github/schema/history";
import { CreateRepositoryFileSchema } from "@mg/github/schema/repository-file";

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
