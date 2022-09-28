import {
  EndpointDetails,
  Params,
} from "../../endpoint-mocker/endpoint-mocker.types";
import { Response } from "../../endpoint-mocker/response/abstract-response-mocker.types";

export type MockerParams = {
  baseUrl: string;
  endpointDetails: EndpointDetails;
  responses: Response<any, any>[];
  params?: Params;
};
