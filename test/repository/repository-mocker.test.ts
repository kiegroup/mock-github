import { RepositoryMocker } from "../../src/mock/repository/repository-mocker";
import { existsSync, readFileSync } from "fs";
import { rm, writeFile } from "fs/promises";
import path from "path";
import { spawnSync } from "child_process";
import simpleGit from "simple-git";

describe("Single repository", () => {
  test("empty configuration", async () => {
    const repoMocker = new RepositoryMocker({ repoA: {} }, __dirname);
    await repoMocker.setup();
    const repoState = repoMocker.getAllStates();
    const repoPath = path.join(__dirname, "repoA");
    expect(repoState).toStrictEqual([
      {
        name: "repoA",
        path: repoPath,
        branch: "main",
        pushedBranches: ["main"],
        localBranches: [],
        files: [],
      },
    ]);
    expect(existsSync(repoPath)).toBe(true);
    expect(spawnSync("git", ["status"], { cwd: repoPath }).status).toBe(0);
    await repoMocker.teardown();
  });

  test("pushed branches only", async () => {
    const repoMocker = new RepositoryMocker(
      { repoA: { pushedBranches: ["test"] } },
      __dirname
    );
    await repoMocker.setup();
    const repoState = repoMocker.getAllStates();
    const repoPath = path.join(__dirname, "repoA");
    expect(repoState).toStrictEqual([
      {
        name: "repoA",
        path: repoPath,
        branch: "main",
        pushedBranches: ["main", "test"],
        localBranches: [],
        files: [],
      },
    ]);
    expect(existsSync(repoPath)).toBe(true);
    expect(spawnSync("git", ["status"], { cwd: repoPath }).status).toBe(0);
    const branchInfo = await simpleGit(repoPath).branch();
    expect(branchInfo.all.length).toBe(4);
    expect(branchInfo.all.includes("remotes/origin/test")).toBe(true);
    expect(branchInfo.all.includes("test")).toBe(true);
    expect(branchInfo.current).toBe("main");
    await repoMocker.teardown();
  });

  test("local branches only", async () => {
    const repoMocker = new RepositoryMocker(
      { repoA: { localBranches: ["test"] } },
      __dirname
    );
    await repoMocker.setup();
    const repoState = repoMocker.getAllStates();
    const repoPath = path.join(__dirname, "repoA");
    expect(repoState).toStrictEqual([
      {
        name: "repoA",
        path: repoPath,
        branch: "main",
        pushedBranches: ["main"],
        localBranches: ["test"],
        files: [],
      },
    ]);
    expect(existsSync(repoPath)).toBe(true);
    expect(spawnSync("git", ["status"], { cwd: repoPath }).status).toBe(0);
    const branchInfo = await simpleGit(repoPath).branch();
    expect(branchInfo.all.length).toBe(3);
    expect(branchInfo.all.includes("remotes/origin/test")).toBe(false);
    expect(branchInfo.all.includes("test")).toBe(true);
    expect(branchInfo.current).toBe("main");
    await repoMocker.teardown();
  });

  test("current branch: with local branch", async () => {
    const repoMocker = new RepositoryMocker(
      { repoA: { localBranches: ["test"], currentBranch: "test" } },
      __dirname
    );
    await repoMocker.setup();
    const repoState = repoMocker.getAllStates();
    const repoPath = path.join(__dirname, "repoA");
    expect(repoState).toStrictEqual([
      {
        name: "repoA",
        path: repoPath,
        branch: "test",
        pushedBranches: ["main"],
        localBranches: ["test"],
        files: [],
      },
    ]);
    expect(existsSync(repoPath)).toBe(true);
    expect(spawnSync("git", ["status"], { cwd: repoPath }).status).toBe(0);
    const branchInfo = await simpleGit(repoPath).branch();
    expect(branchInfo.current).toBe("test");
    await repoMocker.teardown();
  });

  test("current branch: with pushed branch", async () => {
    const repoMocker = new RepositoryMocker(
      { repoA: { pushedBranches: ["test"], currentBranch: "test" } },
      __dirname
    );
    await repoMocker.setup();
    const repoState = repoMocker.getAllStates();
    const repoPath = path.join(__dirname, "repoA");
    expect(repoState).toStrictEqual([
      {
        name: "repoA",
        path: repoPath,
        branch: "test",
        pushedBranches: ["main", "test"],
        localBranches: [],
        files: [],
      },
    ]);
    expect(existsSync(repoPath)).toBe(true);
    expect(spawnSync("git", ["status"], { cwd: repoPath }).status).toBe(0);
    const branchInfo = await simpleGit(repoPath).branch();
    expect(branchInfo.current).toBe("test");
    await repoMocker.teardown();
  });

  test("current branch: with no local or pushed branches", async () => {
    const repoMocker = new RepositoryMocker(
      { repoA: { currentBranch: "test" } },
      __dirname
    );
    await repoMocker.setup();
    const repoState = repoMocker.getAllStates();
    const repoPath = path.join(__dirname, "repoA");
    expect(repoState).toStrictEqual([
      {
        name: "repoA",
        path: repoPath,
        branch: "test",
        pushedBranches: ["main"],
        localBranches: ["test"],
        files: [],
      },
    ]);
    expect(existsSync(repoPath)).toBe(true);
    expect(spawnSync("git", ["status"], { cwd: repoPath }).status).toBe(0);
    const branchInfo = await simpleGit(repoPath).branch();
    expect(branchInfo.all.length).toBe(3);
    expect(branchInfo.all.includes("remotes/origin/test")).toBe(false);
    expect(branchInfo.all.includes("test")).toBe(true);
    expect(branchInfo.current).toBe("test");
    await repoMocker.teardown();
  });

  test("workflow", async () => {
    const workflowFile1 = path.join(__dirname, "fake-workflow1");
    const workflowFile2 = path.join(__dirname, "fake-workflow2");

    await Promise.all([
      writeFile(workflowFile1, "fake workflow1"),
      writeFile(workflowFile2, "fake workflow2"),
    ]);

    const repoMocker = new RepositoryMocker(
      { repoA: { workflow: [workflowFile1, workflowFile2] } },
      __dirname
    );
    await repoMocker.setup();
    const repoState = repoMocker.getAllStates();
    const repoPath = path.join(__dirname, "repoA");
    expect(repoState).toStrictEqual([
      {
        name: "repoA",
        path: repoPath,
        branch: "main",
        pushedBranches: ["main"],
        localBranches: [],
        files: [],
      },
    ]);
    expect(existsSync(repoPath)).toBe(true);
    expect(spawnSync("git", ["status"], { cwd: repoPath }).status).toBe(0);
    const repoWorkflowPath = path.join(repoPath, ".github", "workflows");
    expect(
      readFileSync(
        path.join(repoWorkflowPath, path.basename(workflowFile1)),
        "utf8"
      )
    ).toBe("fake workflow1");
    expect(
      readFileSync(
        path.join(repoWorkflowPath, path.basename(workflowFile2)),
        "utf8"
      )
    ).toBe("fake workflow2");

    await Promise.all([
      rm(workflowFile1),
      rm(workflowFile2),
      repoMocker.teardown(),
    ]);
  });

  test("history: push", async () => {
    const repoMocker = new RepositoryMocker(
      {
        repoA: {
          pushedBranches: ["test"],
          history: [
            {
              action: "push",
              branch: "test",
            },
          ],
        },
      },
      __dirname
    );
    await repoMocker.setup();
    const repoState = repoMocker.getAllStates();
    const repoPath = path.join(__dirname, "repoA");
    const filePath = path.join(repoPath, "dummy-file0");
    expect(repoState).toStrictEqual([
      {
        name: "repoA",
        path: repoPath,
        branch: "main",
        pushedBranches: ["main", "test"],
        localBranches: [],
        files: [
          {
            path: filePath,
            branch: "test",
          },
        ],
      },
    ]);
    expect(existsSync(repoPath)).toBe(true);
    expect(spawnSync("git", ["status"], { cwd: repoPath }).status).toBe(0);
    expect(existsSync(filePath)).toBe(false);
    await simpleGit(repoPath).checkout("test");
    expect(existsSync(filePath)).toBe(true);
    const logs = await simpleGit(repoPath).log();
    expect(logs.latest?.message).toBe("adding files to mimic history index 0");
    expect(logs.latest?.refs).toBe("HEAD -> test, origin/test");
    await repoMocker.teardown();
  });

  test("history: merge", async () => {
    const repoMocker = new RepositoryMocker(
      {
        repoA: {
          pushedBranches: ["test"],
          history: [
            {
              action: "push",
              branch: "test",
            },
            {
              action: "merge",
              head: "test",
              base: "main",
            },
          ],
        },
      },
      __dirname
    );
    await repoMocker.setup();
    const repoState = repoMocker.getAllStates();
    const repoPath = path.join(__dirname, "repoA");
    const filePath = path.join(repoPath, "dummy-file0");
    expect(repoState).toStrictEqual([
      {
        name: "repoA",
        path: repoPath,
        branch: "main",
        pushedBranches: ["main", "test"],
        localBranches: [],
        files: [
          {
            path: filePath,
            branch: "test",
          },
        ],
      },
    ]);
    expect(existsSync(repoPath)).toBe(true);
    expect(spawnSync("git", ["status"], { cwd: repoPath }).status).toBe(0);
    expect(existsSync(filePath)).toBe(true);
    await simpleGit(repoPath).checkout("test");
    expect(existsSync(filePath)).toBe(true);
    const logs = await simpleGit(repoPath).log();
    expect(logs.latest?.message).toBe("adding files to mimic history index 0");
    expect(logs.latest?.refs).toBe("HEAD -> test, origin/test, origin/main, main");
    await repoMocker.teardown();
  });
});
