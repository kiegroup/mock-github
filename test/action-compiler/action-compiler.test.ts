import { execSync, spawnSync } from "child_process";
import { rmSync } from "fs";
import path from "path";
import { promisify } from "util";
import { ActionCompiler } from "../../src/action-compiler/action-compile";
import { Moctokit } from "../../src/moctokit/moctokit";

describe("initialization from file", () => {
  const resources = path.resolve(process.cwd(), "test", "resources");
  test("success", () => {
    expect(
      () => new ActionCompiler(path.join(resources, "api-schema-correct.json"))
    ).not.toThrowError();
  });

  test("failure", () => {
    expect(
      () =>
        new ActionCompiler(path.join(resources, "api-schema-incorrect.json"))
    ).toThrowError();
  });
});

describe("compile mocked action", () => {
  beforeAll(async () => {
    const exec = promisify(require("node:child_process").exec);
    await Promise.all([
      exec("npm run pre-compiler-test:minify"),
      exec("npm run pre-compiler-test:no-minify"),
    ]);
  });

  afterAll(async () => {
    execSync("npm run post-compiler-test");
  });

  test.each([
    ["minified", true, "dist-minify/index.js"],
    ["not minified", false, "dist-no-minify/index.js"],
  ])(
    "compile mocked action: %p",
    async (_title: string, minify: boolean, src: string) => {
      const moctokit = new Moctokit();
      const compiler = new ActionCompiler({
        google: {
          baseUrl: "https://google.com",
          endpoints: {
            root: {
              get: {
                path: "/",
                method: "get",
                parameters: {
                  path: [],
                  query: ["search"],
                  body: [],
                },
              },
            },
          },
        },
      });
      const dest = path.join(__dirname, "compiled.js");
      const apis = [
        compiler.mock.google.root
          .get({ search: /test.+/ })
          .setResponse({ status: 200, data: ["test worked"] }),
        moctokit.rest.repos
          .getBranch({ owner: /kie.*/, repo: "build-chain" })
          .setResponse({ status: 200, data: { name: "main" } }),
        moctokit.rest.repos
          .update({ name: /newName\d/ })
          .setResponse([{ status: 200, data: { full_name: "new-name" } }]),
      ];
      await compiler.compile(path.join(process.cwd(), src), dest, apis, minify);
      const result = spawnSync("node", [dest]);
      expect(result.stdout.toString()).toMatch(
        "200 [ 'test worked' ]\n200 { name: 'main' }\n200 { full_name: 'new-name' }"
      );
      rmSync(dest);
    }
  );
});
