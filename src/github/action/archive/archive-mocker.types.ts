export type ArchiveArtifacts = {
    artifactStore: string,
    serverPort: string
}
export interface ArchiveArtifactsInterface {
    getArtifactStore(): string;
    getRunId(): string;
}