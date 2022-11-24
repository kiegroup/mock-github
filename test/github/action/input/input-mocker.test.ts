import { InputMocker } from "@mg/github/action/input/input-mocker";
import {
  DEFAULT_INPUT,
  Input,
} from "@mg/github/action/input/input-mocker.types";

describe("setup", () => {
  test("empty input", async () => {
    const inputMocker = new InputMocker(undefined);
    const spy = jest.spyOn(inputMocker, "update");
    await inputMocker.setup();
    expect(inputMocker.get()).toStrictEqual(DEFAULT_INPUT);
    expect(spy).toHaveBeenCalledTimes(0);
    await inputMocker.teardown();
  });

  test("input defined", async () => {
    const input: Input = {
      test1: "test1",
      test2: "test2",
    };
    const inputMocker = new InputMocker(input);
    const spy = jest.spyOn(inputMocker, "update");
    await inputMocker.setup();
    expect(inputMocker.get()).toStrictEqual(input);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(process.env["INPUT_TEST1"]).toBe(input["test1"]);
    expect(process.env["INPUT_TEST2"]).toBe(input["test2"]);
    await inputMocker.teardown();
  });
});

describe("teardown", () => {
  test("empty input", async () => {
    const inputMocker = new InputMocker(undefined);
    const spy = jest.spyOn(inputMocker, "delete");
    await inputMocker.setup();
    await inputMocker.teardown();
    expect(inputMocker.get()).toStrictEqual(DEFAULT_INPUT);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  test("input defined", async () => {
    const input: Input = {
      test1: "test1",
      test2: "test2",
    };
    const inputMocker = new InputMocker(input);
    const spy = jest.spyOn(inputMocker, "delete");
    await inputMocker.setup();
    await inputMocker.teardown();
    expect(inputMocker.get()).toStrictEqual(DEFAULT_INPUT);
    expect(spy).toHaveBeenCalledTimes(2);
    expect(Object.keys(process.env).includes("INPUT_TEST1")).toBe(false);
    expect(Object.keys(process.env).includes("INPUT_TEST2")).toBe(false);
  });
});

describe("update input", () => {
  test("no existing input", async () => {
    const inputMocker = new InputMocker(undefined);
    await inputMocker.setup();
    expect(Object.keys(process.env).includes("INPUT_TEST1")).toBe(false);
    inputMocker.update("test1", "test1");
    expect(process.env["INPUT_TEST1"]).toBe("test1");
    await inputMocker.teardown();
  });

  test("add to existing input", async () => {
    const inputMocker = new InputMocker({ test1: "test1" });
    await inputMocker.setup();
    expect(process.env["INPUT_TEST1"]).toBe("test1");
    inputMocker.update("test2", "test2");
    expect(process.env["INPUT_TEST2"]).toBe("test2");
    expect(process.env["INPUT_TEST1"]).toBe("test1");
    await inputMocker.teardown();
  });

  test("update existing input", async () => {
    const inputMocker = new InputMocker({ test1: "test1" });
    await inputMocker.setup();
    expect(process.env["INPUT_TEST1"]).toBe("test1");
    inputMocker.update("test1", "test2");
    expect(process.env["INPUT_TEST1"]).toBe("test2");
    await inputMocker.teardown();
  });
});

describe("delete input", () => {
  test("key exists", async () => {
    const inputMocker = new InputMocker({ test1: "test1" });
    await inputMocker.setup();
    expect(process.env["INPUT_TEST1"]).toBe("test1");
    expect(inputMocker.delete("test1")).toBe("test1");
    expect(Object.keys(process.env).includes("INPUT_TEST1")).toBe(false);
    await inputMocker.teardown();
  });

  test("key does not exist", async () => {
    const inputMocker = new InputMocker({ test1: "test1" });
    await inputMocker.setup();
    expect(process.env["INPUT_TEST1"]).toBe("test1");
    expect(inputMocker.delete("test2")).toBe("");
    expect(process.env["INPUT_TEST1"]).toBe("test1");
    await inputMocker.teardown();
  });
});

describe("get specific input", () => {
  test("input does exist", async () => {
    const inputMocker = new InputMocker({ test1: "test1" });
    await inputMocker.setup();
    inputMocker.update("test2", "test2");
    expect(inputMocker.get("test1")).toBe("test1");
    expect(inputMocker.get("test2")).toBe("test2");
    await inputMocker.teardown();
  });

  test("input does not exist", async () => {
    const inputMocker = new InputMocker({ test1: "test1" });
    await inputMocker.setup();
    inputMocker.update("test2", "test2");
    expect(inputMocker.get("test3")).toBe("");
    await inputMocker.teardown();
  });
});
