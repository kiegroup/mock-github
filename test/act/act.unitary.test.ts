import path from "path";
import { Act } from "../../src";
import { extractRunOutput, filterWorkflows, generateSecrets, treatSteps } from "../../src/act/act-helper";
import { RunOptsSteps } from "../../src/act/act.types";

jest.mock("../../src/act/act-helper")

const treatStepsMock = treatSteps as jest.Mock
const generateSecretsMock = generateSecrets as jest.Mock
const extractRunOutputMock = extractRunOutput as jest.Mock
const filterWorkflowsMock = filterWorkflows as jest.Mock

const resources = path.resolve(process.cwd(), "test", "resources");

describe("runJob with RunOptsSteps", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  test.each([
    [{ skip: ["pass"] }],
    [{ mock: [{ name: "pass", run: "whatever the run" }] }],
  ])(`skip step. stepOpts %p`, async (stepOpts: RunOptsSteps) => {
    // Arrange
    const act = new Act(resources);
    const job = {
      jobId: "push1",
      jobName: "push1",
      workflowName: "Act Push Test 1",
      workflowFile: "push1.yml",
      events: ["push"],
    }
    generateSecretsMock.mockReturnValueOnce([])
    filterWorkflowsMock.mockReturnValueOnce(false).mockReturnValueOnce(true).mockReturnValueOnce(false)

    // Act
    await act.runJob("push1", { steps: stepOpts });

    // Assert
    expect(treatStepsMock).toHaveBeenCalledTimes(1);
    expect(treatStepsMock).toHaveBeenCalledWith([job], path.join(process.cwd(), "test", "resources", ".github", "workflows"), stepOpts);
    expect(extractRunOutputMock).toHaveBeenCalledTimes(1);
  });
})

describe("runEvent with RunOptsSteps", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  test(`no jobs`, async () => {
    // Arrange
    const act = new Act();

    // Act
    await expect(act.runEvent("push", { steps: { skip: ["pass"] } })).rejects.toThrowError();

    // Assert
    expect(treatStepsMock).toHaveBeenCalledTimes(0);
    expect(extractRunOutputMock).toHaveBeenCalledTimes(0);
  });

  test.each([
    [{ skip: ["pass"] }],
    [{ mock: [{ name: "pass", run: "whatever the run" }] }],
  ])(`skip step. stepOpts %p`, async (stepOpts: RunOptsSteps) => {
    // Arrange
    const act = new Act(resources);
    const job = {
      jobId: "push1",
      jobName: "push1",
      workflowName: "Act Push Test 1",
      workflowFile: "push1.yml",
      events: ["push"],
    }
    generateSecretsMock.mockReturnValueOnce([])
    filterWorkflowsMock.mockReturnValueOnce(false).mockReturnValueOnce(true).mockReturnValueOnce(false)

    // Act
    await act.runEvent("push", { steps: stepOpts });

    // Assert
    expect(treatStepsMock).toHaveBeenCalledTimes(1);
    expect(treatStepsMock).toHaveBeenCalledWith([job], path.join(process.cwd(), "test", "resources", ".github", "workflows"), stepOpts);
    expect(extractRunOutputMock).toHaveBeenCalledTimes(1);
  });
})