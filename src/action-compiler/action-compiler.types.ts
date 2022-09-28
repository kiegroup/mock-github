import { Endpoints } from "../endpoint-mocker/endpoint-mocker.types";
import { CompilerRequestMocker } from "./request/request-mocker";

export type APISchema = {
  [apiName: string]: {
    baseUrl: string;
    endpoints: Endpoints;
  };
};

export type CompilerMockMethod = {
  [apiName: string]: {
    [scope: string]: {
      [methodName: string]: typeof CompilerRequestMocker.prototype.request;
    };
  };
};
