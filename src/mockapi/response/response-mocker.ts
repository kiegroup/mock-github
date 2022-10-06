import { ResponseMocker } from "../../endpoint-mocker/response/abstract-response-mocker";
import nock from "nock/types";

export class MockapiResponseMocker extends ResponseMocker<nock.Body, number> {}
