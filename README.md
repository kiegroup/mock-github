# Mock Github

Provides a bunch of tools to configure and create a local github environment to test your custom github actions in without having to clutter your github with test repositories, actions or hitting github api rate limits.

## Table of Content

- [Moctokit](#moctokit)
  - [Specifying which base url to use](#specifying-which-base-url-to-use)
  - [Mock an api](#mock-an-api)
    - [Mock the entire endpoint](#mock-the-entire-endpoint)
    - [Mock an endpoint for specific parameter(s)](#mock-an-endpoint-for-specific-parameters)
  - [Replying with a response](#replying-with-a-response)
    - [Reply once](#reply-once)
    - [Reply N times](#reply-n-times)
    - [Chaining responses](#chaining-responses)
  - [Typescript Support](#typescript-support)
- [Mockapi](#mockapi)
  - [Defining a schema](#defining-a-schema)
  - [Mock an api](#mock-an-api-1)
    - [Mock the entire endpoint](#mock-the-entire-endpoint-1)
    - [Mock an endpoint for specific parameter(s)](#mock-an-endpoint-for-specific-parameters-1)
  - [Replying with a response](#replying-with-a-response-1)
    - [Reply once](#reply-once-1)
    - [Reply N times](#reply-n-times-1)
    - [Chaining responses](#chaining-responses-1)
  - [Typescript Support](#typescript-support-1)
- [Act](#act)
  - [Current working directory](#current-working-directory)
  - [Secrets](#secrets)
  - [List workflows](#list-workflows)
  - [Run a job](#run-a-job)
    - [Using job id](#using-job-id)
    - [Using event name](#using-event-name)
    - [Run result](#run-result)
- [Action Compiler](#action-compiler)
- [Github](#github)
  - [Repositories](#repositories)
    - [Utility functions](#utility-functions)
  - [Env](#env)
    - [Utility functions](#utility-functions-1)
  - [Action](#action)
    - [Input](#input)
      - [Utility functions](#utility-functions-2)
    - [Archive artifacts](#archive-artifacts)
      - [Utility functions](#utility-functions-3)

## Moctokit

Provides a simple interface to mock any github api endpoints. This interface is just like the one from [@octokit/rest](https://octokit.github.io/rest.js/v19).

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

### Specifying which base url to use

By default a moctokit instance uses `https://api.github.com` as the base url

```typescript
const moctokit = new Moctokit(); // mocks github apis for https://api.github.com
```

You can also specify a base url when a creating a new instance. Useful when you have an enterprise github api url.

```typescript
const moctokit = new Moctokit("http://localhost:8000"); // mocks github apis for http://localhost:8000
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

#### Mock an endpoint for specific parameter(s)

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
  .reply({ status: 200, data: { owner_url: "whatever url" } });
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

You can set an array of responses but actually mock the api later on. Responses are sent in order of their position in the array. This is extremely useful when using moctokit with [Action Compiler](#action-compiler)

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
  {status: 201, data: {owner_url: "something"}},
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

## Mockapi

Provides a simple interface to mock any api schema that you define.

### Defining a schema

You need a define an api schema for this class and it will automatically construct mockers for all the endpoints you define.

You can directly pass the schema during initialization

```typescript
const mockapi = new Mockapi({
  google: {
    baseUrl: "https://google.com",
    endpoints: {
      root: {
        get: {
          path: "/",
          method: "get",
          parameters: {
            path: [],
            query: ["logo"],
            body: [],
          },
        },
      },
    },
  },
});
```

Or you can pass a path to a JSON file containing the schema

```typescript
const mockapi = new Mockapi("/path/to/json");
```

Schema Description

```typescript
{
  [name_of_api: string]: {
    baseUrl: "the the base url for the api",
    // different routes for the base url that are available
    endpoints: {
      // You can group similar api's together. For example all api's related to repositories can be grouped together
      [scope: string]: {
        // name for the actual endpoint
        [endpoint_name: string]: {
          // path for the endpoint. You can define path parameters by putting them in between curly braces. Below is an example where "params" is a path paramter
          path: "/path/to/api/with/{params}/and/more",
          method: "get" | "post" | "put" | "patch" | "delete",
          paramters: {
            // any path parameters defined in the path need to be included in this array. Note that the name of paramter must match in the path
            path: ["params"],
            // you can defined any url queries
            query: ["query"],
            // you can define any request body fields here
            body: ["body"],
          }
        }
      }
    }
  },
  // you can define multiple APIs like above
}
```

### Mock an api

The api(s) from the schema can simple be mocked as `mock.[api_name].[scope_name].[method_name](parms)`

#### Mock the entire endpoint

You can mock an entire endpoint by simply passing no arguments.

```typescript
const mockapi = new Mockapi({
  google: {
    baseUrl: "https://google.com",
    endpoints: {
      root: {
        get: {
          path: "/{search}",
          method: "get",
          parameters: {
            path: ["search"],
            query: ["logo"],
            body: [],
          },
        },
      },
    },
  },
  {
    amazon: {
      baseUrl: "https://amazon.com",
      endpoints: {
        items: {
          updateItem: {
            path: "/update/{itemId}",
            method: "post",
            paramters: {
              path: ["itemId"],
              query: [],
              body: ["name", "description"]
            }
          }
        }
      }
    }
  }
});
/**
 * This translates to mocking all possible values of path, query and body paramters
 * mentioned in the schema for "https://google.com/{search}"
 */
mockapi.mock.google.root
  .get()
  .reply({ status: 200, data: { message: "found" } });

/**
 * This translates to mocking all possible values of path, query and body paramters
 * mentioned in the schema for "https://amazon.com/update/{itemId}"
 */
mockapi.mock.amazon.items
  .updateItem()
  .reply({ status: 201, data: { message: "posted" } });

// this will throw an error since there was no ibm api defined in the schema
mockapi.mock.ibm.root.get().reply({status: 201, data: { message: "posted" }})
```

#### Mock an endpoint for specific parameter(s)

You can mock an endpoint for certain paramters. So only if the call to the api has parameters which match the values you defined, it will be get the mocked response.

```typescript
const mockapi = new Mockapi({
  google: {
    baseUrl: "https://google.com",
    endpoints: {
      root: {
        get: {
          path: "/{search}",
          method: "get",
          parameters: {
            path: ["search"],
            query: ["logo"],
            body: [],
          },
        },
      },
    },
  },
  {
    amazon: {
      baseUrl: "https://amazon.com",
      endpoints: {
        items: {
          updateItem: {
            path: "/update/{itemId}",
            method: "post",
            paramters: {
              path: ["itemId"],
              query: [],
              body: ["name", "description"]
            }
          }
        }
      }
    }
  }
});
/**
 * This translates to mocking "https://google.com/football?logo='football.png'" and
 * "https://google.com/football?logo='football.jpeg'" only
 */
mockapi.mock.google.root
  .get({search: "football", logo: /football\.(png|jpeg)/})
  .reply({ status: 200, data: { message: "found" } });

/**
 * This translates to mocking an api call to "https://amazon.com/update/20" with a
 * request body where "name" is "book" and description starts with "This is book is"
 */
mockapi.mock.amazon.items
  .updateItem({itemId: 20, name: "book", description: /This is book is .+/})
  .reply({ status: 201, data: { message: "posted" } });
```

### Replying with a response

The endpoint isn't actually mocked with calling `reply` with response you want send back if your application makes an api call to that particular endpoint.

#### Reply once

You can reply with a response exactly once i.e. the 1st api call to the mocked endpoint will respond with whatever response you set and the 2nd api call won't be mocked.

```typescript
const mockapi = new Mockapi({
  google: {
    baseUrl: "https://google.com",
    endpoints: {
      root: {
        get: {
          path: "/{search}",
          method: "get",
          parameters: {
            path: ["search"],
            query: ["logo"],
            body: [],
          },
        },
      },
    },
  },
});

/**
 * Responds with status 200 and data { message: "message" } exactly once
 */
mockapi.mock.google.root
  .get()
  .reply({ status: 200, data: { message: "message" } });
```

#### Reply N times

You can repeat the same response n times i.e. n consecutive calls to the mocked api will get the same response back

```typescript
const mockapi = new Mockapi({
  google: {
    baseUrl: "https://google.com",
    endpoints: {
      root: {
        get: {
          path: "/{search}",
          method: "get",
          parameters: {
            path: ["search"],
            query: ["logo"],
            body: [],
          },
        },
      },
    },
  }
});

/**
 * Responds with status 200 and data { message: "message" } for exactly 5 consecutive api calls
 */
mockapi.mock.google.root
  .get()
  .reply({ status: 200, data: { message: "message" } }, repeat: 5);
```

#### Setting response and replying later

You can set an array of responses but actually mock the api later on. Responses are sent in order of their position in the array. This is extremely useful when using moctokit with [Action Compiler](#action-compiler)

```typescript
const mockapi = new Mockapi({
  google: {
    baseUrl: "https://google.com",
    endpoints: {
      root: {
        get: {
          path: "/{search}",
          method: "get",
          parameters: {
            path: ["search"],
            query: ["logo"],
            body: [],
          },
        },
      },
    },
  }
});

/**
 * Add just 1 response to an array of responses but don't actually mock the endpoint
 */
const mockedGoogle = mockapi.mock.google.root.get()
                                             .setResponse({
                                                status: 200,
                                                data: {message: "message"}, repeat: 5
                                              });

/**
 * Adds all of these responses after the above response in the array. Again doesn't actually mock the api
 */
mockedGoogle.setResponse([
  {status: 201, data: {message: "something"}},
  {status: 400, data: {message: "something else"}, repeat: 2}
  {status: 404, data: {message: "something completely difference"}}
]);

/**
 * Now the api is actually being mocked.
 * For the 1st, 2nd, 3rd, 4th and 5th api call the response status would be 200
 * For the 6th api call the response status would be 201
 * For the 7th and 8th api call the response status would be 400
 * For the 9th api call the response status would be 404
 */
mockedGoogle.reply();
```

#### Chaining responses

You can chain multiple responses together

```typescript
const mockapi = new Mockapi({
  google: {
    baseUrl: "https://google.com",
    endpoints: {
      root: {
        get: {
          path: "/{search}",
          method: "get",
          parameters: {
            path: ["search"],
            query: ["logo"],
            body: [],
          },
        },
      },
    },
  },
});

/**
 * For the 1st, 2nd, 3rd, 4th and 5th api call the response status would be 200
 * For the 6th api call the response status would be 201
 * For the 7th and 8th api call the response status would be 400
 * For the 9th api call the response status would be 404
 */
mockapi.mock.google.root
  .get()
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

Since the endpoint mockers are generated dynamically based on the api schema, typescript won't be able to enfource datatype checks like it does for [Moctokit](#moctokit)

## Act

Provides an interface for the [nektos/act](https://github.com/nektos/act/) tool to execute it programmatically.

NOTE: You need to have the `act` cli preinstalled. You can install it from [here](https://github.com/nektos/act/#installation)

If you are using `act` programmatically in your test cases and are running your test cases as part of your CI pipeline, you can setup `act` using the [shubhbapna/setup-act](https://github.com/marketplace/actions/setup-nektos-act) action

### Current working directory

You can set the current working directory. This directory is from where `act` will read the workflow files from. Setting a current working directory is equivalent to calling `act` with `-W /path/to/cwd` option in the `/path/to/cwd` directory for any subsequent call. By default, the root of the current project is used as the current working directory.

```typescript
// define it during construction
const act = new Act("path/to/directory/that/contains/workflowfile");

// use the default current working directory
act = new Act();

// Set the current working directory after initialization
act.setCwd("path/to/directory/that/contains/workflow");
```

### Secrets

You can define, delete and clear secrets that will be used by `act` when you execute a run.

```typescript
let act = new Act();

// setSecret returns back the object
act = act.setSecret("secret1", "value1");

// you can chain your setSecrets
act
  .setSecret("secret1", "value1")
  .setSecret("secret2", "value2")
  .setSecret("secret3", "value3");

// you can delete a secret
act.deleteSecret("secret1");

// you clear all the secrets that you had previously defined
act.clearSecrets();
```

### List workflows

You can list all the workflows in the current working directory.

```typescript
const act = new Act();

await act.list();
```

Or you can list workflows for a specific event in the current working directory.

```typescript
const act = new Act();

// lists all workflows which are triggered due to a pull request event
await act.list("pull_request");
```

`list` returns an array of `Workflow` objects as defined below

```typescript
[
  {
    jobId: "job id as defined in the workflow",
    jobName: "job name as defined in the workflow",
    workflowName: "name of the workflow",
    workflowFile: "the name of the workflow file",
    events: "event that triggers this workflow",
  },
];
```

### Run a job

When running a job (which ever way), you can optionally pass run options

```typescript
{
  cwd?: string, // overrides the global cwd and uses the one passed in options
  // activates the artifact server
  artifactServer?: {
    path: string; // where to store the uploaded artifacts
    port: string; // where to run the artifact server
  };
}
```

#### Using job id

You can execute a job using a job id. Equivalent of running `act -j job_id`.

It returns an array of `Step` outputs. Described [below](#run-result)

```typescript
const act = new Act();

let result = await act.runJob("job_id");

/**
 * This will pass your secrets to act
 * Equivalent to running: act -j job_id -s secret1=value1 -s secret2=value2
 */
result = await act
  .secret("secret1", "value1")
  .secret("secret2", "value2")
  .runJob("job_id");
```

#### Using event name

You can trigger a workflow using an event name. Equivalent of running `act event_name`.

It returns an array of `Job` outputs. Described [below](#run-result)

```typescript
const act = new Act();

let result = await act.runEvent("pull_request");

/**
 * This will pass your secrets to act
 * Equivalent to running: act pull_request -s secret1=value1 -s secret2=value2
 */
result = await act
  .secret("secret1", "value1")
  .secret("secret2", "value2")
  .runJob("pull_request");
```

#### Run result

Each run returns an array of `Step` objects that describes what was executed, what was the output and whether it failed or not. Schema:

```typescript
[
  {
    name: "the command/step name that was executed",
    output: "output of the command",
    // 0 implies it succeeded, 1 implies it failed and -1 implies something went wrong with the interface which should be reported to us
    status: 0 | 1 | -1,
  },
];
```

## Action Compiler

The idea is that given a compiled (bundled and/or minified) github custom action entrypoint file (.js only), we can inject it with mocked apis such that when the action is run it uses the data provided by the mocked api instead of making the actual api call.

This can be used to run integration tests on actions without having to worry about github api rate limits as well as the fluid nature of the existing github repositories (for eg: a PR that was open 2 days ago might not be anymore)

You can inject mocked APIs using [Mockapi](#mockapi) and [Moctokit](#moctokit). It is important that you pass an array of objects that is returned by the `setResponse` method of mockapi and moctokit objects i.e. DO NOT CALL `reply` and then pass the object

Usage

```typescript
const moctokit = new Moctokit();
const mockapi = new Mockapi();
const compiler = new ActionCompiler();

await compiler.compile(
  "path to compiled action",
  "path to where you want to produce the injected action",
  [
    mockapi.mock.google.root
      .get({ search: /test.+/ })
      .setResponse({ status: 200, data: ["test worked"] }),
    moctokit.rest.repos
      .getBranch({ owner: /kie.*/, repo: "build-chain" })
      .setResponse({ status: 200, data: { name: "main" } }),
  ],
  true // whether you want the compiled file to be minified or not
);
```

## Github

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

There multiple utility functions available to extract information about the state of the repositories.

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
