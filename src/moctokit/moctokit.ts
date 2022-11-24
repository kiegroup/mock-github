import endpointToMethod from "@mg/moctokit/generated/endpoint-request";

export class Moctokit {
  private _rest;
  constructor(baseUrl?: string) {
    this._rest = endpointToMethod(baseUrl ?? "https://api.github.com");
  }

  get rest() {
    return this._rest;
  }
}
