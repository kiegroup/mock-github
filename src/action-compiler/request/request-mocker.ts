import { EndpointDetails } from "../../endpoint-mocker/endpoint-mocker.types";
import { RequestMocker } from "../../endpoint-mocker/request/abstract-request-mocker";
import { CompilerResponseMocker } from "../response/response-mocker";

export class CompilerRequestMocker extends RequestMocker {
  constructor(baseUrl: string, endpointDetails: EndpointDetails) {
    super(baseUrl, endpointDetails);

    // need to bind the instance context to the function. otherwise it is lost during method generation
    this.request = this.request.bind(this);
  }
  request(params?: Record<string, unknown>) {
    const { path, query, requestBody } = this.parseParams(params);
    return new CompilerResponseMocker(
      this.baseUrl,
      path,
      this.endpointDetails.method,
      query,
      requestBody
    );
  }
}
