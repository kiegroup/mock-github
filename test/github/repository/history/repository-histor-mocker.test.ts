import { existsSync } from "fs";
import { writeFile, rm } from "fs/promises";
import path from "path";
import simpleGit, { SimpleGit } from "simple-git";
import { RepositoryHistory } from "@mg/github/repository/history/repository-history-mocker";
import {
  GitActionTypes,
  Merge,
  Push,
} from "@mg/github/repository/history/repository-history.types";
import { RepositoryMocker } from "@mg/github/repository/repository-mocker";
import {
  DEFAULT_COMMIT_MSG,
  DUMMY_FILE_NAME,
} from "@mg/github/repository/repository.constants";

let repoMocker: RepositoryMocker;
let historyMocker: RepositoryHistory;
let git: SimpleGit;
const repoPath = path.join(__dirname, "repo", "repoA");

beforeEach(async () => {
  // setup an empty repository
  repoMocker = new RepositoryMocker(
    {
      repoA: {
        localBranches: ["branch1"],
        pushedBranches: ["branch2"],
      },
    },
    __dirname
  );
  await repoMocker.setup();
  git = simpleGit(repoPath);
  historyMocker = new RepositoryHistory(git, repoPath);
});

afterEach(async () => {
  await repoMocker.teardown();
});

describe.each([
  ["on already pushed branches", "branch2"],
  ["on local branches", "branch1"],
  ["on current branch", "main"],
])("push action: %p", (_title: string, branch: string) => {
  test("create dummy files", async () => {
    const action: Push = { action: GitActionTypes.PUSH, branch };
    await historyMocker.setHistory([action]);
    const filePath = path.join(repoPath, `${DUMMY_FILE_NAME}0`);

    await simpleGit(repoPath).checkout(branch);
    expect(existsSync(filePath)).toBe(true);
    const logs = await simpleGit(repoPath).log();
    expect(logs.latest?.message).toBe(DEFAULT_COMMIT_MSG(0));
    expect(logs.latest?.refs).toBe(`HEAD -> ${branch}, origin/${branch}`);
  });

  test("push copied files", async () => {
    const src = path.join(__dirname, `${branch}-dummy`);
    await writeFile(src, "data");
    const action: Push = {
      action: GitActionTypes.PUSH,
      branch,
      files: [{ src, dest: "/dummy.txt" }],
    };
    await historyMocker.setHistory([action]);
    const filePath = path.join(repoPath, "dummy.txt");

    await simpleGit(repoPath).checkout(branch);
    expect(existsSync(filePath)).toBe(true);
    const logs = await simpleGit(repoPath).log();
    expect(logs.latest?.message).toBe(DEFAULT_COMMIT_MSG(0));
    expect(logs.latest?.refs).toBe(`HEAD -> ${branch}, origin/${branch}`);

    await rm(src);
  });

  test("custom commit message", async () => {
    const action: Push = {
      action: GitActionTypes.PUSH,
      branch,
      commitMessage: "custom message",
    };
    await historyMocker.setHistory([action]);
    const filePath = path.join(repoPath, `${DUMMY_FILE_NAME}0`);

    await simpleGit(repoPath).checkout(branch);
    expect(existsSync(filePath)).toBe(true);
    const logs = await simpleGit(repoPath).log();
    expect(logs.latest?.message).toBe(action.commitMessage);
    expect(logs.latest?.refs).toBe(`HEAD -> ${branch}, origin/${branch}`);
  });
});

describe.each([
  ["on already pushed branches", "branch2", "main"],
  ["on local branches", "branch1", "main"],
  ["on current branch", "main", "branch2"],
])("merge action: %p", (_title: string, base: string, head: string) => {
  test.each([
    ["custom commit message", "custom message"],
    ["no custom commit message", undefined],
  ])("%p", async (_title: string, commitMessage?: string) => {
    const pushAction: Push = { action: GitActionTypes.PUSH, branch: head };
    let mergeAction: Merge = { action: GitActionTypes.MERGE, head, base };
    if (commitMessage) {
      mergeAction = { ...mergeAction, commitMessage };
    }

    await historyMocker.setHistory([pushAction, mergeAction]);
    const logs = await simpleGit(repoPath).log();
    const filePath = path.join(repoPath, `${DUMMY_FILE_NAME}0`);
    await simpleGit(repoPath).checkout(base);
    expect(existsSync(filePath)).toBe(true);
    expect(logs.latest?.message).toBe(DEFAULT_COMMIT_MSG(0));
    const splitRefs = logs.latest?.refs.split(",").map((s) => s.trim());
    expect(splitRefs?.includes(`HEAD -> ${base}`)).toBe(true);
    expect(splitRefs?.includes(head)).toBe(true);
    expect(splitRefs?.includes(`origin/${head}`)).toBe(true);
    expect(splitRefs?.includes(`origin/${base}`)).toBe(true);
  });
});
