import { JSONSchemaType } from "ajv";
import {
  Push,
  Merge,
  GitActionTypes,
} from "../repository/history/repository-history.types";
import { CreateRepositoryFileSchema } from "./repository-file";

export const PushSchema: JSONSchemaType<Push> = {
  type: "object",
  properties: {
    branch: {
      type: "string",
    },
    files: {
      ...CreateRepositoryFileSchema,
      nullable: true,
    },
    commitMessage: {
      type: "string",
      nullable: true,
    },
    action: {
      type: "string",
      enum: [GitActionTypes.MERGE, GitActionTypes.PUSH],
    },
  },
  required: ["branch", "action"],
};

export const MergeSchema: JSONSchemaType<Merge> = {
  type: "object",
  properties: {
    head: {
      type: "string",
    },
    base: {
      type: "string",
    },
    commitMessage: {
      type: "string",
      nullable: true,
    },
    action: {
      type: "string",
      enum: [GitActionTypes.MERGE, GitActionTypes.PUSH],
    },
  },
  required: ["head", "base", "action"],
};
