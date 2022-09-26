import nock from "nock";
import { Endpoint, Response } from "./action-compile.types";

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
      return interceptor.query(this.endpoint.query);
    } else {
      return interceptor.query(true);
    }
  }

  setResponse(response: Response[]): void {
    response.forEach((res) => {
      const interceptor = this.createInterceptor();
      interceptor.times(res.repeat ?? 1).reply(res.status, res.data);
      this.interceptors.push(interceptor);
    });
  }
}
