import { mkdirSync } from "fs";
import { writeFile, rm } from "fs/promises";
import path from "path";
import {
  GitActionTypes,
  Merge,
  Push,
} from "../../../../src/github/repository/history/repository-history.types";
import { DEFAULT_BRANCH } from "../../../../src/github/repository/repository.constants";
import { RepositoryState } from "../../../../src/github/repository/state/repository-state";

const setupPath = __dirname;

describe("getFileSystemState", () => {
  test("undefined repository", async () => {
    const repoState = new RepositoryState({}, setupPath);
    await expect(repoState.getFileSystemState("repoA")).resolves.toBe(
      undefined
    );
  });

  test("no files", async () => {
    const repoState = new RepositoryState({ projectA: {} }, setupPath);
    await expect(
      repoState.getFileSystemState("projectA")
    ).resolves.toStrictEqual([]);
  });

  test("setup files", async () => {
    const src = path.join(__dirname, "root");
    mkdirSync(path.join(src, "foo", "bar", "blah"), {
      recursive: true,
    });
    mkdirSync(path.join(src, "foo", "blah"), { recursive: true });
    await Promise.all([
      writeFile(path.join(src, "dummy1"), "dummy1"),
      writeFile(path.join(src, "foo", "bar", "dummy2"), "dummy2"),
      writeFile(path.join(src, "foo", "dummy3"), "dummy3"),
      writeFile(path.join(src, "foo", "bar", "blah", "dummy4"), "dummy4"),
    ]);

    const repoState = new RepositoryState(
      {
        projectA: {
          files: [
            {
              src: path.join(src, "dummy1"),
              dest: "test/dummy.txt",
            },
            {
              src: path.join(src),
              dest: "src/",
            },
          ],
        },
      },
      setupPath
    );
    await expect(
      repoState.getFileSystemState("projectA")
    ).resolves.toStrictEqual([
      { path: "test/dummy.txt", branch: "main" },
      { path: "src/dummy1", branch: "main" },
      { path: "src/foo/dummy3", branch: "main" },
      { path: "src/foo/bar/dummy2", branch: "main" },
      { path: "src/foo/bar/blah/dummy4", branch: "main" },
    ]);

    await rm(src, { recursive: true });
  });

  test("github history", async () => {
    const src = path.join(__dirname, "root");
    mkdirSync(path.join(src, "foo"), {
      recursive: true,
    });

    await Promise.all([
      writeFile(path.join(src, "dummy1"), "dummy1"),
      writeFile(path.join(src, "foo", "dummy3"), "dummy3"),
    ]);

    const repoState = new RepositoryState(
      {
        projectA: {
          history: [
            {
              action: GitActionTypes.PUSH,
              branch: "branch1",
            } as Push,
            {
              action: GitActionTypes.PUSH,
              branch: "branch2",
              files: [
                {
                  src,
                  dest: "",
                },
              ],
            } as Push,
            {
              action: GitActionTypes.MERGE,
              base: "branch1",
              head: "main",
            } as Merge,
          ],
        },
      },
      setupPath
    );

    await expect(
      repoState.getFileSystemState("projectA")
    ).resolves.toStrictEqual([
      { path: "/dummy-file-0", branch: "branch1" },
      { path: "/dummy1", branch: "branch2" },
      { path: "/foo/dummy3", branch: "branch2" },
    ]);

    await rm(src, { recursive: true });
  });
});

describe("getBranchState", () => {
  test("undefined repository", () => {
    const repoState = new RepositoryState({}, setupPath);
    expect(repoState.getBranchState("repoA")).toBe(undefined);
  });

  test("current branch defined (not defined in either local or pushed)", () => {
    const repoState = new RepositoryState(
      {
        projectA: {
          currentBranch: "branch",
        },
      },
      setupPath
    );
    expect(repoState.getBranchState("projectA")).toStrictEqual({
      currentBranch: "branch",
      pushedBranches: [DEFAULT_BRANCH],
      localBranches: ["branch"],
    });
  });

  test("pushed branch defined and current branch defined (branch declared in pushed branches)", () => {
    const repoState = new RepositoryState(
      {
        projectA: {
          currentBranch: "branch",
          pushedBranches: ["abc", "branch"],
        },
      },
      setupPath
    );
    expect(repoState.getBranchState("projectA")).toStrictEqual({
      currentBranch: "branch",
      pushedBranches: ["abc", "branch", DEFAULT_BRANCH],
      localBranches: [],
    });
  });

  test("local branch defined and current branch defined (branch declared in local branches)", () => {
    const repoState = new RepositoryState(
      {
        projectA: {
          currentBranch: "branch",
          localBranches: ["abc", "branch"],
        },
      },
      setupPath
    );
    expect(repoState.getBranchState("projectA")).toStrictEqual({
      currentBranch: "branch",
      localBranches: ["abc", "branch"],
      pushedBranches: [DEFAULT_BRANCH],
    });
  });

  test("local, pushed and current branch defined", () => {
    const repoState = new RepositoryState(
      {
        projectA: {
          currentBranch: "branch",
          localBranches: ["abc", "branch"],
          pushedBranches: ["branch2"],
        },
      },
      setupPath
    );

    expect(repoState.getBranchState("projectA")).toStrictEqual({
      currentBranch: "branch",
      localBranches: ["abc", "branch"],
      pushedBranches: ["branch2", DEFAULT_BRANCH],
    });
  });
});

