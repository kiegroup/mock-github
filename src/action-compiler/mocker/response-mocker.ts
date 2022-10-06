import { ResponseMocker } from "../../endpoint-mocker/response/abstract-response-mocker";
import nock from "nock/types";

export class CompilerResponseMocker extends ResponseMocker<nock.Body, number> {}
