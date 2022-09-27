import nock from "nock";
import { Response } from "./abstract-response-mocker.types";

export abstract class ResponseMocker<T, S extends number> {
  protected interceptor: nock.Interceptor;
  protected responses: Response<T, S>[];
  constructor(interceptor: nock.Interceptor) {
    this.interceptor = interceptor;
    this.responses = [];
  }

  setResponse(responses: Response<T, S> | Response<T, S>[]) {
    if (Array.isArray(responses)) {
      this.responses = [...this.responses, ...responses];
    } else {
      this.responses.push(responses);
    }
    return this;
  }

  repeat(times: number) {
    this.interceptor = this.interceptor.times(times);
    return this;
  }

  reply() {
    this.responses.forEach((response) => {
      this.interceptor.reply(response.status, response.data as nock.Body);
    });
  }
}
