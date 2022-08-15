import nock from "nock";
import { Endpoint, Response } from "./api-mocker.types";

export class ActivatedEndpoint {
  private endpoint: Endpoint;
  private scope: nock.Scope;
  private interceptors: nock.Interceptor[];

  constructor(endpoint: Endpoint, baseUrl: string) {
    this.endpoint = endpoint;
    this.scope = nock(baseUrl);
    this.interceptors = [];
  }

  private createInterceptor(): nock.Interceptor {
    const path = this.endpoint.isRegex
      ? new RegExp(this.endpoint.path)
      : this.endpoint.path;
    let interceptor: nock.Interceptor;
    switch (this.endpoint.method) {
      case "get":
        interceptor = this.scope.get(path);
        break;
      case "delete":
        interceptor = this.scope.delete(path, this.endpoint.body);
        break;
      case "patch":
        interceptor = this.scope.patch(path, this.endpoint.body);
        break;
      case "post":
        interceptor = this.scope.post(path, this.endpoint.body);
        break;
      case "put":
        interceptor = this.scope.put(path, this.endpoint.body);
        break;
      default:
        throw new Error("Invalid http method");
    }

    if (this.endpoint.query) {
      return interceptor.query(this.endpoint.query)
    } else {
      return interceptor.query(true);
    }
  }

  private getResponse(response: Response | string): Response {
    let res: Response;
    if (typeof response === "string") {
      if (Object.keys(this.endpoint.response).includes(response)) {
        res = this.endpoint.response[response];
      } else {
        throw new Error(`No ${response} response defined for the endpoint`);
      }
    } else {
        res = response;
    }
    return res;
  }

  setResponse(response: Response | string, repeat: number = 1): ActivatedEndpoint {
    for (let i = 0; i < repeat; i++) {
        const interceptor = this.createInterceptor();
        const res = this.getResponse(response);
        interceptor.reply(res.status, res.data);
        this.interceptors.push(interceptor);
    }
    return this;
  }

  deactivate(): void {
    while (this.interceptors.length !== 0) {
        nock.removeInterceptor(this.interceptors.pop()!)
    }
  }
}
