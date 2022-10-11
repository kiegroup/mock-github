import { MockRequestParameters } from "./request-mocker.types";
import { paths } from "@octokit/openapi-types";
import { MoctokitResponseMocker } from "../response/response-mocker";
import { EndpointDetails } from "../../endpoint-mocker/endpoint-mocker.types";
import { RequestMocker } from "../../endpoint-mocker/request/abstract-request-mocker";

export class MoctokitRequestMocker<
  Path extends keyof paths,
  Method extends keyof paths[Path]
> extends RequestMocker {
  constructor(baseUrl: string, endpointDetails: EndpointDetails) {
    super(baseUrl, endpointDetails);

    // need to bind the instance context to the function. otherwise it is lost during endpointToMethod generation
    this.request = this.request.bind(this);
  }

  request(params?: MockRequestParameters<paths[Path][Method]>) {
    const { path, query, requestBody } = this.parseParams(params);
    return new MoctokitResponseMocker<Path, Method>(
      this.baseUrl,
      path,
      this.endpointDetails.method,
      query,
      requestBody
    );
  }
}
