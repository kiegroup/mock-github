import * as artifact from "@actions/artifact";
import { existsSync, mkdirSync, readFile, rm, writeFile } from "fs-extra";
import path from "path";
import { ArchiveArtifactsMocker } from "../../../../src/github/action/archive/archive-mocker";

// disable console outputs thrown by @actions/artifacts
beforeEach(() => {
  jest
    .spyOn(process.stdout, "write")
    .mockReturnValue({ write: (_msg: string) => undefined } as any);
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

  test("server has already been started", async () => {
    const archiveMocker = new ArchiveArtifactsMocker(process.cwd(), "8080");
    await archiveMocker.setup();
    await expect(archiveMocker.setup()).rejects.toThrowError();
    await archiveMocker.teardown();
  });
});

describe("teardown", () => {
  test("artifact store was created", async () => {
    const archiveMocker = new ArchiveArtifactsMocker(process.cwd(), "8080");

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
    mkdirSync(storePath);
    const archiveMocker = new ArchiveArtifactsMocker(__dirname, "8080");
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
    const archiveMocker = new ArchiveArtifactsMocker(process.cwd(), "8080");
    await expect(archiveMocker.teardown()).rejects.toThrowError();
  });

  test("no port specified", async () => {
    const archiveMocker = new ArchiveArtifactsMocker(process.cwd());
    await expect(archiveMocker.teardown()).resolves.not.toThrowError();
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

    const artifactClient = artifact.create();
    const uploadResult = await artifactClient.uploadArtifact(
      artifactName,
      files,
      __dirname
    );

    await Promise.all([
      expect(readFile(uploadResult.artifactItems[0], "utf8")).resolves.toBe(
        "file1"
      ),
      expect(readFile(uploadResult.artifactItems[1], "utf8")).resolves.toBe(
        "file2"
      ),
    ]);

    await Promise.all([rm(files[0]), rm(files[1]), archiveMocker.teardown()]);
  });
});

describe("download", () => {
  test("download", async () => {
    const archiveMocker = new ArchiveArtifactsMocker(process.cwd(), "3435");
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

    const artifactClient = artifact.create();
    await artifactClient.uploadArtifact(artifactName, files, __dirname);

    await Promise.all([rm(files[0]), rm(files[1])]);

    const downloadResult = await artifactClient.downloadArtifact(
      "my-artifact",
      __dirname
    );

    await Promise.all([
      expect(
        readFile(path.join(downloadResult.downloadPath, "file1.txt"), "utf8")
      ).resolves.toBe("file1"),
      expect(
        readFile(path.join(downloadResult.downloadPath, "file2.txt"), "utf8")
      ).resolves.toBe("file2"),
    ]);

    await Promise.all([
      rm(path.join(downloadResult.downloadPath, "file1.txt")),
      rm(path.join(downloadResult.downloadPath, "file2.txt")),
      archiveMocker.teardown(),
    ]);
  });

  test("download all", async () => {
    const archiveMocker = new ArchiveArtifactsMocker(__dirname, "3436");
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

    const artifactClient = artifact.create();
    await artifactClient.uploadArtifact(artifactName, files, __dirname);

    await Promise.all([rm(files[0]), rm(files[1])]);

    const downloadResult = await artifactClient.downloadAllArtifacts(__dirname);

    expect(downloadResult.length).toBe(2);
    await Promise.all([
      expect(
        readFile(path.join(downloadResult[0].downloadPath, "file1.txt"), "utf8")
      ).resolves.toBe("file1"),
      expect(
        readFile(path.join(downloadResult[1].downloadPath, "file2.txt"), "utf8")
      ).resolves.toBe("file2"),
    ]);

    await Promise.all([
      rm(path.join(__dirname, artifactName), { recursive: true }),
      archiveMocker.teardown(),
    ]);
  });
});
