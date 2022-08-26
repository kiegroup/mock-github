export type ResponseData = Record<string, any> | any[]

export type Response = {
    status: number,
    data: ResponseData,
    repeat?: number
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
    response: Response[]
}

export type CompileMockAPIs = {
    baseUrl: string
    endpoints: Endpoint[]
}

