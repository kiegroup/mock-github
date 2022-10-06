import { JSONSchemaType } from "ajv";
import { API } from "../mockapi.types";
import { EndpointSchema } from "./endpoints";

export const APISchema: JSONSchemaType<API> = {
  type: "object",
  additionalProperties: {
    type: "object",
    properties: {
      baseUrl: {
        type: "string",
      },
      endpoints: EndpointSchema,
    },
    required: ["baseUrl", "endpoints"],
  },
  required: [],
};
