import { ReplyHeaders, RequestHeaderMatcher } from "nock";

export type Response<TData, Status extends number> = {
  status: Status;
  data: TData;
  headers?: ReplyHeaders
  repeat?: number
};

export type Header = {
  [key: string]: RequestHeaderMatcher
}
