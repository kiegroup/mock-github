// Mock implementation of @actions/artifact for testing
import { copyFileSync, ensureDirSync, statSync } from "fs-extra";
import path from "path";

export class DefaultArtifactClient {
  async uploadArtifact(
    name: string,
    files: string[],
    rootDirectory: string,
    options?: { retentionDays?: number; compressionLevel?: number; skipArchive?: boolean }
  ): Promise<{ id?: number; size?: number; digest?: string }> {
    // Mock implementation that actually copies files to the artifact store
    // This simulates what the real artifact client would do with our mock server
    const runId = process.env["GITHUB_RUN_ID"];
    const artifactStore = process.env["ARTIFACT_STORE"];
    
    if (runId && artifactStore) {
      const targetDir = path.join(artifactStore, runId);
      ensureDirSync(targetDir);
      
      let totalSize = 0;
      for (const file of files) {
        const relativePath = path.relative(rootDirectory, file);
        const targetPath = path.join(targetDir, relativePath);
        ensureDirSync(path.dirname(targetPath));
        copyFileSync(file, targetPath);
        totalSize += statSync(file).size;
      }
      
      return {
        id: Math.floor(Math.random() * 1000000),
        size: totalSize,
      };
    }
    
    // Fallback if environment variables are not set
    return {
      id: Math.floor(Math.random() * 1000000),
      size: files.length * 100,
    };
  }

  async downloadArtifact(
    artifactId: number,
    options?: { path?: string; findBy?: { repositoryOwner: string; repositoryName: string; token: string } }
  ): Promise<{ downloadPath?: string; digestMismatch?: boolean }> {
    return {
      downloadPath: options?.path,
    };
  }
}

// Made with Bob
