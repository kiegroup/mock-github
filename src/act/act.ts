import { spawnSync } from "child_process";
import { DEFAULT_JOB, RunOpts, Step, Workflow } from "./act.types";

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

  async runJob(jobId: string, opts?: RunOpts): Promise<Step[]> {
    return this.run(["-j", jobId], opts);
  }

  async runEvent(event: string, opts?: RunOpts): Promise<Step[]> {
    return this.run([event], opts);
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
    const secrets = this.generateSecrets();
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
    return this.extractRunOutput(response);
  }

  /**
   * Parse the output produced by running act successfully. Produces an object
   * describing whether the job was successful or not and what was the output of the job
   * @param output
   * @returns
   */
  private extractRunOutput(output: string): Step[] {
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
  private generateSecrets(): string[] {
    return Object.keys(this.storedSecrets).reduce((arr: string[], key) => {
      arr.push("-s", `${key}=${this.storedSecrets[key]}`);
      return arr;
    }, []);
  }
}
