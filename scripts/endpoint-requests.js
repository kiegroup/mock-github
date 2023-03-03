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
  "endpoint-request.ts"
);

const newEndpointRequest = {};

generateEndpointRequest();

async function generateEndpointRequest() {
  ENDPOINTS.forEach((endpoint) => {
    if (isDeprecated(endpoint)) return;

    const scope = endpoint.scope;

    const isUploadReleaseAssetUrl = /^\{origin\}/.test(endpoint.url);
    if (isUploadReleaseAssetUrl) {
      endpoint.url = endpoint.url.slice("{origin}".length);
    }

    if (!newEndpointRequest[scope]) {
      newEndpointRequest[scope] = {};
    }
    const method = endpoint.method.toLowerCase();
    const path = endpoint.url.slice(
      0,
      (endpoint.url.lastIndexOf("{?") + endpoint.url.length + 1) %
        (endpoint.url.length + 1)
    );

    newEndpointRequest[scope][
      endpoint.id
    ] = `new MoctokitRequestMocker<"${path}", "${method}">(baseUrl, endpoints["${scope}"]["${endpoint.id}"], allowUnmocked).request`;
  });
  const content = prettier
    .format(
      `import {MoctokitRequestMocker} from "@mg/moctokit/request/request-mocker";
    import endpoints from "./endpoint-details";
     const endpointToMethod = (baseUrl: string, allowUnmocked = false) => (${JSON.stringify(
       newEndpointRequest
     )})

    export default endpointToMethod`,
      { parser: "typescript" }
    )
    .replace(
      /('|")(new MoctokitRequestMocker<.+>\(baseUrl, endpoints\[.+\]\[.+\], allowUnmocked\).request)('|")/g,
      "$2"
    );

  writeFileSync(ROUTES_PATH, content);
  console.log(`${ROUTES_PATH} written.`);
}
