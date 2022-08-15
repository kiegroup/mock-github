import { ActivatedEndpoint } from "./activated-endpoint";

export type ResponseData = Record<string, any> | any[]

export type Response = {
    status: number,
    data: ResponseData,
}

export type Query = string | URLSearchParams | Record<string, any>;
export type Body = Record<string, any>
export type Method = "get" | "post" | "put" | "patch" | "delete"

export type Endpoint = {
    path: string,
    method: Method,
    isRegex?: boolean,
    query?: Query,
    body?: Body,
    response: {
        [key: string]: Response
    }
}

export type Api = {
    baseUrl?: string
    endpoints: {
        [key: string]: Endpoint
    }
}

export interface ApiInterface {
    add(name: string, endpoint: Endpoint): void;
    activate(endpointName: string): ActivatedEndpoint
    deactivate(endpointName: string): void;
}
