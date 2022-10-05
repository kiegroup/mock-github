import { JSONSchemaType } from "ajv";

export const BranchSchema: JSONSchemaType<string[]> = {
  type: "array",
  items: {
    type: "string",
  },
};
