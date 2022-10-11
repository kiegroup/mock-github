import { paths } from "@octokit/openapi-types-ghec";
import { ExtractMockResponse } from "./respone-mocker.types";
import { ResponseMocker } from "../../endpoint-mocker/response/abstract-response-mocker";

export class MoctokitResponseMocker<
  Path extends keyof paths,
  Method extends keyof paths[Path]
> extends ResponseMocker<
  ExtractMockResponse<paths[Path][Method]>["data"],
  ExtractMockResponse<paths[Path][Method]>["status"]
> {}
