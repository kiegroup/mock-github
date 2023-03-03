import endpointToMethod from "@mg/moctokit/generated/endpoint-request";

export class Moctokit {
  private _rest;
  constructor(baseUrl?: string, allowUnmocked = false) {
    this._rest = endpointToMethod(baseUrl ?? "https://api.github.com", allowUnmocked);
  }

  get rest() {
    return this._rest;
  }
}
