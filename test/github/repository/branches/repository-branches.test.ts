import path from "path";
import simpleGit, { SimpleGit } from "simple-git";
import { RepositoryBranches } from "@mg/github/repository/branches/repository-branches";
import { RepositoryMocker } from "@mg/github/repository/repository-mocker";

let repoMocker: RepositoryMocker;
let branchCreator: RepositoryBranches;
let git: SimpleGit;
const repoPath = path.join(__dirname, "repo", "repoA");

beforeEach(async () => {
  // setup an empty repository
  repoMocker = new RepositoryMocker(
    {
      repoA: {},
    },
    __dirname
  );
  await repoMocker.setup();
  git = simpleGit(repoPath);
  branchCreator = new RepositoryBranches(git);
});

afterEach(async () => {
  await repoMocker.teardown();
});

describe("setup local branches", () => {
  test("undefined local branch", async () => {
    const localBranches = await branchCreator.setLocalBranches();
    expect(localBranches).toStrictEqual([]);
    const branchInfo = await simpleGit(repoPath).branch();
    expect(branchInfo.all.length).toBe(2);
    expect(branchInfo.all.includes("remotes/origin/main")).toBe(true);
    expect(branchInfo.all.includes("main")).toBe(true);
  });

  test("defined local branch: branch has not been created before", async () => {
    const localBranches = await branchCreator.setLocalBranches([
      "branch1",
      "branch2",
    ]);
    expect(localBranches).toStrictEqual(["branch1", "branch2"]);
    const branchInfo = await simpleGit(repoPath).branch();
    expect(branchInfo.all.length).toBe(4);
    expect(branchInfo.all.includes("remotes/origin/main")).toBe(true);
    expect(branchInfo.all.includes("main")).toBe(true);
    expect(branchInfo.all.includes("remotes/origin/branch1")).toBe(false);
    expect(branchInfo.all.includes("branch1")).toBe(true);
    expect(branchInfo.all.includes("remotes/origin/branch2")).toBe(false);
    expect(branchInfo.all.includes("branch2")).toBe(true);
  });

  test("defined local branch: branch has been created before", async () => {
    await branchCreator.setLocalBranches(["branch1", "branch2"]);

    let branchInfo = await simpleGit(repoPath).branch();
    expect(branchInfo.all.length).toBe(4);
    expect(branchInfo.all.includes("remotes/origin/main")).toBe(true);
    expect(branchInfo.all.includes("main")).toBe(true);
    expect(branchInfo.all.includes("remotes/origin/branch1")).toBe(false);
    expect(branchInfo.all.includes("branch1")).toBe(true);
    expect(branchInfo.all.includes("remotes/origin/branch2")).toBe(false);
    expect(branchInfo.all.includes("branch2")).toBe(true);

    const localBranches = await branchCreator.setLocalBranches([
      "branch1",
      "branch2",
    ]);
    expect(localBranches).toStrictEqual(["branch1", "branch2"]);

    branchInfo = await simpleGit(repoPath).branch();
    expect(branchInfo.all.length).toBe(4);
    expect(branchInfo.all.includes("remotes/origin/main")).toBe(true);
    expect(branchInfo.all.includes("main")).toBe(true);
    expect(branchInfo.all.includes("remotes/origin/branch1")).toBe(false);
    expect(branchInfo.all.includes("branch1")).toBe(true);
    expect(branchInfo.all.includes("remotes/origin/branch2")).toBe(false);
    expect(branchInfo.all.includes("branch2")).toBe(true);
  });
});

