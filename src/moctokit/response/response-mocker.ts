import nock from "nock/types";
import { paths } from "@octokit/openapi-types";
import { ExtractMockResponse } from "./respone-mocker.types";
import { ResponseMocker } from "../../endpoint-mocker/response/abstract-response-mocker";

export class MoctokitResponseMocker<
  Path extends keyof paths,
  Method extends keyof paths[Path]
> extends ResponseMocker<
  ExtractMockResponse<paths[Path][Method]>["data"],
  ExtractMockResponse<paths[Path][Method]>["status"]
> {
  constructor(interceptor: nock.Interceptor) {
    super(interceptor);
    this.responses = [];
  }

  override reply(response?: ExtractMockResponse<paths[Path][Method]>) {
    if (response) {
      this.interceptor.reply(response.status, response.data);
    } else {
      super.reply();
    }
  }
}
