import nock, { DataMatcherMap } from "nock";
import { Response } from "@mg/endpoint-mocker/response/abstract-response-mocker.types";

export abstract class ResponseMocker<T, S extends number> {
  private interceptor: nock.Interceptor;
  private scope: nock.Scope;
  private responses: Response<T, S>[];
  private path: string | RegExp;
  private query?: DataMatcherMap;
  private requestBody?: DataMatcherMap;
  private method: string;

  constructor(
    baseUrl: string,
    path: string | RegExp,
    method: string,
    query?: DataMatcherMap,
    requestBody?: DataMatcherMap,
    allowUnmocked = false
  ) {
    this.scope = nock(baseUrl, { allowUnmocked });
    this.responses = [];
    this.path = path;
    this.query = query;
    this.requestBody = requestBody;
    this.method = method;
    this.interceptor = this.createInterceptor();
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
    if (response) {
      this.scope = this.interceptor
        .times(response.repeat ?? 1)
        .reply(response.status, response.data as nock.Body);
      this.interceptor = this.createInterceptor();
    } else {
      this.responses.forEach(res => {
        this.scope = this.interceptor
          .times(res.repeat ?? 1)
          .reply(res.status, res.data as nock.Body);
        this.interceptor = this.createInterceptor();
      });
      this.responses = [];
    }
    return this;
  }

  private createInterceptor(): nock.Interceptor {
    // if query is defined use that otherwise set it to true to indicate that we want to mock the path regardless of query
    return this.scope
      .intercept(this.path, this.method, this.requestBody)
      .query(this.query ?? true);
  }
}
