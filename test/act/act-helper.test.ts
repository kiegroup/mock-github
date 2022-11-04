import path from "path";
import { filterWorkflows, generateSecrets, treatSteps } from "../../src/act/act-helper";
import { RunOptsSteps, Workflow } from "../../src/act/act.types";
import { GithubWorkflow } from "../../src/shared/domain/github-workflow.type";
import { loadYamlFile, saveYamlFile } from "../../src/shared/util/fs-util";

jest.mock("../../src/shared/util/fs-util")

const loadYamlFileMock = loadYamlFile as jest.Mock
const saveYamlFileMock = saveYamlFile as jest.Mock


describe("generateSecrets", () => {
    test("empty", () => {
        // Act
        const result = generateSecrets({})

        // Assert
        expect(result).toStrictEqual([])
    })

    test("key, value", () => {
        // Act
        const result = generateSecrets({ key: "value" })

        // Assert
        expect(result).toStrictEqual(["-s", "key=value"])
    })
})

describe("filterWorkflows", () => {
    const worflow: Workflow = {
        jobId: "jobId",
        jobName: "jobName",
        events: ["event1", "event2", "event3"],
        workflowFile: "workflowFile",
        workflowName: "workflowName",
    }

    test("filter empty", () => {
        // Act
        const result = filterWorkflows(worflow, {});

        // Assert
        expect(result).toBeTruthy();
    })

    test("filter one matching", () => {
        // Act
        const result = filterWorkflows(worflow, { jobId: worflow.jobId });

        // Assert
        expect(result).toBeTruthy();
    })

    test("filter one NOT matching", () => {
        // Act
        const result = filterWorkflows(worflow, { jobId: `${worflow.jobId}X` });

        // Assert
        expect(result).toBeFalsy();
    })

    test("filter events found", () => {
        // Act
        const result = filterWorkflows(worflow, { events: ["event1", "event2"] });

        // Assert
        expect(result).toBeTruthy();
    })

    test("filter events not all matching", () => {
        // Act
        const result = filterWorkflows(worflow, { events: ["event1", "event4"] });

        // Assert
        expect(result).toBeFalsy();
    })

    test("filter events all matching", () => {
        // Act
        const result = filterWorkflows(worflow, { ...worflow });

        // Assert
        expect(result).toBeTruthy();
    })

    test("filter match all except one", () => {
        // Act
        const result = filterWorkflows(worflow, { ...worflow, jobId: `${worflow.jobId}X` });

        // Assert
        expect(result).toBeFalsy();
    })
})

