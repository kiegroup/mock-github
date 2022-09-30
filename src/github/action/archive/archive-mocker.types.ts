export type ArchiveArtifacts = {
  artifactStore: string;
  serverPort: string;
};
export interface ArchiveArtifactsMockerMethods {
  getArtifactStore(): string;
  getRunId(): string;
}
