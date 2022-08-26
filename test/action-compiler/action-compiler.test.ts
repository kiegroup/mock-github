import { spawnSync } from "child_process";
import { rmSync } from "fs";
import path from "path";
import { ActionCompiler } from "../../src";
import { CompileMockAPIs } from "../../src/action-compiler/action-compile.types";

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
    await compiler.compile(path.join(__dirname, src), dest, apis, minify);
    const result = spawnSync("node", [dest]);
    expect(result.stdout.toString()).toMatch("200 [ 'test worked' ]");
    rmSync(dest);
  }
);
