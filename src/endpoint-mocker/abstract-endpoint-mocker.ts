import nock from "nock";

export abstract class EndpointMocker {
  constructor(private _allowUnmocked: boolean) {}

  get allowUnmocked() {
    return this._allowUnmocked;
  } 

  cleanAll() {
    nock.cleanAll();
  }
}