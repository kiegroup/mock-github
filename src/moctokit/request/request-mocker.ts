import { DataMatcher, DataMatcherMap, RequestBodyMatcher } from "nock";
import { MockRequestParameters } from "./request-mocker.types";
import { paths } from "@octokit/openapi-types";
import { MoctokitResponseMocker } from "../response/response-mocker";
import { EndpointDetails } from "../../endpoint-mocker/endpoint-mocker.types";
import { RequestMocker } from "../../endpoint-mocker/request/abstract-request-mocker";

export class MoctokitRequestMocker<
  Path extends keyof paths,
  Method extends keyof paths[Path]
> extends RequestMocker {
  
  constructor(baseUrl: string, endpointDetails: EndpointDetails) {
    super(baseUrl, endpointDetails)

    // need to bind the instance context to the function. otherwise it is lost during endpointToMethod generation
    this.request = this.request.bind(this);
  }

  request(params?: MockRequestParameters<paths[Path][Method]>) {
    let pathParams: Record<string, unknown> = {};
    let query: DataMatcherMap | undefined = undefined;
    let requestBody: RequestBodyMatcher | undefined = undefined;
    if (params) {
      // separate out the path, query and body params
      for (const [param, value] of Object.entries(params)) {
        if (this.endpointDetails.parameters.path.includes(param)) {
          pathParams[param as string] = value;
        }

        if (this.endpointDetails.parameters.query.includes(param)) {
          if (!query) {
            query = {};
          }
          query[param as string] = value as DataMatcher;
        }

        if (this.endpointDetails.parameters.body.includes(param)) {
          if (!requestBody) {
            requestBody = {};
          }
          requestBody[param as string] = value as DataMatcher;
        }
      }
    }

    return new MoctokitResponseMocker<Path, Method>(
      this.createInterceptor(pathParams, query, requestBody)
    );
  }
}
