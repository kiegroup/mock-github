import { EnvMocker } from "../../../src/github/env/env-mocker"
import { DEFAULT_ENV, Env } from "../../../src/github/env/env-mocker.types";

describe("setup", () => {
    test("empty env", async () => {
        const envMocker = new EnvMocker(undefined);
        const spy = jest.spyOn(envMocker, "update");
        await envMocker.setup();
        expect(envMocker.getAll()).toStrictEqual(DEFAULT_ENV);
        expect(spy).toHaveBeenCalledTimes(0);
        await envMocker.teardown();
    });

    test("env defined", async () => {
        const customEnv: Env = {
            test1: "test1",
            test2: "test2"
        }
        const envMocker = new EnvMocker(customEnv);
        const spy = jest.spyOn(envMocker, "update");
        await envMocker.setup();
        expect(envMocker.getAll()).toStrictEqual(customEnv);
        expect(spy).toHaveBeenCalledTimes(2);
        expect(process.env["GITHUB_TEST1"]).toBe(customEnv["test1"]);
        expect(process.env["GITHUB_TEST2"]).toBe(customEnv["test2"]);
        await envMocker.teardown();
    });
});

describe("teardown", () => {
    test("empty env", async () => {
        const envMocker = new EnvMocker(undefined);
        const spy = jest.spyOn(envMocker, "delete");
        await envMocker.setup();
        await envMocker.teardown();
        expect(envMocker.getAll()).toStrictEqual(DEFAULT_ENV);
        expect(spy).toHaveBeenCalledTimes(0);
    });

    test("env defined", async () => {
        const customEnv: Env = {
            test1: "test1",
            test2: "test2"
        }
        const envMocker = new EnvMocker(customEnv);
        const spy = jest.spyOn(envMocker, "delete");
        await envMocker.setup();
        await envMocker.teardown();
        expect(envMocker.getAll()).toStrictEqual(DEFAULT_ENV);
        expect(spy).toHaveBeenCalledTimes(2);
        expect(Object.keys(process.env).includes("GITHUB_TEST1")).toBe(false);
        expect(Object.keys(process.env).includes("GITHUB_TEST2")).toBe(false);
    });
});

describe("update env", () => {
    test("no existing env", async () => {
        const envMocker = new EnvMocker(undefined);
        await envMocker.setup();
        expect(Object.keys(process.env).includes("GITHUB_TEST1")).toBe(false);
        envMocker.update("test1", "test1");
        expect(process.env["GITHUB_TEST1"]).toBe("test1");
        await envMocker.teardown();
    });

    test("add to existing env", async () => {
        const envMocker = new EnvMocker({test1: "test1"});
        await envMocker.setup();
        expect(process.env["GITHUB_TEST1"]).toBe("test1");
        envMocker.update("test2", "test2");
        expect(process.env["GITHUB_TEST2"]).toBe("test2");
        expect(process.env["GITHUB_TEST1"]).toBe("test1");
        await envMocker.teardown();
    });

    test("update existing env", async () => {
        const envMocker = new EnvMocker({test1: "test1"});
        await envMocker.setup();
        expect(process.env["GITHUB_TEST1"]).toBe("test1");
        envMocker.update("test1", "test2");
        expect(process.env["GITHUB_TEST1"]).toBe("test2");
        await envMocker.teardown();
    });
});

describe("delete env", () => {
    test("key exists", async () => {
        const envMocker = new EnvMocker({test1: "test1"});
        await envMocker.setup();
        expect(process.env["GITHUB_TEST1"]).toBe("test1");
        expect(envMocker.delete("test1")).toBe("test1");
        expect(Object.keys(process.env).includes("GITHUB_TEST1")).toBe(false);
        await envMocker.teardown();
    });

    test("key does not exist", async () => {
        const envMocker = new EnvMocker({test1: "test1"});
        await envMocker.setup();
        expect(process.env["GITHUB_TEST1"]).toBe("test1");
        expect(envMocker.delete("test2")).toBe("");
        expect(process.env["GITHUB_TEST1"]).toBe("test1");
        await envMocker.teardown();
    });
});

describe("get specific env", () => {
    test.each([
        ["no prefix key", ["test1", "test2"]],
        ["with prefix key", ["GITHUB_TEST1", "GITHUB_TEST2"]]
    ])("env does exist: %", async (title: string, keys: string[]) => {
        const envMocker = new EnvMocker({test1: "test1"});
        await envMocker.setup();
        envMocker.update("test2", "test2");
        expect(envMocker.get(keys[0])).toBe("test1");
        expect(envMocker.get(keys[1])).toBe("test2");
        await envMocker.teardown();
    })

    test("env does not exist", async () => {
        const envMocker = new EnvMocker({test1: "test1"});
        await envMocker.setup();
        envMocker.update("test2", "test2");
        expect(envMocker.get("test3")).toBe("");
        await envMocker.teardown();
    });
})