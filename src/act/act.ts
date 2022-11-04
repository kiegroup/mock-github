import { spawnSync } from "child_process";
import path from "path";
import { extractRunOutput, filterWorkflows, generateSecrets, treatSteps } from "./act-helper";
import { ListOpts, RunOpts, Step, Workflow, WorkflowFilter } from "./act.types";

export class Act {
  private storedSecrets: Record<string, string>;
  private cwd: string;
  constructor(cwd?: string) {
    // check if act exists
    try {
      this.act(__dirname, "--version");
      this.storedSecrets = {};
      this.cwd = cwd ?? process.cwd();
    } catch (err) {
      throw new Error(
        `It looks like act is not installed. Please install act and it's requirements: https://github.com/nektos/act#installation`
      );
    }
  }

  setCwd(cwd: string) {
    this.cwd = cwd;
    return this;
  }

  getCwd() {
    return this.cwd;
  }

  setSecret(key: string, val: string): Act {
    this.storedSecrets[key] = val;
    return this;
  }

  deleteSecret(key: string): Act {
    delete this.storedSecrets[key];
    return this;
  }

  clearSecrets(): Act {
    this.storedSecrets = {};
    return this;
  }

  /**
   * List available workflows.
   * If working directory is not specified then node's current working directory is used
   * You can also list workflows specific to an event by passing the event name
   * @param options
   */
  async list(options?: ListOpts): Promise<Workflow[]> {
    const response = this.act(options?.cwd ?? this.cwd, ...(options?.event ? [options.event, "-l"] : ["-l"]));
    const workflowList = response
      .split("\n")
      .slice(1, -1) // remove first (title columns) and last column
      .filter(element => element !== "" && element.split("  ").length > 1) // remove empty strings and warnings
      .map(element => {
        const splitElement = element.split("  ").filter((val) => val !== ""); // remove emoty strings
        return {
          jobId: splitElement[1].trim(),
          jobName: splitElement[2].trim(),
          workflowName: splitElement[3].trim(),
          workflowFile: splitElement[4].trim(),
          events: splitElement[5].trim().split(","),
        };
      });
    return options?.workflowFilter && Object.keys(options.workflowFilter).length ? workflowList.filter(e => filterWorkflows(e, options.workflowFilter ?? {})) : workflowList;
  }

  async runJob(jobId: string, opts?: RunOpts): Promise<Step[]> {
    await this.handleStepsBeforeRunningJobs({ jobId }, opts)
    return this.run(["-j", jobId], opts);
  }

  async runEvent(event: string, opts?: RunOpts): Promise<Step[]> {
    await this.handleStepsBeforeRunningJobs({ events: [event] }, opts)
    return this.run([event], opts);
  }

  private async handleStepsBeforeRunningJobs(workflowFilter: WorkflowFilter, opts?: RunOpts) {
    if (opts?.steps?.skip?.length || opts?.steps?.mock?.length) {
      const jobs = await this.list({ workflowFilter });
      if (!jobs?.length) {
        throw new Error(`There are no jobs for filter ${workflowFilter}.`)
      }
      treatSteps(jobs, path.join(this.cwd, ".github", "workflows"), opts.steps)
    }
  }

  // wrapper around the act cli command
  private act(cwd: string, ...args: string[]) {
    const response = spawnSync("act", ["-W", cwd, ...args], { cwd });
    if (
      response.status === null ||
      /Cannot connect to the Docker daemon at .+/.test(
        response.stderr?.toString()
      )
    ) {
      throw new Error(response.error?.message);
    }
    return response.stdout.toString();
  }

  private async run(cmd: string[], opts?: RunOpts): Promise<Step[]> {
    const secrets = generateSecrets(this.storedSecrets);
    const response = this.act(
      opts?.cwd ?? this.cwd,
      ...cmd,
      ...secrets,
      ...(opts?.artifactServer
        ? [
          "--artifact-server-path",
          opts?.artifactServer.path,
          "--artifact-server-port",
          opts?.artifactServer.port,
        ]
        : [])
    );
    return extractRunOutput(response);
  }
}
