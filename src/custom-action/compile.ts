import {OutputOptions, rollup, RollupOptions, RollupOutput} from "rollup";
import typescript from '@rollup/plugin-typescript';

export class Compile {
    private src: string;
    private dest: string;

    constructor(src: string, dest: string) {
        this.src = src;
        this.dest = dest;
    }

    async compile() {
        const inputOptions: RollupOptions = {
            input: this.src,
            plugins: [typescript({module: "esnext"})]
        }

        const bundle = await rollup(inputOptions);

        await bundle.write({

            file: this.dest,
            format: "commonjs"
        });
    }
}

const compiler = new Compile(`test-mock/test.ts`, `test-mock/test-compiled.js`);
compiler.compile();
