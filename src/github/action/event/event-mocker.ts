import { Mocker } from "../../mocker";
import { DEFAULT_PAYLOAD, Event, EventInterface, EventPayload } from "./event-mocker.types";
import path from "path";
import { writeFile, rm } from 'node:fs/promises';
import { existsSync } from "fs";

export class EventMocker implements Mocker, EventInterface {
    private event: Event | undefined;
    private payload: EventPayload;
    private setupPath: string;

    constructor(event: Event | undefined, setupPath: string) {
        this.event = event;
        this.payload = DEFAULT_PAYLOAD;
        this.setupPath = setupPath;
    }

    async setup(): Promise<void> {
        if (!this.event) return;
        const filename = path.join(this.setupPath, this.event.filename ?? "event.json");
        this.payload = this.event.payload;
        await writeFile(filename, JSON.stringify(this.payload));
        process.env["GITHUB_EVENT_PATH"] = filename;
    }

    async teardown(): Promise<void> {
        if (!this.event) return;
        const filename = path.join(this.setupPath, this.event.filename ?? "event.json");
        if (existsSync(filename)) {
            await rm(filename);
            delete process.env["GITHUB_EVENT_PATH"];
        }
        this.payload = DEFAULT_PAYLOAD;
    }

    getPayload(): EventPayload {
        return this.payload;
    }
}