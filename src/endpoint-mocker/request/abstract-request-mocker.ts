import nock, { DataMatcher, DataMatcherMap, RequestBodyMatcher } from "nock";
import { EndpointDetails } from "../endpoint-mocker.types";

export abstract class RequestMocker {
  protected nockScope: nock.Scope;
  protected endpointDetails: EndpointDetails;

  constructor(baseUrl: string, endpointDetails: EndpointDetails) {
    this.nockScope = nock(baseUrl);
    this.endpointDetails = endpointDetails;
  }

  protected parseParams(params?: Record<string, unknown>) {
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
    return { pathParams, query, requestBody };
  }

  protected createInterceptor(
    pathParams: Record<string, unknown>,
    query?: DataMatcherMap,
    requestBody?: DataMatcherMap
  ): nock.Interceptor {
    let interceptor: nock.Interceptor;
    let path: string | RegExp = this.endpointDetails.path;
    let regexFlag = false;

    // replace any path variables with either values or regex expression
    for (const match of this.endpointDetails.path.match(/\{[^\{\}]+\}/g) ??
      []) {
      let replacementParam;
      if (pathParams[match.slice(1, -1)]) {
        const value = pathParams[match.slice(1, -1)];
        replacementParam = value instanceof RegExp ? value.source : `${value}`;
        regexFlag ||= value instanceof RegExp;
      } else {
        replacementParam = ".+";
        regexFlag = true;
      }
      path = (path as string).replace(new RegExp(match), replacementParam);
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
}