describe("setup pushed branches", () => {
  test("undefined pushed branch", async () => {
    const pushedBranches = await branchCreator.setPushedBranches();
    expect(pushedBranches).toStrictEqual(["main"]);
    const branchInfo = await simpleGit(repoPath).branch();
    expect(branchInfo.all.length).toBe(2);
    expect(branchInfo.all.includes("remotes/origin/main")).toBe(true);
    expect(branchInfo.all.includes("main")).toBe(true);
  });

  test("defined pushed branch: branch has not been created before", async () => {
    const pushedBranches = await branchCreator.setPushedBranches([
      "branch1",
      "branch2",
    ]);
    expect(pushedBranches).toStrictEqual(["main", "branch1", "branch2"]);
    const branchInfo = await simpleGit(repoPath).branch();
    expect(branchInfo.all.length).toBe(6);
    expect(branchInfo.all.includes("remotes/origin/main")).toBe(true);
    expect(branchInfo.all.includes("main")).toBe(true);
    expect(branchInfo.all.includes("remotes/origin/branch1")).toBe(true);
    expect(branchInfo.all.includes("branch1")).toBe(true);
    expect(branchInfo.all.includes("remotes/origin/branch2")).toBe(true);
    expect(branchInfo.all.includes("branch2")).toBe(true);
  });

  test("defined pushed branch: branch has been created before", async () => {
    await branchCreator.setPushedBranches(["branch1", "branch2"]);

    let branchInfo = await simpleGit(repoPath).branch();
    expect(branchInfo.all.length).toBe(6);
    expect(branchInfo.all.includes("remotes/origin/main")).toBe(true);
    expect(branchInfo.all.includes("main")).toBe(true);
    expect(branchInfo.all.includes("remotes/origin/branch1")).toBe(true);
    expect(branchInfo.all.includes("branch1")).toBe(true);
    expect(branchInfo.all.includes("remotes/origin/branch2")).toBe(true);
    expect(branchInfo.all.includes("branch2")).toBe(true);

    const pushedBranches = await branchCreator.setPushedBranches([
      "branch1",
      "branch2",
    ]);
    expect(pushedBranches).toStrictEqual(["main", "branch1", "branch2"]);

    branchInfo = await simpleGit(repoPath).branch();
    expect(branchInfo.all.length).toBe(6);
    expect(branchInfo.all.includes("remotes/origin/main")).toBe(true);
    expect(branchInfo.all.includes("main")).toBe(true);
    expect(branchInfo.all.includes("remotes/origin/branch1")).toBe(true);
    expect(branchInfo.all.includes("branch1")).toBe(true);
    expect(branchInfo.all.includes("remotes/origin/branch2")).toBe(true);
    expect(branchInfo.all.includes("branch2")).toBe(true);
  });
});

describe("setup current branch", () => {
  test("undefined current branch", async () => {
    const git = simpleGit(repoPath);
    await git.checkoutLocalBranch("test-branch");
    let branchInfo = await git.branch();
    expect(branchInfo.current).toBe("test-branch");

    const currentBranch = await branchCreator.setCurrentBranch();
    expect(currentBranch).toBe("main");
    branchInfo = await git.branch();
    expect(branchInfo.current).toBe("main");
  });

  test("defined current branch: branch has not been created before", async () => {
    let branchInfo = await simpleGit(repoPath).branch();
    expect(branchInfo.current).toBe("main");

    const currentBranch = await branchCreator.setCurrentBranch("branch1");
    expect(currentBranch).toBe("branch1");

    branchInfo = await simpleGit(repoPath).branch();
    expect(branchInfo.current).toBe("branch1");

    const localBranches = await branchCreator.setLocalBranches(["branch1"]);
    expect(localBranches).toStrictEqual(["branch1"]);
  });

  test("defined current branch: branch has been created before", async () => {
    const git = simpleGit(repoPath);
    await branchCreator.setPushedBranches(["branch1"]);
    await branchCreator.setLocalBranches(["branch2"]);

    let branchInfo = await git.branch();
    expect(branchInfo.all.length).toBe(5);
    expect(branchInfo.all.includes("remotes/origin/main")).toBe(true);
    expect(branchInfo.all.includes("main")).toBe(true);
    expect(branchInfo.all.includes("remotes/origin/branch1")).toBe(true);
    expect(branchInfo.all.includes("branch1")).toBe(true);
    expect(branchInfo.all.includes("branch2")).toBe(true);
    expect(branchInfo.current).toBe("main");

    let currentBranch = await branchCreator.setCurrentBranch("branch1");
    expect(currentBranch).toBe("branch1");
    branchInfo = await git.branch();
    expect(branchInfo.current).toBe("branch1");

    currentBranch = await branchCreator.setCurrentBranch("branch2");
    expect(currentBranch).toBe("branch2");
    branchInfo = await git.branch();
    expect(branchInfo.current).toBe("branch2");
  });
});
