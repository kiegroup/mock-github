/** Adapted from: https://github.com/octokit/types.ts/blob/bd5f9f7bce9fa448c87fcfadb7bd547de66ad115/src/generated/Endpoints.ts */
type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (
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
  : Record<never, never>;

type RequestBody<T> = "requestBody" extends keyof T
  ? "content" extends keyof NonNullable<T["requestBody"]>
    ? "application/json" extends keyof NonNullable<T["requestBody"]>["content"]
      ? NonNullable<T["requestBody"]>["content"]["application/json"]
      : {
          data: {
            [K in keyof NonNullable<T["requestBody"]>["content"]]: NonNullable<T["requestBody"]>["content"][K];
          }[keyof NonNullable<T["requestBody"]>["content"]];
        }
    : "application/json" extends keyof NonNullable<T["requestBody"]>
    ? NonNullable<T["requestBody"]>["application/json"]
    : {
        data: {
          [K in keyof NonNullable<T["requestBody"]>]: NonNullable<T["requestBody"]>[K];
        }[keyof NonNullable<T["requestBody"]>];
      }
  : Record<never, never>;

export type MockRequestParameters<T> = UnionWithRegex<
  Partial<Parameters<T> & RequestBody<T>>
>;
