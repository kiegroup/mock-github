import { ActivatedEndpoint } from "./activated-endpoint";
import { CompileMockAPIs } from "./action-compile.types";

function mock(apis: CompileMockAPIs[]) {
  for (const api of apis) {
    for (const endpoint of api.endpoints) {
      const activatedEndpoint = new ActivatedEndpoint(endpoint, api.baseUrl);
      activatedEndpoint.setResponse(endpoint.response)
    }
  }
}
