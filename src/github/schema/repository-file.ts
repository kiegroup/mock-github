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
      filter: {
        type: "array",
        items: {
          type: "string",
        },
        nullable: true,
      },
    },
    required: ["dest", "src"],
  },
};
