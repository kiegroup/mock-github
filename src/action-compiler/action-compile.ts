import { CompileMockAPIs } from "./action-compile.types";
import { appendFileSync, copyFileSync, existsSync, readFileSync } from "fs";
import path from "path";
import { rollup } from "rollup";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import { rm, writeFile } from "fs/promises";

export class ActionCompiler {
  async compile(
    src: string,
    dest: string,
    apis: CompileMockAPIs[],
    minify: boolean = true
  ) {
    let extension = "js";

    if (!existsSync(path.join(__dirname, "mocker.js"))) {
      extension = "ts";
    }

    const tempFile = `${new Date().toISOString()}.${extension}`;
    const tempFilePath = path.join(__dirname, tempFile);
    const mockerFilePath = path.join(__dirname, `mocker.${extension}`);

    // create temp file (copy of current file)
    copyFileSync(mockerFilePath, tempFilePath);
    const execute = `\nmock(${JSON.stringify(apis)});`;
    appendFileSync(tempFilePath, execute);

    // compile the copy
    const bundle = await rollup({
      input: tempFilePath,
      onwarn: (warning) => {
        // Silence circular dependency warning for nock package
        if (
          warning.code === "CIRCULAR_DEPENDENCY" &&
          !warning.importer?.indexOf(path.normalize("node_modules/nock/lib/"))
        ) {
          return;
        }

        console.warn(`(!) ${warning.message}`);
      },
      plugins: [
        ...(extension === "ts"
          ? [
              typescript({
                compilerOptions: {
                  target: "esnext",
                  module: "esnext",
                  moduleResolution: "node",
                  baseUrl: process.cwd(),
                  esModuleInterop: true,
                  forceConsistentCasingInFileNames: true,
                  strict: true,
                  skipLibCheck: true,
                },
                tsconfig: false,
              }),
            ]
          : []),
        nodeResolve(),
        commonjs(),
        ...(minify ? [terser()] : []),
      ],
    });

    let originalData = readFileSync(src, "utf8");
    let compiledCode = "";
    const { output } = await bundle.generate({
      format: "cjs",
      exports: "auto",
    });
    for (const chunkOrAsset of output) {
      if (chunkOrAsset.type === "chunk") {
        compiledCode = chunkOrAsset.code;
      }
    }

    // concatenate the compiled code with given file and delete temp file
    await Promise.all([
      writeFile(dest, compiledCode + "\n" + originalData),
      rm(tempFilePath),
    ]);
  }
}
