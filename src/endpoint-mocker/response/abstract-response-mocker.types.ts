export type Response<T, S extends number> = {
  status: S;
  data: T;
  repeat?: number
};
