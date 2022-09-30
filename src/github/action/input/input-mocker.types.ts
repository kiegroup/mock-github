export type Input = {
  [key: string]: string;
};

export const DEFAULT_INPUT: Input = {};

export const INPUT_PREFIX = "INPUT_";

export interface InputMockerMethods {
  getAll(): Input;
  get(key: string): string;
  update(key: string, value: string): void;
  delete(key: string): string;
}
