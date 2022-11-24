import { EndpointDetails } from "@mg/endpoint-mocker/endpoint-mocker.types";
import { RequestMocker } from "@mg/endpoint-mocker/request/abstract-request-mocker";
import { MockapiResponseMocker } from "@mg/mockapi/response/response-mocker";

export class MockapiRequestMocker extends RequestMocker {
  constructor(baseUrl: string, endpointDetails: EndpointDetails) {
    super(baseUrl, endpointDetails);

    // need to bind the instance context to the function. otherwise it is lost during method generation
    this.request = this.request.bind(this);
  }
  request(params?: Record<string, unknown>): MockapiResponseMocker {
    const { path, query, requestBody } = this.parseParams(params);
    return new MockapiResponseMocker(
      this.baseUrl,
      path,
      this.endpointDetails.method,
      query,
      requestBody
    );
  }
}
