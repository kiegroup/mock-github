import { JSONSchemaType } from "ajv";
import { Action } from "@mg/github/action/action-mocker.types";

export const ActionSchema: JSONSchemaType<Action> = {
  type: "object",
  properties: {
    input: {
      type: "object",
      additionalProperties: {
        type: "string",
      },
      required: [],
      nullable: true,
    },
    archive: {
      type: "object",
      properties: {
        serverPort: {
          type: "string",
        },
      },
      required: ["serverPort"],
      nullable: true,
    },
  },
};
