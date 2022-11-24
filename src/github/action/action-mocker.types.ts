import {
  ArchiveArtifacts,
  ArchiveArtifactsMockerMethods,
} from "@mg/github/action/archive/archive-mocker.types";
import { Input, InputMockerMethods } from "@mg/github/action/input/input-mocker.types";

export type Action = {
  input?: Input;
  archive?: ArchiveArtifacts;
};

export interface ActionMockerMethods {
  get input(): InputMockerMethods;
  get archiver(): ArchiveArtifactsMockerMethods;
}
