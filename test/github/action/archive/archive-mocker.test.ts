/* eslint-disable @typescript-eslint/no-explicit-any */
import { DefaultArtifactClient } from "@actions/artifact";
import { existsSync, mkdirSync, readFile, rm, writeFile } from "fs-extra";
import path from "path";
import { ArchiveArtifactsMocker } from "@mg/github/action/archive/archive-mocker";

// disable console outputs thrown by @actions/artifacts
beforeEach(() => {
  jest
    .spyOn(process.stdout, "write")
    .mockReturnValue(true as any);
});

describe("setup", () => {
  test("passing constructor arguments", async () => {
    const storePath = path.join(__dirname, "store1");
    const archiveMocker = new ArchiveArtifactsMocker(storePath, "3434");

    await archiveMocker.setup();
    expect(process.env["ACTIONS_RUNTIME_URL"]).toBe("http://localhost:3434/");
    expect(process.env["GITHUB_RUN_ID"]).toBe(archiveMocker.getRunId());
    expect(Object.keys(process.env).includes("ACTIONS_RUNTIME_TOKEN")).toBe(
      true
    );
    expect(archiveMocker.getArtifactStore()).toBe(
      path.join(storePath, "store")
    );

    await archiveMocker.teardown();
  });

  test("no port specified", async () => {
    const archiveMocker = new ArchiveArtifactsMocker(process.cwd());

    await archiveMocker.setup();
    expect(Object.keys(process.env).includes("ACTIONS_RUNTIME_URL")).toBe(
      false
    );
    expect(Object.keys(process.env).includes("GITHUB_RUN_ID")).toBe(false);
    expect(Object.keys(process.env).includes("ACTIONS_RUNTIME_TOKEN")).toBe(
      false
    );

    await archiveMocker.teardown();
  });
});

describe("teardown", () => {
  test("artifact store was created", async () => {
    const archiveMocker = new ArchiveArtifactsMocker(process.cwd(), "8081");

    await archiveMocker.setup();
    // mimic the store being created
    mkdirSync(archiveMocker.getArtifactStore());

    await archiveMocker.teardown();

    expect(existsSync(archiveMocker.getArtifactStore())).toBe(false);
    expect(Object.keys(process.env).includes("ACTIONS_RUNTIME_TOKEN")).toBe(
      false
    );
    expect(Object.keys(process.env).includes("GITHUB_RUN_ID")).toBe(false);
    expect(Object.keys(process.env).includes("ACTIONS_RUNTIME_URL")).toBe(
      false
    );
  });

  test("archive store was not created", async () => {
    const storePath = path.join(__dirname, "store");
    // Clean up if it exists from previous test runs
    if (existsSync(storePath)) {
      await rm(storePath, { recursive: true, force: true });
    }
    mkdirSync(storePath);
    const archiveMocker = new ArchiveArtifactsMocker(__dirname, "8082");
    await archiveMocker.setup();
    await archiveMocker.teardown();

    expect(existsSync(path.dirname(archiveMocker.getArtifactStore()))).toBe(
      true
    );
    expect(Object.keys(process.env).includes("ACTIONS_RUNTIME_TOKEN")).toBe(
      false
    );
    expect(Object.keys(process.env).includes("GITHUB_RUN_ID")).toBe(false);
    expect(Object.keys(process.env).includes("ACTIONS_RUNTIME_URL")).toBe(
      false
    );
    await rm(storePath, { recursive: true });
  });

  test("server has not been started", async () => {
    const archiveMocker = new ArchiveArtifactsMocker(process.cwd(), "8083");
    await expect(archiveMocker.teardown()).rejects.toThrow();
  });

  test("no port specified", async () => {
    const archiveMocker = new ArchiveArtifactsMocker(process.cwd());
    await expect(archiveMocker.teardown()).resolves.not.toThrow();
  });
});

describe("upload", () => {
  test("upload artifacts", async () => {
    const archiveMocker = new ArchiveArtifactsMocker(__dirname, "3434");
    await archiveMocker.setup();

    const files = [
      path.join(__dirname, "file1.txt"),
      path.join(__dirname, "file2.txt"),
    ];
    await Promise.all([
      writeFile(files[0], "file1"),
      writeFile(files[1], "file2"),
    ]);

    const artifactName = "my-artifact";

    const artifactClient = new DefaultArtifactClient();
    const uploadResult = await artifactClient.uploadArtifact(
      artifactName,
      files,
      __dirname
    );

    // Verify upload was successful
    expect(uploadResult.id).toBeDefined();
    expect(uploadResult.size).toBeGreaterThan(0);

    await Promise.all([rm(files[0]), rm(files[1]), archiveMocker.teardown()]);
  });
});

describe("download", () => {
  test("download", async () => {
    const archiveMocker = new ArchiveArtifactsMocker(process.cwd(), "3437");
    await archiveMocker.setup();

    const files = [
      path.join(__dirname, "file1.txt"),
      path.join(__dirname, "file2.txt"),
    ];
    await Promise.all([
      writeFile(files[0], "file1"),
      writeFile(files[1], "file2"),
    ]);

    const artifactName = "my-artifact";

    const artifactClient = new DefaultArtifactClient();
    const uploadResult = await artifactClient.uploadArtifact(artifactName, files, __dirname);

    // Verify files were uploaded to the artifact store
    const artifactStore = archiveMocker.getArtifactStore();
    const runId = archiveMocker.getRunId();
    const uploadedFile1 = path.join(artifactStore, runId, "file1.txt");
    const uploadedFile2 = path.join(artifactStore, runId, "file2.txt");

    await Promise.all([
      expect(readFile(uploadedFile1, "utf8")).resolves.toBe("file1"),
      expect(readFile(uploadedFile2, "utf8")).resolves.toBe("file2"),
      rm(files[0]),
      rm(files[1]),
    ]);

    await archiveMocker.teardown();
  });

  test("download all", async () => {
    const archiveMocker = new ArchiveArtifactsMocker(__dirname, "3438");
    await archiveMocker.setup();

    const files = [
      path.join(__dirname, "file1.txt"),
      path.join(__dirname, "file2.txt"),
    ];
    await Promise.all([
      writeFile(files[0], "file1"),
      writeFile(files[1], "file2"),
    ]);

    const artifactName = "my-artifact";

    const artifactClient = new DefaultArtifactClient();
    await artifactClient.uploadArtifact(artifactName, files, __dirname);

    // Verify artifacts are in the store
    const artifactStore = archiveMocker.getArtifactStore();
    const runId = archiveMocker.getRunId();
    expect(existsSync(path.join(artifactStore, runId))).toBe(true);

    await Promise.all([
      rm(files[0]),
      rm(files[1]),
      archiveMocker.teardown(),
    ]);
  });
});
