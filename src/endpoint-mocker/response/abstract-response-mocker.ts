import nock from "nock";
import { MockerParams } from "../../action-compiler/mocker/mocker.types";
import { EndpointDetails, Params } from "../endpoint-mocker.types";
import { Response } from "./abstract-response-mocker.types";

export abstract class ResponseMocker<T, S extends number> {
  private _interceptor: nock.Interceptor;
  private responses: Response<T, S>[];
  private baseUrl: string;
  private endpointDetails: EndpointDetails;
  private params?: Params;

  constructor(
    interceptor: nock.Interceptor,
    baseUrl: string,
    endpointDetails: EndpointDetails,
    params?: Params
  ) {
    this._interceptor = interceptor;
    this.responses = [];
    this.baseUrl = baseUrl;
    this.endpointDetails = endpointDetails;
    this.params = params;
  }

  toJSON(): MockerParams {
    let params: Params = {};
    if (this.params) {
      Object.entries(this.params).forEach(([key, value]) => {
        params[key] = value instanceof RegExp ? value.source : value;
      });
    }
    return {
      baseUrl: this.baseUrl,
      endpointDetails: this.endpointDetails,
      params: Object.keys(params).length === 0 ? undefined : params,
      responses: this.responses,
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

  repeat(times: number) {
    this._interceptor = this._interceptor.times(times);
    return this;
  }

  reply(response?: Response<T, S>) {
    if (response) {
      this._interceptor.reply(response.status, response.data as nock.Body);
    } else {
      this.responses.forEach((response) => {
        this._interceptor.reply(response.status, response.data as nock.Body);
      });
    }
  }
}
