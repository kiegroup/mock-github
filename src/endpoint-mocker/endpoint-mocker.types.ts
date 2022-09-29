export type EndpointMethod = "get" | "post" | "put" | "patch" | "delete";
export type EndpointDetails = {
  path: string;
  method: EndpointMethod;
  parameters: { path: string[]; query: string[]; body: string[] };
};

export type Endpoints = {
  [scope: string]: {
    [methodName: string]: EndpointDetails;
  };
};

export type Params = Record<string, unknown>;
