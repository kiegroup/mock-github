import { RepositoryMocker } from "@mg/github/repository/repository-mocker";
import { RepositoryFileSystem } from "@mg/github/repository/files/repository-file-system";
import { RepositoryHistory } from "@mg/github/repository/history/repository-history-mocker";
import { RepositoryBranches } from "@mg/github/repository/branches/repository-branches";
import { existsSync } from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { rm } from "fs/promises";
import {
  GITIGNORE,
  REMOTE,
} from "@mg/github/repository/repository.constants";

const setupPath = __dirname;

describe("setup", () => {
  test("no repositories", async () => {
    const repoMocker = new RepositoryMocker({}, setupPath);
    const fileSpy = jest
      .spyOn(RepositoryFileSystem.prototype, "copyFiles")
      .mockResolvedValueOnce(true);
    const localBranchSpy = jest
      .spyOn(RepositoryBranches.prototype, "setLocalBranches")
      .mockResolvedValueOnce([]);
    const pushBranchSpy = jest
      .spyOn(RepositoryBranches.prototype, "setPushedBranches")
      .mockResolvedValueOnce([]);
    const currentBranchSpy = jest
      .spyOn(RepositoryBranches.prototype, "setCurrentBranch")
      .mockResolvedValueOnce("");
    const historySpy = jest
      .spyOn(RepositoryHistory.prototype, "setHistory")
      .mockResolvedValue();

    await expect(repoMocker.setup()).resolves.not.toThrowError();

    expect(fileSpy).toHaveBeenCalledTimes(0);
    expect(localBranchSpy).toHaveBeenCalledTimes(0);
    expect(pushBranchSpy).toHaveBeenCalledTimes(0);
    expect(currentBranchSpy).toHaveBeenCalledTimes(0);
    expect(historySpy).toHaveBeenCalledTimes(0);
  });

  test("multiple repositories", async () => {
    const repoMocker = new RepositoryMocker(
      { projectA: {}, projectB: {} },
      setupPath
    );
    const fileSpy = jest
      .spyOn(RepositoryFileSystem.prototype, "copyFiles")
      .mockResolvedValueOnce(true);
    const localBranchSpy = jest
      .spyOn(RepositoryBranches.prototype, "setLocalBranches")
      .mockResolvedValueOnce([]);
    const pushBranchSpy = jest
      .spyOn(RepositoryBranches.prototype, "setPushedBranches")
      .mockResolvedValueOnce([]);
    const currentBranchSpy = jest
      .spyOn(RepositoryBranches.prototype, "setCurrentBranch")
      .mockResolvedValueOnce("");
    const historySpy = jest
      .spyOn(RepositoryHistory.prototype, "setHistory")
      .mockResolvedValue();

    await expect(repoMocker.setup()).resolves.not.toThrowError();

    expect(fileSpy).toHaveBeenCalledTimes(2);
    expect(localBranchSpy).toHaveBeenCalledTimes(2);
    expect(pushBranchSpy).toHaveBeenCalledTimes(2);
    expect(currentBranchSpy).toHaveBeenCalledTimes(2);
    expect(historySpy).toHaveBeenCalledTimes(2);

    const pathA = repoMocker.repositoryState.getPath("projectA")!;
    const pathB = repoMocker.repositoryState.getPath("projectB")!;

    expect(existsSync(pathA)).toBe(true);
    expect(existsSync(pathB)).toBe(true);
    expect(existsSync(path.join(pathA, REMOTE))).toBe(true);
    expect(existsSync(path.join(pathB, REMOTE))).toBe(true);
    expect(existsSync(path.join(pathA, GITIGNORE))).toBe(true);
    expect(existsSync(path.join(pathB, GITIGNORE))).toBe(true);

    // test whether the directories created are repositories
    expect(
      spawnSync("git", ["status"], {
        cwd: pathA,
      }).status
    ).toBe(0);
    expect(
      spawnSync("git", ["status"], {
        cwd: pathB,
      }).status
    ).toBe(0);

    await Promise.all([rm(path.dirname(pathA), { recursive: true })]);
  });
});

describe("teardown", () => {
  test("no repositories", async () => {
    const repoMocker = new RepositoryMocker({}, setupPath);
    jest
      .spyOn(RepositoryFileSystem.prototype, "copyFiles")
      .mockResolvedValueOnce(true);
    jest
      .spyOn(RepositoryBranches.prototype, "setLocalBranches")
      .mockResolvedValueOnce([]);
    jest
      .spyOn(RepositoryBranches.prototype, "setPushedBranches")
      .mockResolvedValueOnce([]);
    jest
      .spyOn(RepositoryBranches.prototype, "setCurrentBranch")
      .mockResolvedValueOnce("");
    jest.spyOn(RepositoryHistory.prototype, "setHistory").mockResolvedValue();

    await repoMocker.setup();
    await expect(repoMocker.teardown()).resolves.not.toThrowError();
  });

  test("multiple repositories", async () => {
    const repoMocker = new RepositoryMocker(
      { projectA: {}, projectB: {} },
      setupPath
    );
    jest
      .spyOn(RepositoryFileSystem.prototype, "copyFiles")
      .mockResolvedValueOnce(true);
    jest
      .spyOn(RepositoryBranches.prototype, "setLocalBranches")
      .mockResolvedValueOnce([]);
    jest
      .spyOn(RepositoryBranches.prototype, "setPushedBranches")
      .mockResolvedValueOnce([]);
    jest
      .spyOn(RepositoryBranches.prototype, "setCurrentBranch")
      .mockResolvedValueOnce("");
    jest.spyOn(RepositoryHistory.prototype, "setHistory").mockResolvedValue();

    await repoMocker.setup();

    const pathA = repoMocker.repositoryState.getPath("projectA")!;
    const pathB = repoMocker.repositoryState.getPath("projectB")!;

    expect(existsSync(pathA)).toBe(true);
    expect(existsSync(pathB)).toBe(true);

    await expect(repoMocker.teardown()).resolves.not.toThrowError();
    expect(existsSync(pathA)).toBe(false);
    expect(existsSync(pathB)).toBe(false);
  });
});
