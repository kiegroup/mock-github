import {compile} from "./action-compiler/action-compile";
compile("/home/sbapna/projects/mock-github/test.js", [{baseUrl: "https://google.com", endpoints: [{path: "/", method: "get", response: [{data: {msg: "hello"}, status: 200}]}]}])
