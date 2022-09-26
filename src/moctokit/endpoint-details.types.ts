export type EndpointDetails = {
  path: string;
  method: "get" | "post" | "put" | "patch" | "delete";
  parameters: { path: string[]; query: string[]; body: string[] };
};

export type Endpoints = {
  [key: string]: {
    [key: string]: EndpointDetails
  }
}