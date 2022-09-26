import nock from "nock";
import { paths } from "@octokit/openapi-types";
import { ExtractMockResponse } from "./respone-mocker.types";
import { ResponseMocker } from "../../endpoint-mocker/response/abstract-response-mocker";

export class MoctokitResponseMocker<
  Path extends keyof paths,
  Method extends keyof paths[Path]
> extends ResponseMocker {
  reply(response: ExtractMockResponse<paths[Path][Method]>) {
    this.interceptor.reply(response.status, response.data as nock.Body);
  }
}
