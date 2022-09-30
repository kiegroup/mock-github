import {
  ArchiveArtifacts,
  ArchiveArtifactsMockerMethods,
} from "./archive/archive-mocker.types";
import { Input, InputMockerMethods } from "./input/input-mocker.types";

export type Action = {
  input?: Input;
  archive?: ArchiveArtifacts;
};

export interface ActionMockerMethods {
  get input(): InputMockerMethods;
  get archiver(): ArchiveArtifactsMockerMethods;
}
