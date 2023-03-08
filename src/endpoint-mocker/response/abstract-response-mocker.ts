import nock, { DataMatcherMap } from "nock";
import { Header, Response } from "@mg/endpoint-mocker/response/abstract-response-mocker.types";

export abstract class ResponseMocker<T, S extends number> {
  private scope: nock.Scope;
  private responses: Response<T, S>[];
  private headers: Header;
  private path: string | RegExp;
  private query?: DataMatcherMap;
  private requestBody?: DataMatcherMap;
  private method: string;
  private baseUrl: string;
  private allowUnmocked: boolean;

  constructor(
    baseUrl: string,
    path: string | RegExp,
    method: string,
    query?: DataMatcherMap,
    requestBody?: DataMatcherMap,
    allowUnmocked = false
  ) {
    this.baseUrl = baseUrl;
    this.allowUnmocked = allowUnmocked;
    this.scope = nock(baseUrl, { allowUnmocked });
    this.responses = [];
    this.headers = {}
    this.path = path;
    this.query = query;
    this.requestBody = requestBody;
    this.method = method;
  }

  matchReqHeaders(headers: Header) {
    this.headers = {...this.headers, ...headers}
    if (Object.keys(this.headers).length > 0) {
      this.scope = nock(this.baseUrl, { allowUnmocked: this.allowUnmocked, reqheaders: this.headers })
    }
    return this;
  }

  setResponse(responses: Response<T, S> | Response<T, S>[]) {
    if (Array.isArray(responses)) {
      this.responses = [...this.responses, ...responses];
    } else {
      this.responses.push(responses);
    }
    return this;
  }

  reply(response?: Response<T, S>) {
    let interceptor = this.createInterceptor();
    if (response) {
      this.scope = interceptor
        .times(response.repeat ?? 1)
        .reply(response.status, response.data as nock.Body, response.headers);
    } else {
      this.responses.forEach(res => {
        this.scope = interceptor
          .times(res.repeat ?? 1)
          .reply(res.status, res.data as nock.Body, res.headers);
        interceptor = this.createInterceptor()
      });
      this.responses = [];
    }
    this.headers = {}
    return this;
  }

  private createInterceptor(): nock.Interceptor {
    // if query is defined use that otherwise set it to true to indicate that we want to mock the path regardless of query
    return this.scope
      .intercept(this.path, this.method, this.requestBody)
      .query(this.query ?? true);
  }
}
