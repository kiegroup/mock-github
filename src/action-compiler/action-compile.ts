import { ActivatedEndpoint } from "../mock/api/activated-endpoint";
import { CompileMockAPIs } from "./action-compile.types";
import {
  appendFileSync,
  copyFileSync,
  readFileSync,
  writeFileSync,
} from "fs";
import path from "path";
import {rollup} from "rollup";
import typescript from "@rollup/plugin-typescript";

export class ActionCompiler {
    constructor() {
        
    }
}

export async function compile(
  src: string,
  apis: CompileMockAPIs[],
  minify: boolean = true
) {
  // create temp file (copy of current file)
  const tempFile = `${new Date().toISOString()}.ts`;
  const tempFilePath = path.join(__dirname, tempFile);
  copyFileSync(__filename, tempFilePath);
  const execute = `\nexecute(${JSON.stringify(apis)});`;
  appendFileSync(tempFilePath, execute);

  // compile the copy
  const bundle = await rollup({
    input: tempFilePath,
    plugins: [
      typescript({
        compilerOptions: {
          target: "esnext",
          module: "commonjs",
          moduleResolution: "node",
          baseUrl: "./",
          esModuleInterop: true,
          forceConsistentCasingInFileNames: true,
          strict: true,
          skipLibCheck: true,
        },
        tsconfig: false
      }),
    ],
  });

  let originalData = readFileSync(src, "utf8") + "\n";
  const { output } = await bundle.generate({format: "cjs"});
  for (const chunkOrAsset of output) {
    if (chunkOrAsset.type === "chunk") {
        originalData += chunkOrAsset.code;
    }
  }
  writeFileSync(src, originalData);
  // concatenate the compiled code with given file
  //   const originalData = readFileSync(src, "utf8");
  
}

