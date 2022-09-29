import axios from "axios";
import { Octokit } from "@octokit/rest";

async function hello() {
  const octokit = new Octokit();

  const [branchResult, axiosResult, repoResult] = await Promise.all([
    octokit.rest.repos.getBranch({
      owner: "kiegroup",
      repo: "build-chain",
      branch: "main",
    }),
    axios.get("https://google.com/?search=test-search"),
    octokit.rest.repos.update({
      owner: "kie",
      repo: "repo",
      name: "newName2",
    }),
  ]);

  console.log(axiosResult.status, axiosResult.data);
  console.log(branchResult.status, branchResult.data);
  console.log(repoResult.status, repoResult.data);
}

hello();
