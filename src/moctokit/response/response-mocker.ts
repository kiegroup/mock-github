import { paths } from "@octokit/openapi-types-ghec";
import { ExtractMockResponse } from "@mg/moctokit/response/response-mocker.types";
import { ResponseMocker } from "@mg/endpoint-mocker/response/abstract-response-mocker";

export class MoctokitResponseMocker<
  Path extends keyof paths,
  Method extends keyof paths[Path]
> extends ResponseMocker<
  ExtractMockResponse<paths[Path][Method]>["data"],
  ExtractMockResponse<paths[Path][Method]>["status"]
> {}
