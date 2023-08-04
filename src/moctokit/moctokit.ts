import { EndpointMocker } from "@mg/endpoint-mocker/abstract-endpoint-mocker";
import endpointToMethod from "@mg/moctokit/generated/endpoint-request";

export class Moctokit extends EndpointMocker {
  private _rest;
  constructor(baseUrl?: string, allowUnmocked = false) {
    super(allowUnmocked);
    this._rest = endpointToMethod(baseUrl ?? "https://api.github.com", this.allowUnmocked);
  }

  get rest() {
    return this._rest;
  }
}
