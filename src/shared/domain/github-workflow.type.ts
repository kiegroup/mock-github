export type WebhookEvent = "push"

export type GithubWorkflowStep = {
    /**
     * A name for your step to display on GitHub.
     */
    name?: string
    /**
     * Selects an action to run as part of a step in your job. An action is a reusable unit of code. You can use an action defined in the same repository as the workflow, a public repository, or in a published Docker container image.
     */
    uses?: string
    /**
     * A map of the input parameters defined by the action. Each input parameter is a key/value pair. Input parameters are set as environment variables. The variable is prefixed with INPUT_ and converted to upper case.
     */
    with?: {
        [k: string]: unknown
    }
    /**
     * Sets environment variables for steps to use in the virtual environment. Public actions may specify expected environment variables in the README file. If you are setting a secret in an environment variable, you must set secrets using the secrets context.
     */
    env?: {
        [k: string]: unknown
    }
    /**
     * Identifies any steps that must complete successfully before this step will run. It can be a string or an array of strings. If a step fails, all steps that need it will also fail unless the steps use a conditional statement that causes the step to continue.
     */
    if?: string
    /**
     * Runs command line programs using the operating system's shell. If you do not provide a name, the step name will default to the run command. Commands run using non-login shells by default.
     */
    run?: string
    /**
     * The default directory that the action uses in a job's workspace.
     */
    "working-directory"?: string
    /**
     * Prevents a job from failing when a step fails. Set to true to allow a job to pass when this step fails.
     */
    "continue-on-error"?: boolean
    /**
     * The maximum number of minutes to let a workflow run before GitHub automatically cancels it.
     */
    "timeout-minutes"?: number
    [k: string]: unknown
}

export type GithubWorkflowJob = {
    /**
     * Each job must have an id to associate with the job. The key job_id is a string and its value is a map of the job's configuration data. You must replace <job_id> with a string that is unique to the jobs object. The <job_id> must start with a letter or _ and contain only alphanumeric characters, -, or _.
     */
    [k: string]: {
        /**
         * The name of the job displayed on GitHub.
         */
        name?: string
        /**
         * Identifies any jobs that must complete successfully before this job will run. It can be a string or array of strings. If a job fails, all jobs that need it will also fail unless the jobs use a conditional statement that causes the job to continue.
         */
        needs?: string | string[]
        /**
         * The type of virtual host machine to run the job on. Each job runs with a fresh instance of the virtual environment specified in by runs-on
         */
        "runs-on":
        | "ubuntu-latest"
        | "ubuntu-18.04"
        | "ubuntu-16.04"
        | "windows-latest"
        | "windows-2019"
        | "windows-2016"
        | "macOS-latest"
        | "macOS-10.14"
        /**
         * A job contains a sequence of tasks called steps. Steps can run commands, run setup tasks, or run an action in your repository, a public repository, or an action published in a Docker registry. Not all steps run actions, but all actions are run as a step. Each step runs in its own process in the virtual environment and has access to the workspace and filesystem. Because steps are run in their own process, changes to environment variables are not preserved between steps. GitHub provides built-in steps to set up and complete a job.
         */
        steps?: GithubWorkflowStep[]
        [k: string]: unknown
    }
}

export type GithubWorkflow = {
    /**
     * The name of your workflow. GitHub displays the names of your workflows on your repository's actions page. If you omit this field, GitHub sets the name to the workflow's filename.
     */
    name?: string
    /**
     * The name of the GitHub event that triggers the workflow
     */
    on:
    | WebhookEvent
    | WebhookEvent[]
    | {
        [k: string]: unknown
    }
    | {
        schedule?: {
            cron?: string
            [k: string]: unknown
        }[]
        [k: string]: unknown
    }
    /**
     * A workflow run is made up of one or more jobs. Jobs run in parallel by default. To run jobs sequentially, you can define dependencies on other jobs using the jobs.<job_id>.needs keyword.
     */
    jobs?: GithubWorkflowJob
    [k: string]: unknown
}
