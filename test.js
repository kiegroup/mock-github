console.log("test");
'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.compile = void 0;
const tslib_1 = require("tslib");
const activated_endpoint_1 = require("../mock/api/activated-endpoint");
const fs_1 = require("fs");
const path_1 = tslib_1.__importDefault(require("path"));
const rollup_1 = require("rollup");
const plugin_typescript_1 = tslib_1.__importDefault(require("@rollup/plugin-typescript"));
async function compile(src, apis, minify = true) {
    // create temp file (copy of current file)
    const tempFile = `${new Date().toISOString()}.ts`;
    const tempFilePath = path_1.default.join(__dirname, tempFile);
    (0, fs_1.copyFileSync)(__filename, tempFilePath);
    const execute = `\nexecute(${JSON.stringify(apis)});`;
    (0, fs_1.appendFileSync)(tempFilePath, execute);
    // compile the copy
    const bundle = await (0, rollup_1.rollup)({
        input: tempFilePath,
        plugins: [
            (0, plugin_typescript_1.default)({
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
    let originalData = (0, fs_1.readFileSync)(src, "utf8") + "\n";
    const { output } = await bundle.generate({ format: "cjs" });
    for (const chunkOrAsset of output) {
        if (chunkOrAsset.type === "chunk") {
            originalData += chunkOrAsset.code;
        }
    }
    (0, fs_1.writeFileSync)(src, originalData);
    // concatenate the compiled code with given file
    //   const originalData = readFileSync(src, "utf8");
}
exports.compile = compile;
function execute(apis) {
    for (const api of apis) {
        for (const endpoint of api.endpoints) {
            const activatedEndpoint = new activated_endpoint_1.ActivatedEndpoint({
                ...endpoint,
                response: {},
            }, api.baseUrl);
            endpoint.response.forEach((res) => {
                activatedEndpoint.setResponse(res, res.repeat);
            });
        }
    }
}
execute([{ "baseUrl": "https://google.com", "endpoints": [{ "path": "/", "method": "get", "response": [{ "data": { "msg": "hello" }, "status": 200 }] }] }]);
