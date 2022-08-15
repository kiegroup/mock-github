import { ArchiveArtifacts, ArchiveArtifactsInterface } from "./archive/archive-mocker.types"
import { Event, EventInterface } from "./event/event-mocker.types"
import { Input, InputInterface } from "./input/input-mocker.types"

export type Action = {
    event?: Event,
    input?: Input,
    archive?: ArchiveArtifacts
}

export interface ActionInterface {
    get event(): EventInterface;
    get input(): InputInterface;
    get archiver(): ArchiveArtifactsInterface;
}