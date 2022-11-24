import { JSONSchemaType } from "ajv";
import { API } from "@mg/mockapi/mockapi.types";
import { EndpointSchema } from "@mg/mockapi/schema/endpoints";

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
