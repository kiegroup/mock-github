import { Mocker } from "@mg/github/mocker";
import {
  Action,
  ActionMockerMethods,
} from "@mg/github/action/action-mocker.types";
import { ArchiveArtifactsMocker } from "@mg/github/action/archive/archive-mocker";
import { ArchiveArtifactsMockerMethods } from "@mg/github/action/archive/archive-mocker.types";
import { InputMocker } from "@mg/github/action/input/input-mocker";
import { InputMockerMethods } from "@mg/github/action/input/input-mocker.types";

export class ActionMocker implements Mocker, ActionMockerMethods {
  private inputMocker: InputMocker;
  private archiveArtifactsMocker: ArchiveArtifactsMocker;

  constructor(action: Action | undefined, setupPath: string) {
    this.inputMocker = new InputMocker(action?.input);
    this.archiveArtifactsMocker = new ArchiveArtifactsMocker(
      setupPath,
      action?.archive?.serverPort
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

  get input(): InputMockerMethods {
    return {
      get: this.inputMocker.get.bind(this.inputMocker),
      delete: this.inputMocker.delete.bind(this.inputMocker),
      update: this.inputMocker.update.bind(this.inputMocker),
    };
  }

  get archiver(): ArchiveArtifactsMockerMethods {
    return {
      getArtifactStore: this.archiveArtifactsMocker.getArtifactStore.bind(
        this.archiveArtifactsMocker
      ),
      getRunId: this.archiveArtifactsMocker.getRunId.bind(
        this.archiveArtifactsMocker
      ),
    };
  }
}
