import { EndpointDetails } from "../endpoint-mocker/endpoint-mocker.types";

export type Endpoints = {
  [key: string]: {
    [key: string]: EndpointDetails;
  };
};
