# Mock Github

Provides a bunch of tools to configure and create a local github environment to test your custom github actions in without having to clutter your github with test repositories, actions or hitting github api rate limits.

Using this library along with [kiegroup/act-js](https://github.com/kiegroup/act-js) can provide you with all the tools you need to test your workflow files as well as your customs locally.

## Table of Content

- [Moctokit](#moctokit)
  - [Initialization options](#initialization-options)
  - [Mock an api](#mock-an-api)
    - [Mock the entire endpoint](#mock-the-entire-endpoint)
    - [Mock an endpoint for specific parameter(s) and header(s)](#mock-an-endpoint-for-specific-parameters-and-headers)
  - [Replying with a response](#replying-with-a-response)
    - [Reply once](#reply-once)
    - [Reply N times](#reply-n-times)
    - [Chaining responses](#chaining-responses)
  - [Typescript Support](#typescript-support)
- [MockGithub](#mockgithub)
  - [Requirements](#requirements)
  - [Repositories](#repositories)
    - [Utility functions](#utility-functions)
  - [Env](#env)
    - [Utility functions](#utility-functions-1)
  - [Action](#action)
    - [Input](#input)
      - [Utility functions](#utility-functions-2)
    - [Archive artifacts](#archive-artifacts)
      - [Utility functions](#utility-functions-3)
- [Example with act-js](#example-with-act-js)

## Moctokit

> [!WARNING]  
> Moctokit is currently not compatible with Node 18's native `fetch` implementation since it uses `nock` under the hood See [nock/nock#2397](https://github.com/nock/nock/issues/2397)

Allows you to mock [octokit](https://octokit.github.io/rest.js/v19) using an octokit like interface.

Example

```typescript
const moctokit = new Moctokit();
mock.rest.repos
  .get({
    owner: "kie",
    repo: /build.*/,
  })
  .reply({ status: 200, data: { full_name: "it worked" } });
```

### Initialization options

By default a moctokit instance uses `https://api.github.com` as the base url

```typescript
const moctokit = new Moctokit(); // mocks github apis for https://api.github.com
```

You can also specify a base url when a creating a new instance. Useful when you have an enterprise github api url.

```typescript
const moctokit = new Moctokit("http://localhost:8000"); // mocks github apis for http://localhost:8000
```

You can enable other APIs to pass through if there is no exact match  

```typescript
const moctokit = new Moctokit(undefined, true); // mocks github apis for https://api.github.com and lets unmatched apis to pass through
```

### Mock an api

You can mock all the github api exactly how [@octokit/rest](https://octokit.github.io/rest.js/v19) library is used to make an actual call to the corresponding api.

#### Mock the entire endpoint

You can mock an entire endpoint by simply passing no arguments.

```typescript
const moctokit = new Moctokit();
/**
 * This translates to mocking all possible values of path, query and body paramters mentioned here: https://docs.github.com/en/rest/projects/projects#create-a-repository-project
 */
moctokit.rest.projects
  .createForRepo()
  .reply({ status: 200, data: { owner_url: "whatever url" } });
```

#### Mock an endpoint for specific parameter(s) and header(s)

You can mock an endpoint for certain paramters. So only if the call to the api has parameters which match the values you defined it will be get the mocked response.

```typescript
const moctokit = new Moctokit();
/**
 * Mocks this api - https://docs.github.com/en/rest/projects/projects#create-a-repository-project
 * It translates to mocking all api calls to https://api.github.com/repos/{owner}/{repo}/projects where owner is "kie",
 * repo starts with a "d", has the value "project" for the "name" field in the body of the request and accepts any value
 * for the "body" field of the request body
 */
moctokit.rest.projects
  .createForRepo({ owner: "kie", repo: /d.+/, name: "project" })
  .reply({ status: 200, data: { owner_url: "whatever url" } });

/**
 * Mocks the same api as above but only for requests which match the same parameters as above as well contains the following 2 request headers:
 * 1. "custom-header" with value as "value"
 * 2. "test-header" with value as any number 
 */
moctokit.rest.projects
  .createForRepo({ owner: "kie", repo: /d.+/, name: "project" })
  .matchReqHeaders({"custom-header": "value", "test-header": /\d+/})
  .reply({ status: 200, data: { owner_url: "whatever url" } });
```

### Replying with a response

The endpoint isn't actually mocked with calling `reply` with response you want send back if your application makes an api call to that particular endpoint.

#### Reply once

You can reply with a response exactly once i.e. the 1st api call to the mocked endpoint will respond with whatever response you set and the 2nd api call won't be mocked.

```typescript
const moctokit = new Moctokit();
/**
 * Responds with status 200 and data {owner_url: "whatever url"} exactly once
 */
moctokit.rest.projects
  .createForRepo()
  .reply({ status: 200, data: { owner_url: "whatever url" }, headers: {"some-header": "value"} });
```

#### Reply N times

You can repeat the same response n times i.e. n consecutive calls to the mocked api will get the same response back

```typescript
const moctokit = new Moctokit();
/**
 * Responds with status 200 and data {owner_url: "whatever url"} for 5 consecutive calls to the same api
 */
moctokit.rest.projects
  .createForRepo()
  .reply({ status: 200, data: { owner_url: "whatever url" }, repeat: 5 });
```

#### Setting response and replying later

You can set an array of responses but actually mock the api later on. Responses are sent in order of their position in the array.

```typescript
const moctokit = new Moctokit();
/**
 * Add just 1 response to an array of responses but don't actually mock the endpoint
 */
const mockedCreateForRepo = moctokit.rest.projects.createForRepo()
                                                  .setResponse({
                                                    status: 200,
                                                    data: {owner_url: "whatever url"}, repeat: 5
                                                  });

/**
 * Adds all of these responses after the above response in the array. Again doesn't actually mock the api
 */
mockedCreateForRepo.setResponse([
  {status: 201, data: {owner_url: "something"}, headers: {"some-header": "value"}},
  {status: 400, data: {owner_url: "something else"}, repeat: 2}
  {status: 404, data: {owner_url: "something completely difference"}}
]);

/**
 * Now the api is actually being mocked.
 * For the 1st, 2nd, 3rd, 4th and 5th api call the response status would be 200
 * For the 6th api call the response status would be 201
 * For the 7th and 8th api call the response status would be 400
 * For the 9th api call the response status would be 404
 */
mockedCreateForRepo.reply();
```

#### Chaining responses

You can chain multiple responses together

```typescript
const moctokit = new Moctokit();
/**
 * For the 1st, 2nd, 3rd, 4th and 5th api call the response status would be 200
 * For the 6th api call the response status would be 201
 * For the 7th and 8th api call the response status would be 400
 * For the 9th api call the response status would be 404
 */
moctokit.rest.projects
  .createForRepo()
  .reply({
    status: 200,
    data: { owner_url: "whatever url" },
    repeat: 5,
  })
  .setResponse([
    { status: 201, data: { owner_url: "something" } },
    { status: 400, data: { owner_url: "something else" }, repeat: 2 },
  ])
  .reply()
  .reply({
    status: 404,
    data: { owner_url: "something completely difference" },
  });
```

### Typescript Support

When using with typescript, for each endpoint typescript will tell you what paramters are allowed and what status and corresponding data you can set as response. This way you will be forced to pass paramters that are actually accepted either as path, query or body params by the api and set responses according to the api's response schema.

Note no key in either params or response data will be a required key. All keys are optional. This merely checks that no key which is not defined in the openapi specification is passed in either params or response data for the given endpoint. It also enforces datatypes for any key defined in the openapi specification for the given endpoint.


## MockGithub

This class is used to create local repositories and mimic github environment, action inputs and artifact archiving. To configure this local "github", it reads a configuration object by passing the path of a json file or directly to the constructor arguments.

Create everything in a directory you want

```typescript
const github = new MockGithub(
  "path to config json file",
  "path to a setup directory"
);

// actually creates all the repositories, set the env and start the artifact server if needed
await github.setup();

// Whatever actions you want to perform

// delete repositories, clean up env and stop artifact server
await github.teardown();
```

Use the default setup directory - `process.cwd()`

```typescript
const github = new MockGithub("path to config json file");

// actually creates all the repositories, set the env and start the artifact server if needed
await github.setup();

// Whatever actions you want to perform

// delete repositories, clean up env and stop artifact server
await github.teardown();
```

The configuration object/file has 3 sections and all of them are optional. So you can configure an combination of repositories, env and actions.

```typescript
{
  repo: //more details below
  env: //more details below
  action: //more details below
}
```

### Requirements

To use MockGithub you need to have `git` version 2.28 or up installed

### Repositories

Local repositories can be configured and created by adding a key to the `repo` section of the configuration. The key is the name of the repository. The value for that key is an object with fields described in the table below. All the repositories are created in `${setupPath}/repo` where `setupPath` is the path which is passed to `MockGithub`

| Attribute Name | Type        | Required | Default                              | Description                                                                                                                                                                |
| :------------- | :---------- | :------- | :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pushedBranches | `string[]`  | No       |                                      | Contains the names of branches that are already pushed and available on "origin". "main" branch is always pushed                                                           |
| localBranches  | `string[]`  | No       |                                      | Contains the names of branches that haven't been pushed to "origin"                                                                                                        |
| currentBranch  | `string`    | No       | main                                 | Sets the current branch to whatever you want                                                                                                                               |
| owner          | `string`    | No       | `$LOGNAME` if defined otherwise `""` | sets the owner of the repository                                                                                                                                           |
| forkedFrom     | `string`    | No       |                                      | Sets the name of the repository it was forked from. This implies that the repository was a fork                                                                            |
| files          | `Files[]`   | No       |                                      | Create all the files for the repository. Refer to [Files](#files) table                                                                                                    |
| history        | `History[]` | No       |                                      | Create a git history for the repository using the actions mentioned in this array chronologically starting from array at index 0. Refer to [History](#history) table below |

#### Files

| Attribute Name | Type     | Required | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :------------- | :------- | :------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| src            | `string` | Yes      |         | Specifies a path to a directory or a file that is to be copied into the repository. If the path is to a directory, then it will copy all the files and subdirectories in it                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| dest           | `string` | Yes      |         | Specifies the location inside the repository, where the files from `src` need to be copied into. If `dest` was `"foo/bar/blah"` then this equivalent to `"path_to_repository/foo/bar/blah"`. Further more, it will create any directory in its path if it does not exist in the repository. If `src` is a path to a directory, for example `"/home/somedir"`, and say if `dest` is `"/foo/bar/blah"` then all of the contents of `somedir` will be copied into the `blah` directory inside the repository. If `src` is a path to a file, for example `"/home/test.txt"`, and say if `dest` is `"/foo/bar/renamed.txt"` then `test.txt` will be copied into the `bar` directory inside the repository and renamed as `renamed.txt` |
| filter           | `string[]` | No      |         | Specify glob patterns to exclude certains files/directories when copying from `src` to `dest` |

#### History

Each `History` object is either a `Push` object or a `Merge` object. See below

Push
| Attribute Name | Type | Required | Default | Description |
| :------------- | :--- | :------- | :------ | :---------- |
| action | `"push"` | Yes | | Identifies this history object as a "push" object |
| branch | `string` | Yes | | The branch on which the push has to be performed |
| files | `Files[]` | No | `dummy-file-${number}` | Create all the files that you want to push. Refer to [Files](#files) table. If not defined, it will push a dummy file |
| commitMessage | `string` | No | `adding files to mimic history at index ${number}` | Define a custom commit message for the push |

Merge
| Attribute Name | Type | Required | Default | Description |
| :------------- | :--- | :------- | :------ | :---------- |
| action | `"merge"` | Yes | | Identifies this history object as a "merge" object |
| head | `string` | Yes | | The branch you want to merge from
| base | `string` | Yes | | The branch you want to merge into
| commitMessage | `string` | No | `Merging ${head} to ${base}` | Define a custom commit message for the merge |

#### Example

```typescript
const github = new MockGithub({
  repo: {
    repoA: {
      pushedBranches: ["branch1", "branch2"],
      localBranches: ["branch3"],
      currentBranch: "branch2",
      files: [
        {
          src: "/home/workflows",
          dest: ".github/workflows",
        },
        {
          src: "/home/code",
          dest: "src/",
        },
      ],
      history: [
        {
          action: "push",
          branch: "branch1",
          files: [
            {
              src: "/home/test",
              dest: "test/",
            },
          ],
        },
        {
          action: "merge",
          head: "branch1",
          base: "branch2",
        },
      ],
    },
    repoB: {},
  },
});

/**
 * Will create 2 repositories: repoA and repoB
 * repoA will have 2 pushed branches, 1 local branch. After the setup the current branch will be branch2
 * repoA file structure on main branch before history is executed:
 *     .github
 *          workflows
 *            files from "/home/workflows"
 *      src
 *          files from "/home/code"
 * repoA will have a push on branch1 and will merge branch1 into branch2
 * repoA file structure on branch2 branch after history is executed:
 *      .github
 *          workflows
 *            files from "/home/workflows"
 *      src
 *          files from "/home/code"
 *      test
 *          files from "/home/test"
 * repoB is a bare bones repository with just the main branch
 */
await github.setup();
```

#### Utility functions

There multiple utility functions available to extract information about the state of the repositories and perform some action on them.

```typescript
const github = new MockGithub("path to config");

// Will throw an error since setup() wasn't called
github.repo.getState("repoA");

await github.setup();

/**
 * Returns an object with fields:
 *
 * name: string;
 * path?: string;
 * owner?: string;
 * forkedFrom?: string;
 * branches?: {  localBranches: string[], pushedBranches: string[], currentBranch: string };
 * files?: {  path: string, branch: string }[];
 */
const state = github.repo.getState("repoA");

/**
 * Returns the name of the repository if repoA was forked from a repo. if it wasn't then it returns undefined
 */
const fork = github.repo.getForkedFrom("repoA");

/**
 * Returns true if repoA was forked otherwise false
 */
const isFork = github.repo.isFork("repoA");

/**
 * Returns the location of the repository
 */
const path = github.repo.getPath("repoA");

/**
 * Returns owner of the repository
 */
const owner = github.repo.getOwner("repoA");

/**
 * Returns the current branch, local and pushed branches as an object
 * {  localBranches: string[], pushedBranches: string[], currentBranch: string }
 */
const branches = github.repo.getBranchState("repoA");

/**
 * Returns the location of all the files in the repository. A location comprises of the path of the file and the branch it is on
 * {  path: string, branch: string }[]
 */
const repoFs = await github.repo.getFileSystemState("repoA");

/**
 * Checkout the given branch in the given repo. Will throw an error if the repo or the branch does not exist
 */ 
await github.repo.checkout("repoA", "branchA");
```

### Env

Used to set github environment variable. Adds the prefix `GITHUB_` to all the variables. Specify it in the `env` section of the config.

```typescript
const github = new MockGithub({
  env: {
    hello: "world",
  },
});

// process.env.GITHUB_HELLO would return "world"
await github.setup();
```

#### Utility functions

There utility functions available to dynamically update these variables as well

```typescript
const github = new MockGithub({
  env: {
    hello: "world"
  }
});

// Will throw an error since setup() wasn't called
github.env.update("hello", "update");

await github.setup();

/**
 * Updates/Adds the variable
 *
 * First call to update will update the hello env var from before
 * process.env.GITHUB_HELLO will return "update"
 *
 * Second call to update will add a new variable foo
 * process.env.GITHUB_FOO will return "bar"
 */
github.env.update("hello", "update");
github.env.update("foo", "bar");

/**
 * Deletes the env variable and returns its value
 */
const delete = github.env.delete("hello");

/**
 * Gets the current value of the env variable
 */
const value = github.env.get("hello");

/**
 * Gets the value for all env variables
 */
const valueAll = github.env.get();
```

### Action

Comprises of 2 sections - input and archive

#### Input

Mimics how github actions are set. Adds the prefix `INPUT_` to all the variables.

```typescript
const github = new MockGithub({
  action: {
    input: {
      hello: "world",
    },
  },
});

// process.env.INPUT_HELLO would return "world"
await github.setup();
```

#### Utility functions

There utility functions available to dynamically update these variables as well

```typescript
const github = new MockGithub({
  action: {
    input: {
      hello: "world"
    }
  }
});

// Will throw an error since setup() wasn't called
github.action.input.update("hello", "update");

await github.setup();

/**
 * Updates/Adds the variable
 *
 * First call to update will update the hello env var from before
 * process.env.INPUT_HELLO will return "update"
 *
 * Second call to update will add a new variable foo
 * process.env.INPUT_FOO will return "bar"
 */
github.action.input.update("hello", "update");
github.action.input.update("foo", "bar");

/**
 * Deletes the env variable and returns its value
 */
const delete = github.action.input.delete("hello");

/**
 * Gets the current value of the env variable
 */
const value = github.action.input.get("hello");

/**
 * Gets the value for all env variables
 */
const valueAll = github.action.input.get();
```

### Archive artifacts

Starts an express server that mimics the server actually used by github action to archive artifacts. Constructed from [nektos/act](https://github.com/nektos/act/blob/master/pkg/artifacts/server.go). The artifacts are stored in `${setupPath}/store` where `setupPath` is the path passed to `MockGithub`

```typescript
const github = new MockGithub({
  action: {
    archive: {
      serverPort: "8000",
    },
  },
});

// starts the server
await github.setup();
```

| Attribute Name | Type     | Required | Default | Description                                                                                                                           |
| :------------- | :------- | :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| serverPort     | `string` | Yes      |         | The port of the server which will receive requests to upload/download artifacts. If no port is specified, then the server won't start |

#### Utility functions

There are utility functions that return the location of the artifact store and runner id being used.

```typescript
const github = new MockGithub({
  action: {
    archive: {
      serverPort: "8000",
    },
  },
});

// Will throw an error since setup() wasn't called
github.action.archiver.getArtifactStore();

// starts the server
await github.setup();

/**
 * Returns the path to the store
 */
const store = github.action.archiver.getArtifactStore();

/**
 * Returns the runner id being used
 */
const runId = github.action.archiver.getRunId();
```

## Example with act-js

You can use this library along with [act-js](https://github.com/kiegroup/act-js) to test your workflow files as well as your custom actions.
Here are some [examples](https://github.com/shubhbapna/mock-github-act-js-examples) on how to do so.

You can also take look at how the workflow files are being tested in the act-js repository - [ci-check.yaml](https://github.com/shubhbapna/act-js/blob/main/.github/workflows/ci-checks.yaml)
