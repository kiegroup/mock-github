export type ArchiveArtifacts = {
  serverPort: string;
};
export interface ArchiveArtifactsMockerMethods {
  getArtifactStore(): string;
  getRunId(): string;
}
