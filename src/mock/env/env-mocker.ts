import { Mocker } from "../mocker";
import { DEFAULT_ENV, Env, EnvInterface, ENV_PREFIX } from "./env-mocker.types";

export class EnvMocker implements Mocker, EnvInterface {
    private envFromConfig: Env | undefined;
    private currentEnv: Env;

    constructor(env: Env | undefined) {
        this.envFromConfig = env;
        this.currentEnv = env ? env : DEFAULT_ENV;
    }

    update(key: string, value: string): void {
        process.env[`${ENV_PREFIX}${key.toUpperCase()}`] = value;
        this.currentEnv[key] = value;
    }

    delete(key: string): string {
        let value = "";
        if (Object.keys(this.currentEnv).includes(key)) {
            value = this.currentEnv[key];
            delete process.env[`${ENV_PREFIX}${key.toUpperCase()}`];
            delete this.currentEnv[key]
        }
        return value;
    }

    get(key: string): string {
        const value = this.currentEnv[key] ?? process.env[key];
        return value ?? "";
    }

    getAll(): Env {
        return this.currentEnv;
    }

    async setup(): Promise<void> {
        if (!this.envFromConfig) {return;}
        this.currentEnv = this.envFromConfig;
        Object.keys(this.currentEnv).forEach(key => {
            this.update(key, this.currentEnv[key]);
        });    
    }

    async teardown(): Promise<void> {
        if (!this.envFromConfig) {return;}
        const env = this.envFromConfig;
        Object.keys(env).forEach(key => {
            this.delete(key);
        });
        this.currentEnv = DEFAULT_ENV;
    }
}