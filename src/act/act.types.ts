export type Workflow = {
    jobId: string,
    jobName: string,
    workflowName: string,
    workflowFile: string,
    events: string
}

export type Job = {
    name: string,
    status: number,
    output: string,
}

export const DEFAULT_JOB: Job = {
    name: "",
    status: -1,
    output: ""
}