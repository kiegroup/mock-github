import { existsSync, mkdirSync } from "fs";
import { readFile, rm, writeFile } from "fs/promises";
import path from "path";
import { RepositoryFileSystem } from "@mg/github/repository/files/repository-file-system";
import { RepositoryMocker } from "@mg/github/repository/repository-mocker";
import { GITIGNORE, REMOTE } from "@mg/github/repository/repository.constants";

let repoMocker: RepositoryMocker;
let fileCreator: RepositoryFileSystem;
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

  test("overwriting gitignore", async () => {
    const src = path.join(__dirname, "dummy1");
    await writeFile(src, "dummy1");
    await expect(
      fileCreator.copyFiles([{ src, dest: GITIGNORE }])
    ).rejects.toThrowError();
    await rm(src);
  });

  test("filter files", async () => {
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
      { src, dest: "/", filter: ["**/dummy(2|4)"] },
      {
        src: path.join(src, "foo", "bar", "dummy2"),
        dest: "src/dummy2",
        filter: ["dummy2"], // shouldn't be ignored if the src is a file
      },
      { src: __dirname, dest: "files", filter: ["root"] },
    ];

    await expect(fileCreator.copyFiles(filesToCreate)).resolves.toBe(true);

    await Promise.all([
      expect(readFile(path.join(repoPath, "dummy1"), "utf8")).resolves.toBe(
        "dummy1"
      ),
      expect(
        readFile(path.join(repoPath, "src", "dummy2"), "utf8")
      ).resolves.toBe("dummy2"),
      expect(
        readFile(path.join(repoPath, "foo", "dummy3"), "utf8")
      ).resolves.toBe("dummy3"),
    ]);
    expect(existsSync(path.join(repoPath, "foo", "blah"))).toBe(true);
    expect(
      existsSync(path.join(repoPath, "foo", "bar", "blah", "dummy4"))
    ).toBe(false);
    expect(
      existsSync(path.join(repoPath, "foo", "bar", "dummy2"))
    ).toBe(false);
    expect(
      existsSync(path.join(repoPath, "files", "repo", "repoA"))
    ).toBe(false);
    expect(
      existsSync(path.join(repoPath, "files", "root"))
    ).toBe(false);
    expect(
      existsSync(path.join(repoPath, "files", path.basename(__filename)))
    ).toBe(true);

    await rm(src, { recursive: true });
  });
});

describe("createFile", () => {
  test("success", async () => {
    const data = "some data";
    const filePath = "src/dummy.txt";
    await fileCreator.createFile(filePath, data);
    await expect(readFile(path.join(repoPath, filePath), "utf8")).resolves.toBe(
      data
    );
  });

  test("failure", async () => {
    const data = "some data";
    const filePath = `${REMOTE}/dummy.txt`;
    await expect(fileCreator.createFile(filePath, data)).rejects.toThrowError();
  });
});
