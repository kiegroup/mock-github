import path from "path";
import { Mocker } from "../mocker";
import { Action, ActionInterface } from "./action-mocker.types";
import { ArchiveArtifactsMocker } from "./archive/archive-mocker";
import { ArchiveArtifactsInterface } from "./archive/archive-mocker.types";
import { InputMocker } from "./input/input-mocker";
import { InputInterface } from "./input/input-mocker.types";

export class ActionMocker implements Mocker, ActionInterface {
  private inputMocker: InputMocker;
  private archiveArtifactsMocker: ArchiveArtifactsMocker;

  constructor(action: Action | undefined, setupPath: string) {
    this.inputMocker = new InputMocker(action?.input);
    this.archiveArtifactsMocker = new ArchiveArtifactsMocker(
      path.join(setupPath, action?.archive?.artifactStore ?? ""),
      action?.archive?.serverPort,
    );
  }

  async setup(): Promise<void> {
    await Promise.all([
      this.inputMocker.setup(),
      this.archiveArtifactsMocker.setup(),
    ]);
  }

  async teardown(): Promise<void> {
    await Promise.all([
      this.inputMocker.teardown(),
      this.archiveArtifactsMocker.teardown(),
    ]);
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
