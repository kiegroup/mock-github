import * as fs from "fs"
import * as path from "path"
import { FileUtils } from "../../../src/github/utils/file-utils";

const root = path.join(__dirname, "_temp", "file-utils");

beforeAll(async () => {
    // clear temp directory
    if (fs.existsSync(root)) {
        fs.rmSync(root, { recursive: true, force: true });
    }
    fs.mkdirSync(path.join(root, "folder-a", "folder-b", "folder-c1"), {
        recursive: true
    });
    fs.mkdirSync(path.join(root, "folder-a", "folder-b", "folder-c2"), {
        recursive: true
    });
    fs.mkdirSync(path.join(root, "folder-a", "folder-b", "folder-c3"), {
        recursive: true
    });
    fs.mkdirSync(path.join(root, "repo"), {
        recursive: true
    });
    fs.mkdirSync(path.join(root, "node_modules"), {
        recursive: true
    });
    fs.mkdirSync(path.join(root, ".git"), {
        recursive: true
    });

    fs.writeFileSync(
        path.join(root, "folder-a", "folder-b", "folder-c1", "filec1.txt"),
        "file1 content"
    );
    fs.writeFileSync(
        path.join(root, "folder-a", "folder-b", "folder-c2", "filec2.txt"),
        "file2 content"
    );
    fs.writeFileSync(
        path.join(root, "fileroot1.json"),
        "fileroot1 content"
    );
    fs.writeFileSync(
        path.join(root, "fileroot2.txt"),
        "fileroot2 content"
    );
    fs.writeFileSync(
        path.join(root, ".gitignore"),
        "gitignore content"
    );
});

afterEach(() => {
    jest.clearAllMocks();
});

afterAll(() => {
    if (fs.existsSync(root)) {
        fs.rmSync(root, { recursive: true, force: true });
    }
})

describe("listFiles", () => {
    test("empty", () => {
        // Act
        const result = FileUtils.listFiles(path.join(root, "folder-a", "folder-b", "folder-c3"))
        // Assert
        expect(result.length).toBe(0);
    })

    test("root", () => {
        // Act
        const result = FileUtils.listFiles(root)
        // Assert
        expect(result.length).toBe(7);
        expect(result).toMatchObject([{
            src: path.join(root, ".git"),
            dest: ".git"
        }, {
            src: path.join(root, ".gitignore"),
            dest: ".gitignore"
        }, {
            src: path.join(root, "fileroot1.json"),
            dest: "fileroot1.json"
        }, {
            src: path.join(root, "fileroot2.txt"),
            dest: "fileroot2.txt"
        }, {
            src: path.join(root, "folder-a"),
            dest: "folder-a"
        }, {
            src: path.join(root, "node_modules"),
            dest: "node_modules"
        }, {
            src: path.join(root, "repo"),
            dest: "repo"
        }]);
    })

    test("folder-a/folder-b", () => {
        // Act
        const result = FileUtils.listFiles(path.join(root, "folder-a", "folder-b"))
        // Assert
        expect(result.length).toBe(3);
        expect(result).toMatchObject([{
            src: path.join(root, "folder-a", "folder-b", "folder-c1"),
            dest: "folder-c1"
        }, {
            src: path.join(root, "folder-a", "folder-b", "folder-c2"),
            dest: "folder-c2"
        }, {
            src: path.join(root, "folder-a", "folder-b", "folder-c3"),
            dest: "folder-c3"
        }]);
    })

    test("root with exclusion", () => {
        // Act
        const result = FileUtils.listFiles(root, "\.json")
        // Assert
        expect(result.length).toBe(6);
        expect(result).toMatchObject([{
            src: path.join(root, ".git"),
            dest: ".git"
        }, {
            src: path.join(root, ".gitignore"),
            dest: ".gitignore"
        }, {
            src: path.join(root, "fileroot2.txt"),
            dest: "fileroot2.txt"
        }, {
            src: path.join(root, "folder-a"),
            dest: "folder-a"
        }, {
            src: path.join(root, "node_modules"),
            dest: "node_modules"
        }, {
            src: path.join(root, "repo"),
            dest: "repo"
        }]);
    })
})

describe("listMockGithubFiles", () => {
    test("empty", () => {
        // Act
        const result = FileUtils.listMockGithubFiles(path.join(root, "folder-a", "folder-b", "folder-c3"))
        // Assert
        expect(result.length).toBe(0);
    })

    test("root", () => {
        // Act
        const result = FileUtils.listMockGithubFiles(root)
        // Assert
        expect(result.length).toBe(4);
        expect(result).toMatchObject([{
            src: path.join(root, "fileroot1.json"),
            dest: "fileroot1.json"
        }, {
            src: path.join(root, "fileroot2.txt"),
            dest: "fileroot2.txt"
        }, {
            src: path.join(root, "folder-a"),
            dest: "folder-a"
        }, {
            src: path.join(root, "repo"),
            dest: "repo"
        }]);
    })

    test("root with repo name", () => {
        // Act
        const result = FileUtils.listMockGithubFiles(root, "repo")
        // Assert
        expect(result.length).toBe(3);
        expect(result).toMatchObject([{
            src: path.join(root, "fileroot1.json"),
            dest: "fileroot1.json"
        }, {
            src: path.join(root, "fileroot2.txt"),
            dest: "fileroot2.txt"
        }, {
            src: path.join(root, "folder-a"),
            dest: "folder-a"
        }]);
    })
})