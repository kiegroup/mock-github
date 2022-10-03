# mock-github (WIP)

A NPM library to configure and create a local github environment. Currently work in progress

## Table of Content

- [Use cases](#use_cases)
- [Moctokit](#moctokit)
- [Act](#act)
- [Compiler](#compiler)
- [Github]()
  - [config.json](#config)
  - [Repositories](#repositories)
  - [Github env vars](#github_env)
  - [Action inputs](#action_input)
  - [Action event](#action_event)
  - [Action artifact archiver](#action_artifact_archiver)

## Use cases<a name="use_cases"></a>

- The idea behind this library is to provide a local github environment where you can run your test cases in. It was built to provide an environment to test custom github actions.
- You can use it to create completely local git repositories, mock `GITHUB_` env vars, mock inputs to github actions and much more.
- It provides a javascript wrapper around the [nektos/act](https://github.com/nektos/act) cli tool.
- It lets you compile a custom github action with certain apis that are mocked. You can use this perform to integration testing on your custom action without having to worry about github api rate limits.

## Moctokit<a name="moctokit"></a>

Used to mock endpoints specified in [@octokit/rest](https://octokit.github.io/rest.js/v19). You can create a moctokit instance and optionally pass parameter `baseUrl` to it. By default it uses "https://api.github.com  
The instance then works the same as an octokit instance. So for example

```typescript
const mock = new Moctokit();
mock.rest.repos.get({
  owner: "kie",
  repo: /build.*/
}).reply({status: 200, data: {full_name: "it worked}})
```

The above piece of code will mock all get repo calls where the owner is "kie" and the repo name starts with "build". It will return a 200 status once.

Similarly you can mock all octokit methods, set scope of how the requests should be matched and set the reply. You can optionally repeat the same mock by calling the `repeat` method before `reply`. The parameter of each method is the same as the corresponding octokit method with the only difference being that all parameters accept regex and all paramters are optional. Any missing path paramter will result in mocking all possible paths.

## Act<a name="act"></a>

This a TS/JS interface for the [nektos/act](https://github.com/nektos/act/) tool. It can be used to execute act cli tool programatically. It provides a parsed output object which contains the status as well as the output for each step executed by the workflow.

Simple usage
List the workflows in the current working directory
```typescript
// optionally pass current working directory. By default it is process.cwd()
const act = new Act()

console.log(await act.list())
/**
* Prints:
* [
*      {
*        jobId: "push1",
*        jobName: "push1",
*        workflowName: "Act Push Test 1",
*        workflowFile: "push1.yml",
*        events: "push",
*      },
*      {
*        jobId: "push2",
*        jobName: "push2",
*        workflowName: "Act Push Test 2",
*        workflowFile: "push2.yml",
*        events: "push",
*      },
*    ]
*/

console.log(await act.list("pull_request"))
/**
* Prints:
* [
*      {
*        jobId: "pr",
*        jobName: "pr",
*        workflowName: "Pull Request",
*        workflowFile: "pull_request.yml",
*        events: "pull_request",
*      }
*    ]
*/
```

## Compiler<a name="compiler"></a>

The idea is that given a compiled (bundled and/or minified) github custom action entrypoint file (.js only), we can inject it with mocked apis such that when the action is run it used the data from the mocked api instead of making the actual api call.

This can be used to run integration tests on actions without having to worry about github api rate limits as well as the fluid nature of the existing github repositories (for eg: a PR that was open 2 days ago might not be anymore)

You can pass a custom API schema and inject those mocked api in your compiled action. You can also inject apis mocked by moctokit.  

Simple usage

```typescript
const moctokit = new Moctokit();
const compiler = new ActionCompiler({
  google: { // name for the API
    baseUrl: "https://google.com",
    endpoints: {
      
      root: { // scope to group similar endpoints together
        get: { // endpoint name
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
  minify) // whether you want the compiled file to be minified or not
```  

You can also you this to conveniently mock APIs other than github.  

Example  
```typescript

const compiler = new ActionCompiler({
  google: { // name for the API
    baseUrl: "https://google.com",
    endpoints: {
      
      root: { // scope to group similar endpoints together
        get: { // endpoint name
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
        .reply({ status: 200, data: ["test worked"] })
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
      "files": "array of file object containing src and dest fields",
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
