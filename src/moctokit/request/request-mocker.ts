import nock, { DataMatcher, DataMatcherMap, RequestBodyMatcher } from "nock";
import { MockRequestParameters } from "./request-mocker.types";
import { paths } from "@octokit/openapi-types";
import { ResponseMocker } from "../response/response-mocker";
import { EndpointDetails } from "../endpoint-details.types";

export class RequestMocker<
  Path extends keyof paths,
  Method extends keyof paths[Path]
> {
  private nockScope: nock.Scope;
  private endpointDetails: EndpointDetails

  constructor(baseUrl: string, endpointDetails: EndpointDetails) {
    this.nockScope = nock(baseUrl);
    this.endpointDetails = endpointDetails;
  }

  private createInterceptor(
    pathParams?: Record<string, unknown>,
    query?: DataMatcherMap,
    requestBody?: RequestBodyMatcher
  ): nock.Interceptor {
    let interceptor: nock.Interceptor;
    let path: string | RegExp = this.endpointDetails.path;
    let regexFlag = false;
    // replace any path variables with either values or regex expression
    if (pathParams) {
      for (const [pathParam, value] of Object.entries(pathParams)) {
        path = path.replace(new RegExp(`{${pathParam}}`, "g"), `${value}`);
        regexFlag ||= value instanceof RegExp;
      }
    } else {
      // if there were no path variable defined, then we want to mock all paths possible
      path = path.replace(/\{\}/g, ".+");
      regexFlag = true;
    }


    // if a regex expression was encountered then path is used as a regex expression
    if (regexFlag) {
      path = new RegExp(path);
    }

    switch (this.endpointDetails.method) {
      case "get":
        interceptor = this.nockScope.get(path);
        break;
      case "delete":
        interceptor = this.nockScope.delete(path, requestBody);
        break;
      case "patch":
        interceptor = this.nockScope.patch(path, requestBody);
        break;
      case "post":
        interceptor = this.nockScope.post(path, requestBody);
        break;
      case "put":
        interceptor = this.nockScope.put(path, requestBody);
        break;
      default:
        throw new Error("Invalid http method");
    }

    // if query is defined use that otherwise set it to true to indicate that we want to mock the path regardless of query
    return interceptor.query(query ?? true);
  }

  request(
    params?: MockRequestParameters<paths[Path][Method]>
  ) {
    let pathParams: Record<string, unknown> | undefined = undefined;
    let query: DataMatcherMap | undefined = undefined;
    let requestBody: RequestBodyMatcher | undefined = undefined;
    if (params) {
      // separate out the path, query and body params
      for (const [param, value] of Object.entries(params)) {
        if (this.endpointDetails.parameters.path.includes(param)) {
          if (!pathParams) {
            pathParams = {};
          }
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

    return new ResponseMocker<Path, Method>(
      this.createInterceptor(pathParams, query, requestBody)
    );
  }
}
