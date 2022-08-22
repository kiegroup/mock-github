import { ActivatedEndpoint } from "../mock/api/activated-endpoint";
import { CompileMockAPIs } from "./action-compile.types";

function execute(apis: CompileMockAPIs[]) {
    for (const api of apis) {
      for (const endpoint of api.endpoints) {
        const activatedEndpoint = new ActivatedEndpoint(
          {
            ...endpoint,
            response: {},
          },
          api.baseUrl
        );
        endpoint.response.forEach((res) => {
          activatedEndpoint.setResponse(res, res.repeat);
        });
      }
    }
  }
  