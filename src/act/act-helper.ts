import path from "path";
import { GithubWorkflow, GithubWorkflowStep } from "../shared/domain/github-workflow.type";
import { loadYamlFile, saveYamlFile } from "../shared/util/fs-util";
import { DEFAULT_JOB, RunOptsSteps, Step, Workflow, WorkflowFilter } from "./act.types";

/**
 * it filters the act workflows based on several optional filters
 * 
 * @param worflow the act workflow object
 * @param workflowFilter the filters
 * @returns whether the workflow matches the filter or not
 */
export const filterWorkflows = (worflow: Workflow, workflowFilter: WorkflowFilter): boolean => workflowFilter && Object.keys(workflowFilter).length ?
    (workflowFilter.events?.length ? workflowFilter.events.every(e => worflow.events.includes(e)) : true) &&
    (workflowFilter.jobId ? worflow.jobId === workflowFilter.jobId : true) &&
    (workflowFilter.jobName ? worflow.jobName === workflowFilter.jobName : true) &&
    (workflowFilter.workflowFile ? worflow.workflowFile === workflowFilter.workflowFile : true) &&
    (workflowFilter.workflowName ? worflow.workflowName === workflowFilter.workflowName : true)
    : true

/**
 * Parse the output produced by running act successfully. Produces an object
 * describing whether the job was successful or not and what was the output of the job
 * @param output
 * @returns
 */
export const extractRunOutput = (output: string): Step[] => {
    // line that has a star followed by Run and job name
    const runMatcher = /^\s*(\[.+\])\s*\u2B50\s*Run\s*(.*)/;
    // line that has a green tick mark
    const successMatcher = /^\s*(\[.+\])\s*\u2705\s*Success\s*-\s*(.*)/;
    // line that has a red cross
    const failureMatcher = /^\s*(\[.+\])\s*\u274C\s*Failure\s*-\s*(.*)/;
    // lines that have no emoji
    const runOutputMatcher = /^\s*(\[.+\])\s*\|\s*(.*)/;

    // keep track of steps for each job
    const matrix: Record<string, Record<string, Step>> = {};

    // keep track of the most recent output for a job
    const matrixOutput: Record<string, string> = {};

    const lines = output.split("\n").map((line) => line.trim());
    for (const line of lines) {
        const runMatcherResult = runMatcher.exec(line);
        const successMatcherResult = successMatcher.exec(line);
        const failureMatcherResult = failureMatcher.exec(line);
        const runOutputMatcherResult = runOutputMatcher.exec(line);

        // if the line indicates the start of a step
        if (runMatcherResult !== null) {
            // initialize bookkeeping variables
            if (!matrix[runMatcherResult[1]]) {
                matrix[runMatcherResult[1]] = {};
                matrixOutput[runMatcherResult[1]] = "";
            }

            // create a step object
            matrix[runMatcherResult[1]][runMatcherResult[2].trim()] = {
                ...DEFAULT_JOB,
                name: runMatcherResult[2].trim(),
            };
        }
        // if the line indicates that a step was successful
        else if (successMatcherResult !== null) {
            // store output in step
            matrix[successMatcherResult[1]][successMatcherResult[2].trim()] = {
                ...matrix[successMatcherResult[1]][successMatcherResult[2].trim()],
                status: 0,
                output: matrixOutput[successMatcherResult[1]].trim(),
            };

            // reset output
            matrixOutput[successMatcherResult[1]] = "";
        }
        // if the line indicates that a step failed
        else if (failureMatcherResult !== null) {
            // store output in step
            matrix[failureMatcherResult[1]][failureMatcherResult[2].trim()] = {
                ...matrix[failureMatcherResult[1]][failureMatcherResult[2].trim()],
                status: 1,
                output: matrixOutput[failureMatcherResult[1]].trim(),
            };

            // reset output
            matrixOutput[failureMatcherResult[1]] = "";
        }
        // if the line is an output line
        else if (runOutputMatcherResult !== null) {
            matrixOutput[runOutputMatcherResult[1]] +=
                runOutputMatcherResult[2] + "\n";
        }
    }

    let result: Step[] = [];
    Object.values(matrix).forEach((jobs) => {
        Object.values(jobs).forEach((step) => {
            result.push(step);
        });
    });
    return result;
}

/**
 * Appends "-s" to each secret to produce a string of arguments to be passed to act
 * @returns
 */
export const generateSecrets = (storedSecrets: Record<string, string>): string[] => Object.keys(storedSecrets)
    .reduce((arr: string[], key) => {
        arr.push("-s", `${key}=${storedSecrets[key]}`);
        return arr;
    }, []);

/**
 * it will skip or mock workflow steps
 * 
 * @param jobs the workflow jobs to check
 * @param stepsToSkip the step names to skip execution from
 * @param folder the filesystem folder path where the jobs should be in place
 */
export const treatSteps = (jobs: Workflow[], folder: string, opts: RunOptsSteps) => {
    jobs
        .map(e => path.join(folder, e.workflowFile))
        .forEach(workflowPath => {
            const workflowFileContent: GithubWorkflow = loadYamlFile(workflowPath) as GithubWorkflow;

            let skipSteps: GithubWorkflowStep[] = []
            if (opts.skip?.length) {
                skipSteps = findSteps(workflowFileContent, opts.skip)
                skipSteps.forEach(step => step.if = "${{ false }}")
            }
            if (opts.mock?.length) opts.mock.forEach(mock => findSteps(workflowFileContent, [mock.name]).forEach(step => {
                Object.keys(step).filter(key => key !== "if" || !skipSteps.includes(step)).forEach(key => delete step[key])
                step.name = mock.name
                step.run = mock.run
            }));

            saveYamlFile(workflowPath, workflowFileContent)
        })
}

/**
 * it find steps from workflow file matching with any element from stepsToFilter variable.
 * 
 * @param workflowFileContent the content from the workflow file
 * @param stepsToFilter the list of step names to filter from
 * @returns the steps matching with the filter
 */
const findSteps = (workflowFileContent: GithubWorkflow, stepsToFilter: string[]): GithubWorkflowStep[] =>
    Object.values(workflowFileContent.jobs ?? {})
        .filter(job => job.steps?.length)
        .reduce((acc: GithubWorkflowStep[], job) => {
            const newSteps = job.steps?.filter(step => stepsToFilter.find(stepToFilter => [step.name, step.run, step.uses].includes(stepToFilter)));
            acc.push(...(newSteps?.length ? newSteps : []))
            return acc;
        }, [])