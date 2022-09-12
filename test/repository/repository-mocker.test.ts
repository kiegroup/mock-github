import { RepositoryMocker } from "../../src/mock/repository/repository-mocker";
import { RepositoryFileSystem } from "../../src/mock/repository/files/repository-file-system";
import { RepositoryHistory } from "../../src/mock/repository/history/repository-history-mocker";
import { RepositoryBranches } from "../../src/mock/repository/branches/repository-branches";
import { existsSync } from "fs";
import path from "path";
import { spawnSync } from "child_process";
import { rm } from "fs/promises";

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

    expect(existsSync(repoMocker.repositoryState.getPath("projectA")!)).toBe(
      true
    );
    expect(existsSync(repoMocker.repositoryState.getPath("projectB")!)).toBe(
      true
    );

    // test whether the directories created are repositories
    expect(
      spawnSync("git", ["status"], {
        cwd: repoMocker.repositoryState.getPath("projectA")!,
      }).status
    ).toBe(0);
    expect(
      spawnSync("git", ["status"], {
        cwd: repoMocker.repositoryState.getPath("projectB")!,
      }).status
    ).toBe(0);

    await Promise.all([
      rm(repoMocker.repositoryState.getPath("projectA")!, { recursive: true }),
      rm(repoMocker.repositoryState.getPath("projectB")!, { recursive: true }),
    ]);
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

    expect(existsSync(repoMocker.repositoryState.getPath("projectA")!)).toBe(
      true
    );
    expect(existsSync(repoMocker.repositoryState.getPath("projectB")!)).toBe(
      true
    );

    await expect(repoMocker.teardown()).resolves.not.toThrowError();
    expect(existsSync(repoMocker.repositoryState.getPath("projectA")!)).toBe(
      false
    );
    expect(existsSync(repoMocker.repositoryState.getPath("projectB")!)).toBe(
      false
    );
  });
});
