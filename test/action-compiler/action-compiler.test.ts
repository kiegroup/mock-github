import { execSync, spawnSync } from "child_process";
import { rmSync } from "fs";
import path from "path";
import { promisify } from "util";
import { ActionCompiler } from "../../src/action-compiler/action-compile";
import { CompileMockAPIs } from "../../src/action-compiler/action-compile.types";

beforeAll(async () => {
  const exec = promisify(require("node:child_process").exec);
  await Promise.all([
    exec("npm run pre-compiler-test:minify"),
    exec("npm run pre-compiler-test:no-minify"),
  ]);
});

afterAll(async () => {
  execSync("npm run post-compiler-test")
})

test.each([
  ["minified", true, "dist-minify/index.js"],
  ["not minified", false, "dist-no-minify/index.js"],
])(
  "compile mocked action: %p",
  async (_title: string, minify: boolean, src: string) => {
    const compiler = new ActionCompiler();
    const dest = path.join(__dirname, "compiled.js");
    const apis: CompileMockAPIs[] = [
      {
        baseUrl: "https://google.com",
        endpoints: [
          {
            path: "/",
            method: "get",
            response: [
              {
                status: 200,
                data: ["test worked"],
              },
            ],
          },
        ],
      },
    ];
    await compiler.compile(path.join(process.cwd(), src), dest, apis, minify);
    const result = spawnSync("node", [dest]);
    expect(result.stdout.toString()).toMatch("200 [ 'test worked' ]");
    rmSync(dest);
  }
);
