import { Mocker } from "@mg/github/mocker";
import {
  DEFAULT_INPUT,
  Input,
  InputMockerMethods,
  INPUT_PREFIX,
} from "@mg/github/action/input/input-mocker.types";

export class InputMocker implements Mocker, InputMockerMethods {
  private inputFromConfig: Input | undefined;
  private currentInput: Input;

  constructor(input: Input | undefined) {
    this.inputFromConfig = input;
    this.currentInput = input ? input : DEFAULT_INPUT;
  }

  update(key: string, value: string): void {
    process.env[`${INPUT_PREFIX}${key.replace(/ /g, "_").toUpperCase()}`] =
      value;
    this.currentInput[key] = value;
  }

  delete(key: string): string {
    let value = "";
    if (Object.keys(this.currentInput).includes(key)) {
      value = this.currentInput[key];
      delete process.env[
        `${INPUT_PREFIX}${key.replace(/ /g, "_").toUpperCase()}`
      ];
      delete this.currentInput[key];
    }
    return value;
  }

  get(key?: string): string | Input {
    if (key) {
      return this.currentInput[key] ?? "";
    }
    return this.currentInput;
  }

  async setup(): Promise<void> {
    if (!this.inputFromConfig) {return;}
    Object.keys(this.inputFromConfig).forEach(key => {
      this.update(key, this.inputFromConfig![key]);
    });
  }

  async teardown(): Promise<void> {
    Object.keys(this.currentInput).forEach(key => {
      this.delete(key);
    });
    this.currentInput = DEFAULT_INPUT;
  }
}
