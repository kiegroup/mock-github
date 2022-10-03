import { spawnSync } from "child_process";
import { DEFAULT_JOB, Job, Workflow } from "./act.types";

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
   * @param cwd
   * @param event
   */
  async list(event?: string, cwd: string = this.cwd): Promise<Workflow[]> {
    const response = this.act(cwd, ...(event ? [event, "-l"] : ["-l"]));

    const output = response
      .split("\n")
      .slice(1, -1) // remove first (title columns) and last column
      .filter((element) => element !== "" && element.split("  ").length > 1) // remove empty strings and warnings
      .map((element) => {
        const splitElement = element.split("  ").filter((val) => val !== ""); // remove emoty strings
        return {
          jobId: splitElement[1].trim(),
          jobName: splitElement[2].trim(),
          workflowName: splitElement[3].trim(),
          workflowFile: splitElement[4].trim(),
          events: splitElement[5].trim(),
        };
      });
    return output;
  }

  async runJob(jobId: string, cwd: string = this.cwd): Promise<Job[]> {
    return this.run(["-j", jobId], cwd);
  }

  async runEvent(event: string, cwd: string = this.cwd): Promise<Job[]> {
    return this.run([event], cwd);
  }

  // wrapper around the act cli command
  private act(cwd: string, ...args: string[]) {
    const response = spawnSync("act", ["-W", cwd, ...args]);
    if (response.status === null) {
      throw new Error(response.error?.message);
    }
    return response.stdout.toString();
  }

  private async run(cmd: string[], cwd: string): Promise<Job[]> {
    const secrets = this.generateSecrets();
    const response = this.act(cwd, ...cmd, ...secrets);
    return this.extractRunOutput(response);
  }

  /**
   * Parse the output produced by running act successfully. Produces an object
   * describing whether the job was successful or not and what was the output of the job
   * @param output
   * @returns
   */
  private extractRunOutput(output: string): Job[] {
    // line that has a star followed by Run and job name
    const runMatcher = /^\s*(\[.+\])\s*\u2B50\s*Run\s*(.*)/;
    // line that has a green tick mark
    const successMatcher = /^\s*(\[.+\])\s*\u2705\s*Success.*/;
    // line that has a red cross
    const failureMatcher = /^\s*(\[.+\])\s*\u274C\s*Failure.*/;
    // lines that have no emoji
    const runOutputMatcher = /^\s*(\[.+\])\s*\|\s*(.*)/;
    let result: Job[] = [];
    let job: Record<string, Job> = {};
    output.split("\n").forEach((line) => {
      const treatedLine = line.trim();
      const runMatcherResult = runMatcher.exec(treatedLine);
      const successMatcherResult = successMatcher.exec(treatedLine);
      const failureMatcherResult = failureMatcher.exec(treatedLine);
      const runOutputMatcherResult = runOutputMatcher.exec(treatedLine);
      if (runMatcherResult !== null) {
        job[runMatcherResult[1]] = { ...DEFAULT_JOB };
        job[runMatcherResult[1]].name = runMatcherResult[2];
      } else if (successMatcherResult !== null) {
        job[successMatcherResult[1]].status = 0;
        /**
         * Create a deep copy of job and then push cause apparently
         * even completely resassigning job variable and then updating
         * still affects the previous pushes
         */
        result.push({
          ...job[successMatcherResult[1]],
          name: job[successMatcherResult[1]].name.trim(),
          output: job[successMatcherResult[1]].output.trim(),
        });
        job[successMatcherResult[1]] = { ...DEFAULT_JOB };
      } else if (failureMatcherResult !== null) {
        job[failureMatcherResult[1]].status = 1;
        result.push({
          ...job[failureMatcherResult[1]],
          name: job[failureMatcherResult[1]].name.trim(),
          output: job[failureMatcherResult[1]].output.trim(),
        });
        job[failureMatcherResult[1]] = { ...DEFAULT_JOB };
      } else if (runOutputMatcherResult !== null) {
        job[runOutputMatcherResult[1]].output +=
          runOutputMatcherResult[2] + "\n";
      }
    });
    return result;
  }

  /**
   * Appends "-s" to each secret to produce a string of arguments to be passed to act
   * @returns
   */
  private generateSecrets(): string[] {
    return Object.keys(this.storedSecrets).reduce((arr: string[], key) => {
      arr.push("-s", `${key}=${this.storedSecrets[key]}`);
      return arr;
    }, []);
  }
}
