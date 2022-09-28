import { MockerParams } from "./mocker.types";
import { CompilerRequestMocker } from "../request/request-mocker";

function mock(apis: MockerParams[]) {
  for (const api of apis) {
    new CompilerRequestMocker(api.baseUrl, api.endpointDetails)
      .request(api.params)
      .setResponse(api.responses)
      .reply();
  }
}
