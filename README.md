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
- [Action Compiler](#action-compiler)
- [Github](#github)
  - [config.json](#config)
  - [Repositories](#repositories)
  - [Github env vars](#github_env)
  - [Action inputs](#action_input)
  - [Action event](#action_event)
  - [Action artifact archiver](#action_artifact_archiver)

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

To be implemented

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

To be implemented

### Typescript Support

Since the endpoint mockers are generated dynamically based on the api schema, typescript won't be able to enfource datatype checks like it does for [Moctokit](#moctokit)

## Act

Provides an interface for the [nektos/act](https://github.com/nektos/act/) tool to execute it programmatically.

NOTE: You need to have the `act` cli preinstalled. You can install it from [here](https://github.com/nektos/act/#installation)

If you are using `act` programmatically in your test cases and are running your test cases as part of your CI pipeline, you can setup `act` using the [shubhbapna/setup-act](https://github.com/marketplace/actions/setup-nektos-act) action

### Current working directory

You can set the current working directory. This directory is from where `act` will read the workflow files from. Setting a current working directory is equivalent to calling `act` with `-W /path/to/cwd` option for any subsequent call. By default, the root of the current project is used as the current working directory.

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

`list` returns an array of objects as defined below

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

## Action Compiler

The idea is that given a compiled (bundled and/or minified) github custom action entrypoint file (.js only), we can inject it with mocked apis such that when the action is run it used the data from the mocked api instead of making the actual api call.

This can be used to run integration tests on actions without having to worry about github api rate limits as well as the fluid nature of the existing github repositories (for eg: a PR that was open 2 days ago might not be anymore)

You can pass a custom API schema and inject those mocked api in your compiled action. You can also inject apis mocked by moctokit.

Simple usage

```typescript
const moctokit = new Moctokit();
const compiler = new ActionCompiler({
  google: {
    // name for the API
    baseUrl: "https://google.com",
    endpoints: {
      root: {
        // scope to group similar endpoints together
        get: {
          // endpoint name
          path: "/",
          method: "get",
          parameters: {
            path: [],
            query: ["search"],
            body: [],
          },
        },
      },
    },
  },
});

await compiler.compile(
  "path to compiled action",
  "path to where you want to produce the injected action",
  [
    compiler.mock.google.root
      .get({ search: /test.+/ })
      .setResponse({ status: 200, data: ["test worked"] }),
    moctokit.rest.repos
      .getBranch({ owner: /kie.*/, repo: "build-chain" })
      .setResponse({ status: 200, data: { name: "main" } }),
  ],
  true
); // whether you want the compiled file to be minified or not
```

You can also you this to conveniently mock APIs other than github.

Example

```typescript
const compiler = new ActionCompiler({
  google: {
    // name for the API
    baseUrl: "https://google.com",
    endpoints: {
      root: {
        // scope to group similar endpoints together
        get: {
          // endpoint name
          path: "/{param}",
          method: "get",
          parameters: {
            path: ["param"],
            query: ["search"],
            body: [],
          },
        },
      },
    },
  },
});

// the mock attribute exposes the endpoints defined in the schema just like moctokit's rest attribute
compiler.mock.google.root
  .get({ search: /test.+/, param: "search" })
  .reply({ status: 200, data: ["test worked"] });
```

## Github<a name="github"></a>

### config.json<a name="config"></a>

To create your environment all you need specify its state in a `.json` file and provide the path to the config file to the `MockGithub` instance. The structure of the config file is

```json
{
  "create": true,
  "repositories": {
    "name_of_repository": {
      "pushedBranches": ["branch1", "branch2"],
      "localBranches": ["branch3"],
      "currentBranch": "branch2",
      "history": "array of history objects to create a git history",
      "files": "array of file object containing src and dest fields"
    }
  },
  "env": {
    "var_name": "value"
  },
  "action": {
    "event": "",
    "input": {
      "var_name": "value"
    },
    "archive": ""
  }
}
```

The sections below will explain each part of the config in detail

### Repositories<a name="repositories"></a>

A local repository is configured and created by adding a key to the `repositories` section of the config file. The key is the name of the repository. The value for that key is an object with the following fields:  
`pushedBranches`  
&emsp;type: string[]  
&emsp;required: no  
&emsp;description: contains the names of branches that are already pushed and available on the local "origin". "main" branch is always pushed  
`localBranches`  
&emsp;type: string[]  
&emsp;required: no  
&emsp;description: contains the names of branches that haven't been pushed to the local "origin"  
`currentBranch`  
&emsp;type: string  
&emsp;required: no  
&emsp;description: set the current branch to whatever you want. By default it is "main"  
`owner`  
&emsp;type: string  
&emsp;required: no  
&emsp;description: sets the owner of the repository  
`forkedFrom`  
&emsp;type: string  
&emsp;required: no  
&emsp;description: name of the repository it was forked from  
`files`  
&emsp;type: {src: string, dest: string}[]  
&emsp;required: no  
&emsp;description: Array of objects where each object has 2 fields `src` and `dest`. The `src` field is used to specify a directory or file that is to be copied into the repository. The `dest` field is used to specify the destination inside the repository. &emsp;So for example:

```json
{
  "src": "/home/somedir",
  "dest": "/foo/bar"
}
```

&emsp;This configuration will copy all files from `/home/somedir` directory into the repository `foo/bar` directory (it will create any required directories inside the repository). Similarly,

```json
{
  "src": "/home/test.txt",
  "dest": "foo/test-renamed.txt"
}
```

&emsp;This configuration will copy the file from `/home/test.txt` into the repository `foo/` directory (it will create any required directories inside the repository) and rename it to `test-renamed.txt`  
`history`  
&emsp;type: array of `Push`, `Merge`, `Unknown` objects (see below)  
&emsp;required: no  
&emsp;description: create a git history for the repository using the actions mentioned in this array chronologically starting from array at index 0.  
&emsp;&emsp;`Push`  
&emsp;&emsp;&emsp;`branch`  
&emsp;&emsp;&emsp;&emsp;type: string  
&emsp;&emsp;&emsp;&emsp;required: yes  
&emsp;&emsp;&emsp;&emsp;desciption: the branch on which this push should occur  
&emsp;&emsp;&emsp;`files`  
&emsp;&emsp;&emsp;&emsp;type: {src: string, dest: string}[]  
&emsp;&emsp;&emsp;&emsp;required: no  
&emsp;&emsp;&emsp;&emsp;desciption: Same as `files` field above  
&emsp;&emsp;&emsp;`commitMessage`  
&emsp;&emsp;&emsp;&emsp;type: string  
&emsp;&emsp;&emsp;&emsp;required: no  
&emsp;&emsp;&emsp;&emsp;desciption: custom commit message for pushing  
&emsp;&emsp;`Merge`  
&emsp;&emsp;&emsp;`head`  
&emsp;&emsp;&emsp;&emsp;type: string  
&emsp;&emsp;&emsp;&emsp;required: yes  
&emsp;&emsp;&emsp;&emsp;desciption: source branch of the merge  
&emsp;&emsp;&emsp;`base`  
&emsp;&emsp;&emsp;&emsp;type: string  
&emsp;&emsp;&emsp;&emsp;required: yes  
&emsp;&emsp;&emsp;&emsp;desciption: base branch of the merge  
&emsp;&emsp;&emsp;`commitMessage`  
&emsp;&emsp;&emsp;&emsp;type: string  
&emsp;&emsp;&emsp;&emsp;required: no  
&emsp;&emsp;&emsp;&emsp;desciption: custom commit message for the merge

There multiple utility functions available: `getState(repositoryName: string)`, `getForkedFrom(repositoryName: string)`, `isFork(repositoryName: string)`, `getPath(repositoryName: string)`, `getOwner(repositoryName: string)`, `getBranchState(repositoryName: string)`, `getFileSystemState(repositoryName: string)`

### Github env vars<a name="github_env"></a>

Used to set github environment variable. Adds the prefix `GITHUB_` to all the variables. Specify it in the `env` section of the config file. For eg:

```json
{
  "hello": "world"
}
```

This would set the the env var `GITHUB_HELLO` with value `world`.
There also utility methods available which lets you dynamically set and update these variables. The utility methods are: `update(key), delete(key), get(key), getAll()`

### Action inputs<a name="action_input"></a>

Used to set input for github actions. Specify it in the `action.input` section of the config file. For eg:

```json
{
  "hello": "world"
}
```

This would set the input `hello` with value `world`.
There also utility methods available which lets you dynamically set and update these variables. The utility methods are: `update(key), delete(key), get(key), getAll()`

### Action event<a name="action_event"></a>

Used to create the `event.json` payload file used by github actions to get information on the event. Also sets the corresponding `GITHUB_EVENT_PATH` env var to point to the json file. Configure it in the `action.event` section of the config file with the following fields:  
`payload`  
&emsp;type: Object {string: any}  
&emsp;required: yes  
&emsp;description: contains the actual payload  
`filename`  
&emsp;type: string
&emsp;required: no  
&emsp;description: name of the file in which the payload is store. By default it is `event.json`

### Action artifact archiver<a name="action_artifact_archiver"></a>

Starts an express server which used by the artifact archiver github action to upload and download artifacts. Constructed from: https://github.com/nektos/act/blob/master/pkg/artifacts/server.go. Configure it in the `action.archive` section of the config file with the following fields:  
`serverPort`  
&emsp;type: string  
&emsp;required: yes  
&emsp;description: the port to be used by the local express server  
`artifactStore`  
&emsp;type: string  
&emsp;required: yes  
&emsp;description: the directory in which the artifacts are to be uploaded to and downloaded from
