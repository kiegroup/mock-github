import { ReplyHeaders, RequestHeaderMatcher } from "nock";

export type Response<T, S extends number> = {
  status: S;
  data: T;
  headers?: ReplyHeaders
  repeat?: number
};

export type Header = {
  [key: string]: RequestHeaderMatcher
}
