import path from "path";
import { Act, FileUtils, MockGithub } from "../../../src";

const projectRootFolder = path.resolve('./');

test("cover publish.yml flow", async () => {
    // Arrange
    const jobId = "publish";
    const mockGithub = new MockGithub({
        repo: {
            "PUBLISH_REPO_NAME": {
                files: FileUtils.listMockGithubFiles(projectRootFolder, "repo")
            },
        },
    });
    await mockGithub.setup();
    const act = new Act(mockGithub.repo.getPath("PUBLISH_REPO_NAME"));

    // Act
    const result = await act.runJob(jobId, {steps: {mock: [{name: "npm publish --access public", run: "echo 'publish step mocked'"}]}});

    // Assert
    expect(result).toMatchObject([
        { name: "Main actions/checkout@v2", status: 0, output: "" },
        { name: "Main actions/setup-node@v3", status: 0, output: expect.any(String) },
        { name: "Main npm install", status: 0, output: expect.any(String) },
        { name: "Main npm run build", status: 0, output: expect.any(String) },
        { name: "Main npm publish --access public", status: 0, output: 'publish step mocked' },
        { name: "Post actions/setup-node@v3", status: 0, output: "" },
    ])

    mockGithub.teardown();
})