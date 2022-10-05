import childProcess from "child_process";
import path from "path";
import { Act } from "../../src";

const resources = path.resolve(process.cwd(), "test", "resources");

describe("act initialization", () => {
  test("act is installed", () => {
    expect(() => new Act(__dirname)).not.toThrowError();
    expect(() => new Act()).not.toThrowError();
  });

  test("act is not installed", () => {
    const spawnSyncSpy = jest.spyOn(childProcess, "spawnSync");
    spawnSyncSpy.mockReturnValueOnce({ status: null } as any);
    expect(() => new Act()).toThrowError();
    spawnSyncSpy.mockRestore();
  });
});

describe("cwd", () => {
  test("set", () => {
    const act = new Act();
    expect(act.setCwd("dirname")).toBe(act);
    expect(act.getCwd()).toBe("dirname");
  });
  test("get", () => {
    const act = new Act();
    expect(act.getCwd()).toBe(process.cwd());
  });
});

describe("list", () => {
  test("without event", async () => {
    const act = new Act();
    const list = await act.list(undefined, resources);
    // act seems to behave a bit differently in different env - In GHA the pull request worklow is listed while on local machin it isn't
    expect(list).toEqual(
      expect.arrayContaining([
        {
          jobId: "push1",
          jobName: "push1",
          workflowName: "Act Push Test 1",
          workflowFile: "push1.yml",
          events: "push",
        },
        {
          jobId: "push2",
          jobName: "push2",
          workflowName: "Act Push Test 2",
          workflowFile: "push2.yml",
          events: "push",
        },
      ])
    );
  });

  test("with event", async () => {
    const act = new Act();
    const list = await act.list("pull_request", resources);
    expect(list).toStrictEqual([
      {
        jobId: "pr",
        jobName: "pr",
        workflowName: "Pull Request",
        workflowFile: "pull_request.yml",
        events: "pull_request",
      },
    ]);
  });
});

describe("run", () => {
  test("run with job", async () => {
    const act = new Act();
    const output = await act
      .setSecret("SECRET1", "secret1")
      .runJob("push1", resources);

    // act seems to behave a bit differently in different env - In GHA, name has a prefix Main
    expect(output).toMatchObject([
      {
        name: expect.stringMatching(/echo "push 1"/),
        status: 0,
        output: "push 1",
      },
      {
        name: expect.stringMatching(/secrets/),
        output: "***",
        status: 0,
      },
      { name: expect.stringMatching(/pass/), status: 0, output: "pass" },
      { name: expect.stringMatching(/fail/), status: 1, output: "fail" },
    ]);
  });

  test("run with event", async () => {
    const act = new Act();
    const output = await act
      .setSecret("SECRET1", "secret1")
      .runEvent("pull_request", resources);
    // act seems to behave a bit differently in different env - In GHA, name has a prefix Main
    expect(output).toStrictEqual([
      {
        name: expect.stringMatching(/echo "pull request"/),
        status: 0,
        output: "pull request",
      },
      {
        name: expect.stringMatching(/secrets/),
        output: "***",
        status: 0,
      },
      { name: expect.stringMatching(/pass/), status: 0, output: "pass" },
      { name: expect.stringMatching(/fail/), status: 1, output: "fail" },
    ]);
  });
});

describe("secrets", () => {
  test("set secrets", async () => {
    const act = new Act(resources);

    const spawnSyncSpy = jest.spyOn(childProcess, "spawnSync");
    spawnSyncSpy.mockReturnValue({
      status: 0,
      stdout: { toString: () => "mock" },
    } as any);

    await act.setSecret("secret1", "val").runEvent("pull_request");
    expect(spawnSyncSpy).toHaveBeenCalledWith("act", [
      "-W",
      resources,
      "pull_request",
      "-s",
      "secret1=val",
    ]);
    spawnSyncSpy.mockRestore();
  });

  test("delete secrets", async () => {
    const act = new Act(resources);

    const spawnSyncSpy = jest.spyOn(childProcess, "spawnSync");
    spawnSyncSpy.mockReturnValue({
      status: 0,
      stdout: { toString: () => "mock" },
    } as any);

    await act
      .setSecret("secret1", "val1")
      .setSecret("secret2", "val2")
      .deleteSecret("secret1")
      .runEvent("pull_request");
    expect(spawnSyncSpy).toHaveBeenCalledWith("act", [
      "-W",
      resources,
      "pull_request",
      "-s",
      "secret2=val2",
    ]);
    spawnSyncSpy.mockRestore();
  });

  test("delete secrets", async () => {
    const act = new Act(resources);

    const spawnSyncSpy = jest.spyOn(childProcess, "spawnSync");
    spawnSyncSpy.mockReturnValue({
      status: 0,
      stdout: { toString: () => "mock" },
    } as any);

    await act
      .setSecret("secret1", "val1")
      .setSecret("secret2", "val2")
      .clearSecrets()
      .runEvent("pull_request");
    expect(spawnSyncSpy).toHaveBeenCalledWith("act", [
      "-W",
      resources,
      "pull_request",
    ]);
    spawnSyncSpy.mockRestore();
  });
});
