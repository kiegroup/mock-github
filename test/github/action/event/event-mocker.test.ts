import fs from "fs";
import path from "path";
import { EventMocker } from "../../../../src/github/action/event/event-mocker";
import { DEFAULT_PAYLOAD } from "../../../../src/github/action/event/event-mocker.types";

describe("setup", () => {
  test("empty action config", async () => {
    const eventMocker = new EventMocker(undefined, __dirname);
    delete process.env["GITHUB_EVENT_PATH"];

    await eventMocker.setup();

    expect(eventMocker.getPayload()).toStrictEqual(DEFAULT_PAYLOAD);
    expect(fs.existsSync(path.join(__dirname, "event.json"))).toBe(false);
    expect(Object.keys(process.env).includes("GITHUB_EVENT_PATH")).toBe(false);

    await eventMocker.teardown();
  });

  test("no event payload file name", async () => {
    const eventPayload = {
      test: "hello",
    };
    const eventMocker = new EventMocker({ payload: eventPayload }, __dirname);
    delete process.env["GITHUB_EVENT_PATH"];

    await eventMocker.setup();

    const filename = path.join(__dirname, "event.json");
    expect(eventMocker.getPayload()).toStrictEqual(eventPayload);
    expect(fs.existsSync(filename)).toBe(true);
    expect(process.env["GITHUB_EVENT_PATH"]).toBe(filename);
    const actualPayload = JSON.parse(fs.readFileSync(filename, "utf8"));
    expect(actualPayload).toStrictEqual(eventPayload);

    await eventMocker.teardown();
  });

  test("with event payload file name", async () => {
    const eventPayload = {
      test: "hello",
    };
    const eventPayloadFileName = "someothername";
    const eventMocker = new EventMocker(
      {
        payload: eventPayload,
        filename: eventPayloadFileName,
      },
      __dirname
    );

    await eventMocker.setup();

    const filename = path.join(__dirname, eventPayloadFileName);
    expect(eventMocker.getPayload()).toStrictEqual(eventPayload);
    expect(fs.existsSync(filename)).toBe(true);
    expect(process.env["GITHUB_EVENT_PATH"]).toBe(filename);
    const actualPayload = JSON.parse(fs.readFileSync(filename, "utf8"));
    expect(actualPayload).toStrictEqual(eventPayload);

    await eventMocker.teardown();
  });
});

describe("teardown", () => {
  test("empty action config", async () => {
    const eventMocker = new EventMocker(undefined, __dirname);
    const filename = path.join(__dirname, "event.json");
    fs.writeFileSync(filename, "test");
    process.env["GITHUB_EVENT_PATH"] = filename;

    await eventMocker.setup();
    await eventMocker.teardown();

    expect(fs.existsSync(filename)).toBe(true);
    expect(eventMocker.getPayload()).toStrictEqual(DEFAULT_PAYLOAD);
    expect(process.env["GITHUB_EVENT_PATH"]).toBe(filename);

    fs.rmSync(filename);
  });

  test("no event payload file name", async () => {
    const eventPayload = {
      test: "hello",
    };
    const eventMocker = new EventMocker({ payload: eventPayload }, __dirname);
    
    await eventMocker.setup();
    await eventMocker.teardown();

    const filename = path.join(__dirname, "event.json");
    expect(fs.existsSync(filename)).toBe(false);
    expect(eventMocker.getPayload()).toStrictEqual(DEFAULT_PAYLOAD);
    expect(Object.keys(process.env).includes("GITHUB_EVENT_PATH")).toBe(false);
  });

  test("with event payload file name", async () => {
    const eventPayload = {
      test: "hello",
    };
    const eventPayloadFileName = "someothername";
    const eventMocker = new EventMocker(
      {
        payload: eventPayload,
        filename: eventPayloadFileName,
      },
      __dirname
    );

    await eventMocker.setup();
    await eventMocker.teardown();

    const filename = path.join(__dirname, eventPayloadFileName);
    expect(fs.existsSync(filename)).toBe(false);
    expect(eventMocker.getPayload()).toStrictEqual(DEFAULT_PAYLOAD);
    expect(Object.keys(process.env).includes("GITHUB_EVENT_PATH")).toBe(false);    
  });
});
