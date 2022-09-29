import { ArchiveArtifacts, ArchiveArtifactsInterface } from "./archive/archive-mocker.types"
import { Input, InputInterface } from "./input/input-mocker.types"

export type Action = {
    input?: Input,
    archive?: ArchiveArtifacts
}

export interface ActionInterface {
    get input(): InputInterface;
    get archiver(): ArchiveArtifactsInterface;
}