import { existsSync, rm } from "fs-extra";
import path from "path";
import { Mocker } from "../../mocker";
import { ArchiveArtifactsInterface } from "./archive-mocker.types";
import { ArchiveServer } from "./archive-server";

export class ArchiveArtifactsMocker
  implements Mocker, ArchiveArtifactsInterface
{
  private archiveServer: ArchiveServer;
  private store: string;
  private runId: string;
  private port: string;
  private isStoreCreated: boolean;

  constructor(
    store: string = path.join(__dirname, "store"),
    port: string = "8000"
  ) {
    this.archiveServer = new ArchiveServer(store, port);
    this.store = store;
    this.runId = Math.floor(Math.random() * 100).toString();
    this.port = port;
    this.isStoreCreated = !existsSync(this.store);
  }

  async setup(): Promise<void> {
    await this.archiveServer.start();

    // need the trailing slash cause @actions/artifact does not add one
    process.env["ACTIONS_RUNTIME_URL"] = `http://localhost:${this.port}/`;
    process.env["GITHUB_RUN_ID"] = this.runId;
    process.env["ACTIONS_RUNTIME_TOKEN"] = "token";
  }

  async teardown(): Promise<void> {
    await Promise.all([
      this.archiveServer.stop(),
      ...(this.isStoreCreated ? [rm(this.store, { recursive: true })] : []),
    ]);
    delete process.env["ACTIONS_RUNTIME_URL"];
    delete process.env["GITHUB_RUN_ID"];
    delete process.env["ACTIONS_RUNTIME_TOKEN"];
  }

  getArtifactStore(): string {
    return this.store;
  }

  getRunId(): string {
    return this.runId;
  }
}
