import {
  fetch,
  MockAgent,
  RequestInit as undiciRequestInit,
  setGlobalDispatcher,
} from "undici";

export abstract class EndpointMocker {
  private _agent: MockAgent;

  constructor(private _allowUnmocked: boolean) {
    this._agent = new MockAgent();
    setGlobalDispatcher(this._agent);
    if (!_allowUnmocked) {
      this._agent.disableNetConnect();
    }

    // Workaround for https://github.com/nodejs/undici/issues/1882
    if (process.env.JEST_WORKER_ID !== undefined) {
      // @ts-expect-error This seems impossible to type correctly.
      globalThis.fetch = (
        input: NodeJS.fetch.RequestInfo,
        init?: NodeJS.fetch.RequestInit | undefined
      ) =>
        fetch(input, {
          dispatcher: this.agent,
          ...(init as undiciRequestInit),
        });
    }
  }

  get agent() {
    return this._agent;
  }

  get allowUnmocked() {
    return this._allowUnmocked;
  }

  cleanAll() {
    this._agent.close();
  }
}
