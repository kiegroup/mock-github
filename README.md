# mock-github (WIP)  
A NPM library to configure and create a local github environment. Currently work in progress 

## Table of Content  
- [Use cases](#use_cases)
- [config.json](#config)
- [Repositories](#repositories)
- [Github env vars](#github_env)
- [Action inputs](#action_input)
- [Action event](#action_event)
- [Action artifact archiver](#action_artifact_archiver)
- [Mock api](#mock_api)
- [Act](#act)
- [Compiler](#compiler)  

## Use cases<a name="use_cases"></a>  
- The idea behind this library is to provide a local github environment where you can run your test cases in. It was built to provide an environment to test custom github actions.  
- You can use it to create completely local git repositories, mock `GITHUB_` env vars, mock inputs to github actions and much more.  
- It provides a javascript wrapper around the [nektos/act](https://github.com/nektos/act) cli tool.  
- It lets you compile a custom github action with certain apis that are mocked. You can use this perform to integration testing on your custom action without having to worry about github api rate limits.  

## config.json<a name="config"></a>  
To create your environment all you need specify its state in a `.json` file and provide the path to the config file to the `MockGithub` instance. The structure of the config file is  
```json
{
    "repositories": {
        "name_of_repository": {
            "pushedBranches": ["branch1", "branch2"],
            "localBranches": ["branch3"],
            "currentBranch": "branch2",
            "history": "array of history objects to create a git history",
            "workflow": "array of paths to workflow files that are to be added to this repositories' .github/workflows directory"
        }
    },
    "api": {
        "baseUrl": "http://github.com",
        "endpoints": "array of endpoint objects"
    },
    "env": {
        "var_name": "value"
    },
    "action": {
        "event": "",
        "input": "",
        "archive": ""
    }
}
```  
The sections below will explain each part of the config in detail

## Repositories<a name="repositories"></a>  
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
`workflow`  
&emsp;type: string[]  
&emsp;required: no  
&emsp;description: location of files to be used as workflow file in the repository being created. They are added to the `.github/workflows` directory of the repository
`history`  
&emsp;type: array of `Push`, `Merge`, `Unknown` objects (see below)  
&emsp;required: no  
&emsp;description: create a git history for the repository using the actions mentioned in this array chronologically starting from array at index 0.  
&emsp;&emsp;`Push`  
&emsp;&emsp;&emsp;`branch`  
&emsp;&emsp;&emsp;&emsp;type: string  
&emsp;&emsp;&emsp;&emsp;required: yes  
&emsp;&emsp;&emsp;&emsp;desciption: the branch on which this push should occur  
&emsp;&emsp;&emsp;`file`  
&emsp;&emsp;&emsp;&emsp;type: object  
&emsp;&emsp;&emsp;&emsp;required: no  
&emsp;&emsp;&emsp;&emsp;desciption: contains fields `path` (the location of the file that is to be used in pushing) and `name` (in case the name of the file is supposed to be different on the repository). By default if no `file` is specified then a dummy file is pushed  
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
&emsp;&emsp;`Unknown`  
&emsp;&emsp;&emsp;`cmd`  
&emsp;&emsp;&emsp;&emsp;type: string  
&emsp;&emsp;&emsp;&emsp;required: yes  
&emsp;&emsp;&emsp;&emsp;desciption: A git cmd that is to be run. To be used when you want to perform some action which is neither push nor merge  
&emsp;&emsp;&emsp;`file`  
&emsp;&emsp;&emsp;&emsp;type: object  
&emsp;&emsp;&emsp;&emsp;required: no  
&emsp;&emsp;&emsp;&emsp;desciption: contains fields `path` (the location of the file that is to be used in pushing) and `name` (in case the name of the file is supposed to be different on the repository).  

There are utility methods available which gets you the state of the repository once it has been constructed. The available methods are `getAllStates(), getState(repository_name)`

## Github env vars<a name="github_env"></a>  
Used to set github environment variable. Adds the prefix `GITHUB_` to all the variables. Specify it in the `env` section of the config file. For eg:  
```json
{
    "hello": "world"
}
```
This would set the the env var `GITHUB_HELLO` with value `world`.
There also utility methods available which lets you dynamically set and update these variables. The utility methods are: `update(key), delete(key), get(key), getAll()`  

## Action inputs<a name="action_input"></a> 
Used to set input for github actions. Specify it in the `action.input` section of the config file. For eg:  
```json
{
    "hello": "world"
}
```
This would set the input `hello` with value `world`.
There also utility methods available which lets you dynamically set and update these variables. The utility methods are: `update(key), delete(key), get(key), getAll()` 

## Action event<a name="action_event"></a>  
Used to create the `event.json` payload file used by github actions to get information on the event. Also sets the corresponding `GITHUB_EVENT_PATH` env var to point to the json file. Configure it in the `action.event` section of the config file with the following fields:  
`payload`  
&emsp;type: Object {string: any}  
&emsp;required: yes  
&emsp;description: contains the actual payload  
`filename`  
&emsp;type: string 
&emsp;required: no  
&emsp;description: name of the file in which the payload is store. By default it is `event.json`  

## Action artifact archiver<a name="action_artifact_archiver"></a>

Starts an express server which used by the artifact archiver github action to upload and download artifacts. Constructed from: https://github.com/nektos/act/blob/master/pkg/artifacts/server.go. Configure it in the `action.archive` section of the config file with the following fields:  
`serverPort`  
&emsp;type: string  
&emsp;required: yes  
&emsp;description: the port to be used by the local express server  
`artifactStore`  
&emsp;type: string  
&emsp;required: yes   
&emsp;description: the directory in which the artifacts are to be uploaded to and downloaded from  

## Mock api<a name="mock_api"></a>  
Used to mock any API specified in the `api` section of the config file. It uses nock under the hood. You can specify the following properties:  
`baseUrl`  
&emsp;type: string  
&emsp;required: no  
&emsp;description: url that is to be mocked. By default it is "https://api.github.com"  
`endpoints`  
&emsp;type: array of endpoint objects  
&emsp;required: yes  
&emsp;description: specifies which endpoint is to be mocked. Can be used for regex matching, query matching or body matching as well. The response field sets the reply for the endpoint.  

You can easily activate/deactivate mocked responses and re-use them whenever required. You can also set which response is to be used for an activated endpoint.  

## Act<a name="act"></a>  
This a TS/JS interface for the [nektos/act](https://github.com/nektos/act/) tool. It can be used to execute act cli tool programatically. It provides a parsed output object which contains the status as well as the output for each step executed by the workflow.  

## Compiler<a name="compiler"></a>  
PoC is still being worked on (See analyse-compiler branch)  

The idea is that given a compiled (bundled and/or minified) github custom action entrypoint file (.js only), we can inject it with mocked apis such that when the action is run it used the data from the mocked api instead of making the actual api call.  

This can be used to run integration tests on actions without having to worry about github api rate limits as well as the fluid nature of the existing github repositories (for eg: a PR that was open 2 days ago might not be anymore)  

