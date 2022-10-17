export type Workflow = {
  jobId: string;
  jobName: string;
  workflowName: string;
  workflowFile: string;
  events: string;
};

export type Step = {
  name: string;
  status: number;
  output: string;
};

export const DEFAULT_JOB: Step = {
  name: "",
  status: -1,
  output: "",
};

export type RunOpts = {
  cwd?: string;
  artifactServer?: {
    path: string;
    port: string;
  };
};
