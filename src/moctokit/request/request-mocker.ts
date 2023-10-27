import { MockRequestParameters } from "@mg/moctokit/request/request-mocker.types";
import { paths } from "@octokit/openapi-types-ghec";
import { MoctokitResponseMocker } from "@mg/moctokit/response/response-mocker";
import { EndpointDetails } from "@mg/endpoint-mocker/endpoint-mocker.types";
import { RequestMocker } from "@mg/endpoint-mocker/request/abstract-request-mocker";
import { MockAgent } from "undici";

export class MoctokitRequestMocker<
  Path extends keyof paths,
  Method extends keyof paths[Path]
> extends RequestMocker {

  constructor(agent:MockAgent, baseUrl: string, endpointDetails: EndpointDetails) {
    super(agent, baseUrl, endpointDetails);

    // need to bind the instance context to the function. otherwise it is lost during endpointToMethod generation
    this.request = this.request.bind(this);
  }

  request(params?: MockRequestParameters<paths[Path][Method]>) {
    const { path, query, requestBody } = this.parseParams(params);
    return new MoctokitResponseMocker<Path, Method>(
      this.agent,
      this.baseUrl,
      path,
      this.endpointDetails.method,
      query,
      requestBody
    );
  }
}
