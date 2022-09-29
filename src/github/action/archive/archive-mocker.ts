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

  constructor(store: string = __dirname, port: string = "8000") {
    this.archiveServer = new ArchiveServer(store, port);
    this.store = store;
    this.runId = Math.floor(Math.random() * 100).toString();
    this.port = port;
  }

  async setup(): Promise<void> {
    await this.archiveServer.start();
    process.env["ACTIONS_RUNTIME_URL"] = `http://localhost:${this.port}`;
    process.env["GITHUB_RUN_ID"] = this.runId;
  }

  async teardown(): Promise<void> {
    await this.archiveServer.stop();
    delete process.env["ACTIONS_RUNTIME_URL"];
    delete process.env["GITHUB_RUN_ID"];
  }

  getArtifactStore(): string {
    return this.store;
  }

  getRunId(): string {
    return this.runId;
  }
}
