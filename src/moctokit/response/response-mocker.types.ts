import { Response } from "@mg/endpoint-mocker/response/abstract-response-mocker.types";

/** Adapted from: https://github.com/octokit/types.ts/blob/bd5f9f7bce9fa448c87fcfadb7bd547de66ad115/src/generated/Endpoints.ts */
type KnownJsonResponseTypes =
  | "application/json"
  | "application/scim+json"
  | "text/html";

type Subset<T> = T extends object | null | undefined
  ? {
      [K in keyof T]?: Subset<T[K]>;
    }
  : T;
type MockResponse<T, S extends number> = T extends Array<unknown>
  ? Response<Subset<T[number]>[], S>
  : Response<Subset<T>, S>;

type DataType<T> = {
  [K in KnownJsonResponseTypes & keyof T]: T[K];
}[KnownJsonResponseTypes & keyof T];
type GetContentKeyIfPresent<T> = "content" extends keyof T
  ? DataType<T["content"]>
  : DataType<T>;

type ExtractStatus<Responses> = keyof Responses extends number
  ? keyof Responses
  : never;
type ExtractResponseData<Responses> = {
  [K in ExtractStatus<Responses>]: GetContentKeyIfPresent<
    Responses[K]
  > extends never
    ? never
    : MockResponse<GetContentKeyIfPresent<Responses[K]>, K>;
}[ExtractStatus<Responses>];

export type ExtractMockResponse<R> = "responses" extends keyof R
  ? ExtractResponseData<R["responses"]>
  : never;
