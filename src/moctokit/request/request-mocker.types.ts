/** src: https://github.com/octokit/types.ts/blob/bd5f9f7bce9fa448c87fcfadb7bd547de66ad115/src/generated/Endpoints.ts */
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type UnionWithRegex<R> = {
  [K in keyof R]: R[K] | RegExp;
};

export type Parameters<T> = "parameters" extends keyof T
  ? UnionToIntersection<
      {
        [K in keyof T["parameters"]]: T["parameters"][K];
      }[keyof T["parameters"]]
    >
  : {};

type RequestBody<T> = "requestBody" extends keyof T
  ? "content" extends keyof T["requestBody"]
    ? "application/json" extends keyof T["requestBody"]["content"]
      ? T["requestBody"]["content"]["application/json"]
      : {
          data: {
            [K in keyof T["requestBody"]["content"]]: T["requestBody"]["content"][K];
          }[keyof T["requestBody"]["content"]];
        }
    : "application/json" extends keyof T["requestBody"]
    ? T["requestBody"]["application/json"]
    : {
        data: {
          [K in keyof T["requestBody"]]: T["requestBody"][K];
        }[keyof T["requestBody"]];
      }
  : {};

export type MockRequestParameters<T> = UnionWithRegex<
  Partial<Parameters<T> & RequestBody<T>>
>;