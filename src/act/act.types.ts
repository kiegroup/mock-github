export type Workflow = {
  jobId: string;
  jobName: string;
  workflowName: string;
  workflowFile: string;
  events: string[];
};

export type WorkflowFilter = {
  jobId?: string;
  jobName?: string;
  workflowName?: string;
  workflowFile?: string;
  events?: string[];
};

export type Step = {
  name: string;
  status: number;
  output: string;
};

export type MockStep = {
  name: string;
  run: string;
};

export const DEFAULT_JOB: Step = {
  name: "",
  status: -1,
  output: "",
};

export type RunOptsSteps = {
  skip?: string[];
  mock?: MockStep[];
}

export type RunOpts = {
  cwd?: string;
  artifactServer?: {
    path: string;
    port: string;
  };
  steps?: RunOptsSteps
};

export type ListOpts = {
  event?: string,
  workflowFilter?: WorkflowFilter,
  cwd?: string
}