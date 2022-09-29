import path from "path";
import { Mocker } from "../mocker";
import { Action, ActionInterface } from "./action-mocker.types";
import { ArchiveArtifactsMocker } from "./archive/archive-mocker";
import { ArchiveArtifactsInterface } from "./archive/archive-mocker.types";
import { EventMocker } from "./event/event-mocker";
import { EventInterface } from "./event/event-mocker.types";
import { InputMocker } from "./input/input-mocker";
import { InputInterface } from "./input/input-mocker.types";

export class ActionMocker implements Mocker, ActionInterface {
  private eventMocker: EventMocker;
  private inputMocker: InputMocker;
  private archiveArtifactsMocker: ArchiveArtifactsMocker;

  constructor(action: Action | undefined, setupPath: string) {
    this.eventMocker = new EventMocker(action?.event, setupPath);
    this.inputMocker = new InputMocker(action?.input);
    this.archiveArtifactsMocker = new ArchiveArtifactsMocker(
      path.join(setupPath, action?.archive?.artifactStore ?? ""),
      action?.archive?.serverPort,
    );
  }

  async setup(): Promise<void> {
    await Promise.all([
      this.eventMocker.setup(),
      this.inputMocker.setup(),
      this.archiveArtifactsMocker.setup(),
    ]);
  }

  async teardown(): Promise<void> {
    await Promise.all([
      this.eventMocker.teardown(),
      this.inputMocker.teardown(),
      this.archiveArtifactsMocker.teardown(),
    ]);
  }

  get event(): EventInterface {
    return {
      getPayload: this.eventMocker.getPayload,
    };
  }

  get input(): InputInterface {
    return {
      get: this.inputMocker.get,
      delete: this.inputMocker.delete,
      update: this.inputMocker.update,
      getAll: this.inputMocker.getAll,
    };
  }

  get archiver(): ArchiveArtifactsInterface {
    return {
      getArtifactStore: this.archiveArtifactsMocker.getArtifactStore,
      getRunId: this.archiveArtifactsMocker.getRunId,
    };
  }
}