describe("getOwner", () => {
  test("undefined repository", () => {
    const repoState = new RepositoryState({}, setupPath);
    expect(repoState.getOwner("repoA")).toBe(undefined);
  });

  test("owner defined in repository config", () => {
    const repoState = new RepositoryState(
      {
        projectA: {
          owner: "owner",
        },
      },
      setupPath
    );
    expect(repoState.getOwner("projectA")).toBe("owner");
  });

  test("owner not defined in repository config: using env", () => {
    const repoState = new RepositoryState(
      {
        projectA: {},
      },
      setupPath
    );
    expect(repoState.getOwner("projectA")).toBe(process.env.LOGNAME);
  });

  test("owner not defined in repository config as well as env", () => {
    const repoState = new RepositoryState(
      {
        projectA: {},
      },
      setupPath
    );
    delete process.env["LOGNAME"];
    expect(repoState.getOwner("projectA")).toBe("");
  });
});

describe("getPath", () => {
  test("undefined repository", () => {
    const repoState = new RepositoryState({}, setupPath);
    expect(repoState.getPath("repoA")).toBe(undefined);
  });

  test("repository defined", () => {
    const repoState = new RepositoryState({ projectA: {} }, setupPath);
    expect(repoState.getPath("projectA")).toBe(
      path.join(setupPath, "projectA")
    );
  });
});

describe("isFork", () => {
  test("undefined repository", () => {
    const repoState = new RepositoryState({}, setupPath);
    expect(repoState.isFork("repoA")).toBe(false);
  });

  test("repository defined but forkedForm is not", () => {
    const repoState = new RepositoryState({ projectA: {} }, setupPath);
    expect(repoState.isFork("projectA")).toBe(false);
  });

  test("repository defined and forkedForm is also defined", () => {
    const repoState = new RepositoryState(
      { projectA: { forkedFrom: "projectA-fork" } },
      setupPath
    );
    expect(repoState.isFork("projectA")).toBe(true);
  });
});

describe("forkedFrom", () => {
  test("undefined repository", () => {
    const repoState = new RepositoryState({}, setupPath);
    expect(repoState.getForkedFrom("repoA")).toBe(undefined);
  });

  test("repository defined but forkedForm is not", () => {
    const repoState = new RepositoryState({ projectA: {} }, setupPath);
    expect(repoState.getForkedFrom("projectA")).toBe(undefined);
  });

  test("repository defined and forkedForm is also defined", () => {
    const repoState = new RepositoryState(
      { projectA: { forkedFrom: "projectA-fork" } },
      setupPath
    );
    expect(repoState.getForkedFrom("projectA")).toBe("projectA-fork");
  });
});

describe("getState", () => {
  test("undefined repository", async () => {
    const repoState = new RepositoryState({}, setupPath);
    await expect(repoState.getState("repoA")).resolves.toBe(undefined);
  });

  test("repository defined", async () => {
    const repoConfig = {
      owner: "owner",
      localBranches: ["local1", "local2"],
      pushedBranches: ["pushed1", "pushed2"],
      currentBranch: "local1",
      forkedFrom: "project-forked"
    };
    const repoState = new RepositoryState({ projectA: repoConfig }, setupPath);
    await expect(repoState.getState("projectA")).resolves.toStrictEqual({
      name: "projectA",
      owner: repoConfig.owner,
      path: path.join(setupPath, "projectA"),
      branches: {
        localBranches: repoConfig.localBranches,
        pushedBranches: [...repoConfig.pushedBranches, DEFAULT_BRANCH],
        currentBranch: repoConfig.currentBranch,
      },
      forkedFrom: "project-forked",
      files: [],
    });
  });
});
