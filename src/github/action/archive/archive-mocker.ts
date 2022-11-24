import { existsSync, rm } from "fs-extra";
import path from "path";
import { Mocker } from "@mg/github/mocker";
import { ArchiveArtifactsMockerMethods } from "@mg/github/action/archive/archive-mocker.types";
import { ArchiveServer } from "@mg/github/action/archive/archive-server";

export class ArchiveArtifactsMocker
  implements Mocker, ArchiveArtifactsMockerMethods
{
  private archiveServer?: ArchiveServer;
  private store: string;
  private runId: string;
  private port?: string;
  private isStoreCreated: boolean;

  constructor(store: string, port?: string) {
    this.store = path.join(store, "store");
    this.port = port;
    this.runId = Math.floor(Math.random() * 100).toString();
    this.isStoreCreated = !existsSync(this.store);

    if (this.port) {
      this.archiveServer = new ArchiveServer(this.store, this.port);
    }
  }

  async setup(): Promise<void> {
    if (this.archiveServer) {
      await this.archiveServer.start();

      // need the trailing slash cause @actions/artifact does not add one
      process.env["ACTIONS_RUNTIME_URL"] = `http://localhost:${this.port}/`;
      process.env["GITHUB_RUN_ID"] = this.runId;
      process.env["ACTIONS_RUNTIME_TOKEN"] = "token";
    }
  }

  async teardown(): Promise<void> {
    if (this.archiveServer) {
      await Promise.all([
        this.archiveServer.stop(),
        ...(this.isStoreCreated
          ? [rm(this.store, { recursive: true, force: true })]
          : []),
      ]);
      delete process.env["ACTIONS_RUNTIME_URL"];
      delete process.env["GITHUB_RUN_ID"];
      delete process.env["ACTIONS_RUNTIME_TOKEN"];
    }
  }

  getArtifactStore(): string {
    return this.store;
  }

  getRunId(): string {
    return this.runId;
  }
}
