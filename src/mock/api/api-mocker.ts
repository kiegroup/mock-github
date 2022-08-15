import { Mocker } from "../mocker";
import { Api, ApiInterface, Endpoint } from "./api-mocker.types";
import { ActivatedEndpoint } from "./activated-endpoint";

export class ApiMocker implements Mocker, ApiInterface {
    private api: Api | undefined;
    private baseUrl: string;
    private activatedEndpoints: Record<string, ActivatedEndpoint>

    constructor(api: Api | undefined) {
        this.api = api;
        this.baseUrl = api?.baseUrl ?? "https://api.github.com";
        this.baseUrl = this.baseUrl.replace(/\/$/, "");
        this.activatedEndpoints = {};
    }

    async setup(): Promise<void> {
        return;
    }

    async teardown(): Promise<void> {
        Object.values(this.activatedEndpoints).forEach((endpoint) => {
            endpoint.deactivate();
        })
    }

    add(name: string, endpoint: Endpoint): ActivatedEndpoint {
        if (!this.api) this.api = { endpoints: {}}
        this.api.endpoints[name] = endpoint;
        return this.activate(name);
    }

    activate(endpointName: string): ActivatedEndpoint {
        const endpoint = this.api?.endpoints[endpointName]
        if (!endpoint) throw new Error(`No ${endpointName} endpoint defined`);
        if (!this.activatedEndpoints[endpointName]) {
            this.activatedEndpoints[endpointName] = new ActivatedEndpoint(endpoint, this.baseUrl)
        }
        return this.activatedEndpoints[endpointName];
    }

    deactivate(endpointName: string): void {
        const activatedEndpoint = this.activatedEndpoints[endpointName];
        if (!activatedEndpoint) return;
        activatedEndpoint.deactivate();
        delete this.activatedEndpoints[endpointName];
    }


}