describe("treatSteps parametrized", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })


    test("empty jobs", () => {
        // Act
        treatSteps([], "folderx", {});

        // Assert
        expect(loadYamlFileMock).toHaveBeenCalledTimes(0)
        expect(saveYamlFileMock).toHaveBeenCalledTimes(0)
    })

    const expectedResult: (GithubWorkflow | undefined)[][] = [
        [undefined, undefined],
        [{
            on: "push",
            jobs: {
                w1jobId1: {
                    "runs-on": "ubuntu-latest",
                    steps: [{
                        name: "w1jobId1-step1",
                        if: "${{ false }}"
                    }, {
                        run: "w1jobId1-step2"
                    }]
                }, "w1jobId2": {
                    "runs-on": "ubuntu-latest",
                    steps: [{
                        name: "w1jobId2-step1"
                    }, {
                        run: "w1jobId2-step2",
                        if: "${{ false }}"
                    }]
                }
            }
        }, {
            on: "push",
            jobs: {
                w2jobId2: {
                    "runs-on": "ubuntu-latest",
                    steps: [{
                        name: "w2jobId2-step1"
                    }, {
                        run: "w2jobId2-step2",
                        if: "${{ false }}"
                    }]
                }
            }
        }],
        [{
            on: "push",
            jobs: {
                w1jobId1: {
                    "runs-on": "ubuntu-latest",
                    steps: [
                        {
                            name: "w1jobId1-step1",
                            run: "w1jobId1-step1-run",
                        },
                        {
                            run: "w1jobId1-step2",
                        },
                    ],
                },
                w1jobId2: {
                    "runs-on": "ubuntu-latest",
                    steps: [
                        {
                            name: "w1jobId2-step1",
                        },
                        {
                            name: "w1jobId2-step2",
                            run: "w1jobId2-step2-run",
                        },
                    ],
                },
            },
        }, {
            on: "push",
            jobs: {
                w2jobId2: {
                    "runs-on": "ubuntu-latest",
                    steps: [
                        {
                            name: "w2jobId2-step1",
                        },
                        {
                            name: "w2jobId2-step2",
                            run: "w2jobId2-step2-run",
                        },
                    ],
                },
            },
        }],
        [{
            on: "push",
            jobs: {
                w1jobId1: {
                    "runs-on": "ubuntu-latest",
                    steps: [
                        {
                            name: "w1jobId1-step1",
                            run: "w1jobId1-step1-run",
                            if: "${{ false }}"
                        },
                        {
                            run: "w1jobId1-step2",
                        },
                    ],
                },
                w1jobId2: {
                    "runs-on": "ubuntu-latest",
                    steps: [
                        {
                            name: "w1jobId2-step1",
                        },
                        {
                            name: "w1jobId2-step2",
                            run: "w1jobId2-step2-run",
                            if: "${{ false }}"
                        },
                    ],
                },
            },
        }, {
            on: "push",
            jobs: {
                w2jobId2: {
                    "runs-on": "ubuntu-latest",
                    steps: [
                        {
                            name: "w2jobId2-step1",
                        },
                        {
                            name: "w2jobId2-step2",
                            run: "w2jobId2-step2-run",
                            if: "${{ false }}"
                        },
                    ],
                },
            },
        }]
    ]

    test.each([
        ["no options", {}, ...expectedResult[0]],
        ["skip to treat", { skip: ["w1jobId1-step1", "w1jobId2-step2", "w2jobId2-step2"] } as RunOptsSteps, ...expectedResult[1]],
        ["mock to treat", { mock: [{ name: "w1jobId1-step1", run: "w1jobId1-step1-run" }, { name: "w1jobId2-step2", run: "w1jobId2-step2-run" }, { name: "w2jobId2-step2", run: "w2jobId2-step2-run" }] } as RunOptsSteps, ...expectedResult[2]],
        ["mock and skip to treat", { skip: ["w1jobId1-step1", "w1jobId2-step2", "w2jobId2-step2"], mock: [{ name: "w1jobId1-step1", run: "w1jobId1-step1-run" }, { name: "w1jobId2-step2", run: "w1jobId2-step2-run" }, { name: "w2jobId2-step2", run: "w2jobId2-step2-run" }] } as RunOptsSteps, ...expectedResult[3]]
    ])("multiple jobs: %p", (title: string, runOpts: RunOptsSteps, expectedWorkflow1: GithubWorkflow | undefined, expectedWorkflow2: GithubWorkflow | undefined) => {
        // Arrange
        const folder = "folderx";


        const workflows: Workflow[] = [
            {
                jobId: "jobId1",
                jobName: "jobName1",
                workflowName: "workflowName1",
                workflowFile: "workflowFile1",
                events: ["event1-1", "event1-2"]
            }, {
                jobId: "jobId2",
                jobName: "jobName2",
                workflowName: "workflowName2",
                workflowFile: "workflowFile2",
                events: ["event2-1", "event2-2"]
            }
        ]
        const githubWorkflow1: GithubWorkflow = {
            on: "push",
            jobs: {
                w1jobId1: {
                    "runs-on": "ubuntu-latest",
                    steps: [{
                        name: "w1jobId1-step1"
                    }, {
                        run: "w1jobId1-step2"
                    }]
                }, w1jobId2: {
                    "runs-on": "ubuntu-latest",
                    steps: [{
                        name: "w1jobId2-step1"
                    }, {
                        run: "w1jobId2-step2"
                    }]
                }
            }
        }
        const githubWorkflow2: GithubWorkflow = {
            on: "push",
            jobs: {
                w2jobId2: {
                    "runs-on": "ubuntu-latest",
                    steps: [{
                        name: "w2jobId2-step1"
                    }, {
                        run: "w2jobId2-step2"
                    }]
                }
            }
        }
        loadYamlFileMock.mockReturnValueOnce(githubWorkflow1)
        loadYamlFileMock.mockReturnValueOnce(githubWorkflow2)
        // Act
        treatSteps(workflows, folder, runOpts);

        // Assert
        expect(loadYamlFileMock).toHaveBeenCalledTimes(2)
        expect(loadYamlFileMock).toHaveBeenCalledWith(path.join(folder, workflows[0].workflowFile))
        expect(loadYamlFileMock).toHaveBeenCalledWith(path.join(folder, workflows[1].workflowFile))
        expect(saveYamlFileMock).toHaveBeenCalledTimes(2)
        expect(saveYamlFileMock).toHaveBeenCalledWith(path.join(folder, workflows[0].workflowFile), expectedWorkflow1 ?? githubWorkflow1)
        expect(saveYamlFileMock).toHaveBeenCalledWith(path.join(folder, workflows[1].workflowFile), expectedWorkflow2 ?? githubWorkflow2)
    })
})