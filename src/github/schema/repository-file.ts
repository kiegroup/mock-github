import { JSONSchemaType } from "ajv";
import { CreateRepositoryFile } from "@mg/github/repository/files/repository-file-system.types";

export const CreateRepositoryFileSchema: JSONSchemaType<
  CreateRepositoryFile[]
> = {
  type: "array",
  items: {
    type: "object",
    properties: {
      src: {
        type: "string",
      },
      dest: {
        type: "string",
      },
    },
    required: ["dest", "src"],
  },
};
