import { MockerParams } from "./mocker.types";
import { CompilerResponseMocker } from "./response-mocker";
import { DataMatcherMap } from "nock/types";

function mock(apis: MockerParams[]) {
  for (const api of apis) {
    const query: DataMatcherMap = {};
    Object.entries(api.query).forEach(([key, value]) => {
      query[key] = value.isRegex ? new RegExp(`${value.value}`) : value.value;
    });

    const requestBody: DataMatcherMap = {};
    Object.entries(api.requestBody).forEach(([key, value]) => {
      requestBody[key] = value.isRegex
        ? new RegExp(`${value.value}`)
        : value.value;
    });

    new CompilerResponseMocker(
      api.baseUrl,
      api.path.isRegex ? new RegExp(api.path.value) : api.path.value,
      api.method,
      Object.keys(query).length === 0 ? undefined : query,
      Object.keys(requestBody).length === 0 ? undefined : requestBody
    )
      .setResponse(api.responses)
      .reply();
  }
}
