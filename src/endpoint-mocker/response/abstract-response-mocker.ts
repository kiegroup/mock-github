import querystring from "node:querystring";
import { DataMatcherMap, RequestBodyMatcher } from "nock";
import common from "nock/lib/common.js";
import matchBody from "nock/lib/match_body.js";
import {
  Header,
  Response,
} from "@mg/endpoint-mocker/response/abstract-response-mocker.types";
import { MockAgent } from "undici";
import { MockInterceptor } from "undici/types/mock-interceptor";
import { IncomingHttpHeaders } from "undici/types/header";
import { EndpointMethod } from "../endpoint-mocker.types";

export abstract class ResponseMocker<TData, Status extends number> {
  private agent: MockAgent;
  private responses: Response<TData, Status>[];
  private headers: Header;
  private path: string | RegExp;
  private query?: DataMatcherMap;
  private requestBody?: RequestBodyMatcher;
  private method: EndpointMethod;
  private baseUrl: string;

  constructor(
    agent: MockAgent,
    baseUrl: string,
    path: string | RegExp,
    method: EndpointMethod,
    query?: DataMatcherMap,
    requestBody?: RequestBodyMatcher
  ) {
    this.agent = agent;
    this.baseUrl = baseUrl;
    this.responses = [];
    this.headers = {};
    this.path = path;
    this.query = query;
    this.requestBody = requestBody;
    this.method = method;
  }

  matchReqHeaders(headers: Header) {
    this.headers = { ...this.headers, ...headers };
    if (Object.keys(this.headers).length > 0) {
      this.agent.get(this.baseUrl).intercept({
        path: requestPath => this.pathHandler(requestPath),
        method: this.method.toUpperCase(),
        body: requestBody => this.bodyHandler(requestBody),
        query: this.query,
        headers
      });
    }
    return this;
  }

  setResponse(responses: Response<TData, Status> | Response<TData, Status>[]) {
    if (Array.isArray(responses)) {
      this.responses = [...this.responses, ...responses];
    } else {
      this.responses.push(responses);
    }
    return this;
  }

  reply(response?: Response<TData, Status>) {
    let interceptor = this.createInterceptor();
    if (response) {
      interceptor
        .reply(response.status, response.data as Record<string, unknown>, {
          headers: {
            "content-type": this.getContentTypeForResponseData(response.data),
            ...(response.headers as IncomingHttpHeaders),
            
          },
        })
        .times(response.repeat ?? 1);
    } else {
      this.responses.forEach(res => {
        interceptor
          .reply(res.status, res.data as Record<string, unknown>, {
            headers: {
              "content-type": this.getContentTypeForResponseData(res.data),
              ...(res.headers as IncomingHttpHeaders),
            },
          })
          .times(res.repeat ?? 1);
        interceptor = this.createInterceptor();
      });
      this.responses = [];
    }
    this.headers = {};
    return this;
  }

  getContentTypeForResponseData(data: TData) {
    if (data instanceof Buffer) {
      return "application/octet-stream";
    }
    if (typeof data === "object") {
      return "application/json";
    }
    return "text/plain";
  }

  private createInterceptor(): MockInterceptor {
    return this.agent.get(this.baseUrl).intercept({
      path: requestPath => this.pathHandler(requestPath),
      method: this.method.toUpperCase(),
      body: requestBody => this.bodyHandler(requestBody),
    });
  }

  private pathHandler(requestPath: string) {
    const [pathname, search] = requestPath.split("?");

    // If no query was given with the intercept, accept all queries.
    if (this.query) {
      const requestQuery = querystring.parse(search);
      const equal = common.dataEqual(this.query, requestQuery);
      if (!equal) {
        return false;
      }
    }

    if (typeof this.path === "string") {
      return this.path === pathname;
    }
    if (this.path instanceof RegExp) {
      return this.path.test(pathname);
    }

    return false;
  }

  private bodyHandler(requestBody: string) {
    return this.requestBody ? matchBody({}, this.requestBody, requestBody) : true;
  }
}
