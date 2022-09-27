const { writeFileSync } = require("fs");
const { join } = require("path");

const prettier = require("prettier");

const ENDPOINTS = require("./generated/endpoints.json");
const { isDeprecated } = require("./util");

const ROUTES_PATH = join(
  __dirname,
  "..",
  "src",
  "moctokit",
  "generated",
  "endpoint-details.ts"
);

const endpointDetails = {};

generateEndpointDetails();

async function generateEndpointDetails() {
  ENDPOINTS.forEach((endpoint) => {
    if (isDeprecated(endpoint)) return;

    const scope = endpoint.scope;

    const isUploadReleaseAssetUrl = /^\{origin\}/.test(endpoint.url);
    if (isUploadReleaseAssetUrl) {
      endpoint.url = endpoint.url.slice("{origin}".length);
    }

    if (!endpointDetails[scope]) {
      endpointDetails[scope] = {};
    }

    endpointDetails[scope][endpoint.id] = {
      method: endpoint.method.toLowerCase(),
      path: endpoint.url.slice(
        0,
        (endpoint.url.lastIndexOf("{?") + endpoint.url.length + 1) %
          (endpoint.url.length + 1)
      ),
      parameters: {
        path: (endpoint.parameters ?? [])
          .filter((param) => param.in === "PATH")
          .map((param) => param.name),
        query: (endpoint.parameters ?? [])
          .filter((param) => param.in === "QUERY")
          .map((param) => param.name),
        body: (endpoint.parameters ?? [])
          .filter((param) => param.in === "BODY")
          .map((param) => param.name),
      },
    };
  });

  writeFileSync(
    ROUTES_PATH,
    prettier.format(
      `import {Endpoints} from "../../endpoint-mocker/endpoint-mocker.types";
       const endpoints: Endpoints = ${JSON.stringify(endpointDetails)}
  
      export default endpoints`,
      { parser: "typescript" }
    )
  );
  console.log(`${ROUTES_PATH} written.`);
}
