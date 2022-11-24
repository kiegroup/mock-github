import { JSONSchemaType } from "ajv";
import { Endpoints } from "@mg/endpoint-mocker/endpoint-mocker.types";
export const EndpointSchema: JSONSchemaType<Endpoints> = {
  type: "object",
  additionalProperties: {
    type: "object",
    additionalProperties: {
      type: "object",
      properties: {
        path: {
          type: "string",
        },
        method: {
          type: "string",
          enum: ["delete", "get", "patch", "post", "put"],
        },
        parameters: {
          type: "object",
          properties: {
            path: {
              type: "array",
              items: {
                type: "string",
              },
            },
            query: {
              type: "array",
              items: {
                type: "string",
              },
            },
            body: {
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          required: ["body", "path", "query"],
        },
      },
      required: ["method", "parameters", "path"],
    },
    required: [],
  },
  required: [],
};
