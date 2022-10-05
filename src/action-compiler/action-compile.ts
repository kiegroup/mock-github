import { API, CompilerMockMethod } from "./action-compiler.types";
import { appendFileSync, copyFileSync, existsSync, readFileSync } from "fs";
import path from "path";
import { rollup } from "rollup";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import { rm, writeFile } from "fs/promises";
import { CompilerRequestMocker } from "./request/request-mocker";
import { ResponseMocker } from "../endpoint-mocker/response/abstract-response-mocker";
import Ajv from "ajv";
import { APISchema } from "../schema/action-compiler/api-schema";

export class ActionCompiler {
  private apiSchema: API;
  private _mock: CompilerMockMethod;
  private setupPath: string;

  constructor(apiSchema: string | API) {
    this.apiSchema = this.validateAPISchema(apiSchema);
    this._mock = this.apiSchemaToMethod();
    this.setupPath = path.join(__dirname, "mocker");
  }

  async compile(
    src: string,
    dest: string,
    apis: ResponseMocker<any, any>[],
    minify: boolean = true
  ) {
    let extension = "js";

    if (!existsSync(path.join(this.setupPath, "mocker.js"))) {
      extension = "ts";
    }

    const tempFile = `${new Date().toISOString()}.${extension}`;
    const tempFilePath = path.join(this.setupPath, tempFile);
    const mockerFilePath = path.join(this.setupPath, `mocker.${extension}`);

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

  /**
   * Returns the request mocker functions generated from api schema
   */
  get mock() {
    return this._mock;
  }

  /**
   * For each endpoint for each api it generates a request mocker function just like moctokit
   * @returns
   */
  private apiSchemaToMethod() {
    let methods: CompilerMockMethod = {};
    for (const apiName in this.apiSchema) {
      if (!methods[apiName]) {
        methods[apiName] = {};
      }
      for (const scope in this.apiSchema[apiName]["endpoints"]) {
        if (!methods[apiName][scope]) {
          methods[apiName][scope] = {};
        }
        for (const methodName in this.apiSchema[apiName]["endpoints"][scope]) {
          methods[apiName][scope][methodName] = new CompilerRequestMocker(
            this.apiSchema[apiName]["baseUrl"],
            this.apiSchema[apiName]["endpoints"][scope][methodName]
          ).request;
        }
      }
    }
    return methods;
  }

  private validateAPISchema(apiSchema: string | API) {
    const rawJSON =
      typeof apiSchema === "string"
        ? JSON.parse(readFileSync(apiSchema, "utf8"))
        : apiSchema;
    const ajv = new Ajv({ allowUnionTypes: true });
    const validate = ajv.compile(APISchema);
    if (validate(rawJSON)) {
      return rawJSON;
    } else {
      throw new Error(JSON.stringify(validate.errors));
    }
  }
}
