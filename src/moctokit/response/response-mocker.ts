import nock from "nock";
import { paths } from "@octokit/openapi-types";
import { ExtractMockResponse } from "./respone-mocker.types";

export class ResponseMocker<
  Path extends keyof paths,
  Method extends keyof paths[Path]
> {
  private interceptor: nock.Interceptor;
  constructor(interceptor: nock.Interceptor) {
    this.interceptor = interceptor;
  }

  repeat(times: number) {
    this.interceptor = this.interceptor.times(times);
    return this;
  }

  reply(response: ExtractMockResponse<paths[Path][Method]>) {
    this.interceptor.reply(response.status, response.data as nock.Body);
  }
}

