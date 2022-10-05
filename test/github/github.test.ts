import { existsSync, mkdirSync, rmSync } from "fs-extra";
import path from "path";
import { MockGithub } from "../../src";
import { ActionMocker } from "../../src/github/action/action-mocker";
import { EnvMocker } from "../../src/github/env/env-mocker";
import { RepositoryMocker } from "../../src/github/repository/repository-mocker";
const resources = path.resolve(process.cwd(), "test", "resources");

beforeEach(() => {
  jest
    .spyOn(ActionMocker.prototype, "setup")
    .mockImplementation(async () => undefined);
  jest
    .spyOn(EnvMocker.prototype, "setup")
    .mockImplementation(async () => undefined);
  jest
    .spyOn(RepositoryMocker.prototype, "setup")
    .mockImplementation(async () => undefined);

  jest
    .spyOn(ActionMocker.prototype, "teardown")
    .mockImplementation(async () => undefined);
  jest
    .spyOn(EnvMocker.prototype, "teardown")
    .mockImplementation(async () => undefined);
  jest
    .spyOn(RepositoryMocker.prototype, "teardown")
    .mockImplementation(async () => undefined);
});

describe("initialization", () => {
  test("from file: success", () => {
    expect(
      () => new MockGithub(path.join(resources, "config-correct.json"))
    ).not.toThrowError();
  });

  test("from file: failure", () => {
    expect(
      () => new MockGithub(path.join(resources, "config-incorrect.json"))
    ).toThrowError();
  });

  test("empty", () => {
    expect(() => new MockGithub({})).not.toThrowError();
  });
});

describe("setup", () => {
  test("create setup dir", async () => {
    const setupPath = path.join(__dirname, "setup");
    const github = new MockGithub(
      path.join(resources, "config-correct.json"),
      setupPath
    );

    expect(existsSync(setupPath)).toBe(false);
    await github.setup();
    expect(existsSync(setupPath)).toBe(true);
    rmSync(setupPath, { recursive: true });
  });

  test("setup dir exists", async () => {
    const setupPath = path.join(__dirname, "setup");
    mkdirSync(setupPath);
    const github = new MockGithub(
      path.join(resources, "config-correct.json"),
      setupPath
    );

    expect(existsSync(setupPath)).toBe(true);
    await github.setup();
    expect(existsSync(setupPath)).toBe(true);
    rmSync(setupPath, { recursive: true });
  });
});

describe("teardown", () => {
  test("setup dir was created", async () => {
    const setupPath = path.join(__dirname, "setup");
    const github = new MockGithub(
      path.join(resources, "config-correct.json"),
      setupPath
    );

    expect(existsSync(setupPath)).toBe(false);
    await github.setup();
    await github.teardown();
    expect(existsSync(setupPath)).toBe(false);
  });

  test("setup dir was not created", async () => {
    const setupPath = path.join(__dirname, "setup");
    mkdirSync(setupPath);
    const github = new MockGithub(
      path.join(resources, "config-correct.json"),
      setupPath
    );

    expect(existsSync(setupPath)).toBe(true);
    await github.setup();
    await github.teardown();
    expect(existsSync(setupPath)).toBe(true);
    rmSync(setupPath, { recursive: true });
  });
});

describe("getters", () => {
  test("accessing getters before setting up", () => {
    const github = new MockGithub(path.join(resources, "config-correct.json"));
    expect(() => github.env).toThrowError();
    expect(() => github.action).toThrowError();
    expect(() => github.repository).toThrowError();
  });

  test("accessing getters after teardown", async () => {
    const github = new MockGithub(path.join(resources, "config-correct.json"));
    await github.setup();
    await github.teardown();
    expect(() => github.env).toThrowError();
    expect(() => github.action).toThrowError();
    expect(() => github.repository).toThrowError();
  });

  test("accessing getters after setup", async () => {
    const github = new MockGithub(path.join(resources, "config-correct.json"));
    await github.setup();
    expect(() => github.env).not.toThrowError();
    expect(() => github.action).not.toThrowError();
    expect(() => github.repository).not.toThrowError();
  });
});
