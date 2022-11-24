import { Endpoints } from "@mg/endpoint-mocker/endpoint-mocker.types";
import { MockapiRequestMocker } from "@mg/mockapi/request/request-mocker"

export type API = {
  [apiName: string]: {
    baseUrl: string;
    endpoints: Endpoints;
  };
};

export type MockapiMethod = {
  [apiName: string]: {
    [scope: string]: {
      [methodName: string]: typeof MockapiRequestMocker.prototype.request;
    };
  };
};
