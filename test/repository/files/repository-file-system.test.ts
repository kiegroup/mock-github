import { existsSync, mkdir, mkdirSync } from "fs";
import { readFile, rm, writeFile } from "fs/promises";
import path from "path";
import { RepositoryFileSystem } from "../../../src/mock/repository/files/repository-file-system";
import { RepositoryMocker } from "../../../src/mock/repository/repository-mocker";
import { REMOTE } from "../../../src/mock/repository/repository.constants";

let repoMocker: RepositoryMocker;
let fileCreator: RepositoryFileSystem;
const repoPath = path.join(__dirname, "repoA");

beforeEach(async () => {
  // setup an empty repository
  repoMocker = new RepositoryMocker(
    {
      repoA: {},
    },
    __dirname
  );
  await repoMocker.setup();
  fileCreator = new RepositoryFileSystem(repoPath);
});

afterEach(async () => {
  await repoMocker.teardown();
});

describe("copyFile", () => {
  test("copy directories", async () => {
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

    const filesToCreate = [
      { src, dest: "/" },
      { src, dest: "src" },
      { src, dest: "/src/test-files" },
    ];

    await expect(fileCreator.copyFiles(filesToCreate)).resolves.toBe(true);

    for (const file of filesToCreate) {
      const destPath = path.join(repoPath, file.dest);
      await Promise.all([
        expect(readFile(path.join(destPath, "dummy1"), "utf8")).resolves.toBe(
          "dummy1"
        ),
        expect(
          readFile(path.join(destPath, "foo", "bar", "dummy2"), "utf8")
        ).resolves.toBe("dummy2"),
        expect(
          readFile(path.join(destPath, "foo", "dummy3"), "utf8")
        ).resolves.toBe("dummy3"),
        expect(
          readFile(path.join(destPath, "foo", "bar", "blah", "dummy4"), "utf8")
        ).resolves.toBe("dummy4"),
      ]);
      expect(existsSync(path.join(destPath, "foo", "blah"))).toBe(true);
    }
    await rm(src, { recursive: true });
  });

  test("copy files", async () => {
    const src = path.join(__dirname, "dummy1");
    await writeFile(src, "dummy1");

    await expect(
      fileCreator.copyFiles([
        { src, dest: "/dummy-name.txt" },
        { src, dest: "dummy-renamed.txt" },
        { src, dest: "src/hello" },
        { src, dest: "/src/test-files/new-file" },
      ])
    ).resolves.toBe(true);

    await Promise.all([
      expect(
        readFile(path.join(repoPath, "/dummy-name.txt"), "utf8")
      ).resolves.toBe("dummy1"),
      expect(
        readFile(path.join(repoPath, "dummy-renamed.txt"), "utf8")
      ).resolves.toBe("dummy1"),
      expect(readFile(path.join(repoPath, "src/hello"), "utf8")).resolves.toBe(
        "dummy1"
      ),
      expect(
        readFile(path.join(repoPath, "/src/test-files/new-file"), "utf8")
      ).resolves.toBe("dummy1"),

      rm(src),
    ]);
  });

  test("undefined files", async () => {
    await expect(fileCreator.copyFiles()).resolves.toBe(false);
  });

  test("copying files into remote", async () => {
    const src = path.join(__dirname, "dummy1");
    await writeFile(src, "dummy1");
    await expect(
      fileCreator.copyFiles([{ src, dest: `${REMOTE}/src/files/` }])
    ).rejects.toThrowError();
    await rm(src);
  });
});

describe("createFile", () => {
  test("success", async () => {
    const data = "some data";
    const filePath = "src/dummy.txt";
    await fileCreator.createFile(filePath, data);
    await expect(readFile(path.join(repoPath, filePath), "utf8")).resolves.toBe(data);
  });

  test("failure", async () => {
    const data = "some data";
    const filePath = `${REMOTE}/dummy.txt`;
    await expect(fileCreator.createFile(filePath, data)).rejects.toThrowError();
  });
});
