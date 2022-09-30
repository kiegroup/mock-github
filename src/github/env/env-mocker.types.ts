export type Env = {
  [key: string]: string;
};

export const DEFAULT_ENV: Env = {};
export const ENV_PREFIX = "GITHUB_";

export interface EnvMethods {
  update(key: string, value: string): void;
  delete(key: string): string;
  get(key: string): string;
  getAll(): Env;
}
