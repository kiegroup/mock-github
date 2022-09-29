import nock, { DataMatcher, DataMatcherMap } from "nock";
import { MockerParams } from "../../action-compiler/mocker/mocker.types";
import { Response } from "./abstract-response-mocker.types";

export abstract class ResponseMocker<T, S extends number> {
  private interceptor: nock.Interceptor;
  private scope: nock.Scope;
  private responses: Response<T, S>[];
  private baseUrl: string;
  private path: string | RegExp;
  private query?: DataMatcherMap;
  private requestBody?: DataMatcherMap;
  private method: string;

  constructor(
    baseUrl: string,
    path: string | RegExp,
    method: string,
    query?: DataMatcherMap,
    requestBody?: DataMatcherMap
  ) {
    this.scope = nock(baseUrl);
    this.responses = [];
    this.baseUrl = baseUrl;
    this.path = path;
    this.query = query;
    this.requestBody = requestBody;
    this.method = method;
    this.interceptor = this.createInterceptor();
  }

  toJSON(): MockerParams {
    const query: MockerParams["query"] = {};
    Object.entries(this.query ?? {}).forEach(([key, value]) => {
      query[key] = this.isRegex<typeof value>(value);
    });

    const requestBody: MockerParams["requestBody"] = {};
    Object.entries(this.requestBody ?? {}).forEach(([key, value]) => {
      requestBody[key] = this.isRegex<typeof value>(value);
    });
    return {
      baseUrl: this.baseUrl,
      path: this.isRegex<string>(this.path),
      method: this.method,
      responses: this.responses,
      query,
      requestBody,
    };
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
      this.responses.forEach((response) => {
        this.scope = this.interceptor
          .times(response.repeat ?? 1)
          .reply(response.status, response.data as nock.Body);
        this.interceptor = this.createInterceptor();
      });
    }
  }

  private createInterceptor(): nock.Interceptor {
    // if query is defined use that otherwise set it to true to indicate that we want to mock the path regardless of query
    return this.scope
      .intercept(this.path, this.method, this.requestBody)
      .query(this.query ?? true);
  }

  private isRegex<T>(data: T | RegExp) {
    return {
      value: data instanceof RegExp ? data.source : data,
      isRegex: data instanceof RegExp,
    };
  }
}
