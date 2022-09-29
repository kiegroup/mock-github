import { DataMatcher } from "nock/types";
import { Response } from "../../endpoint-mocker/response/abstract-response-mocker.types";

export type MockerParams = {
  baseUrl: string;
  path: {
    value: string;
    isRegex: boolean;
  };
  method: string;
  responses: Response<any, any>[];
  query: {
    [key: string]: {
      value: DataMatcher;
      isRegex: boolean;
    };
  };
  requestBody: {
    [key: string]: {
      value: DataMatcher;
      isRegex: boolean;
    };
  };
};
