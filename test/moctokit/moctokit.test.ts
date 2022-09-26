import { Moctokit } from "../../src/moctokit/moctokit";
import { Octokit } from "@octokit/rest";

test("with default base url", async () => {
  const moctokit = new Moctokit();
  moctokit.rest.repos
    .get({
      owner: "kie",
    })
    .repeat(2)
    .reply({ status: 200, data: { full_name: "it definitely worked" } });

  const octokit = new Octokit();
  const data1 = await octokit.rest.repos.get({
    owner: "kie",
    repo: "project",
  });
  expect(data1.status).toBe(200);
  expect(data1.data).toStrictEqual({ full_name: "it definitely worked" });

  const data2 = await octokit.rest.repos.get({
    owner: "kie",
    repo: "drools",
  });
  expect(data2.status).toBe(200);
  expect(data2.data).toStrictEqual({ full_name: "it definitely worked" });
});

test("with base url", async () => {
  const url = "https://local-git.com";
  const moctokit = new Moctokit(url);
  moctokit.rest.repos
    .get({
      owner: "kie",
    })
    .repeat(2)
    .reply({ status: 200, data: { full_name: "it definitely worked" } });

  const octokit = new Octokit({ baseUrl: url });
  const data1 = await octokit.rest.repos.get({
    owner: "kie",
    repo: "project",
  });
  expect(data1.status).toBe(200);
  expect(data1.data).toStrictEqual({ full_name: "it definitely worked" });

  const data2 = await octokit.rest.repos.get({
    owner: "kie",
    repo: "drools",
  });
  expect(data2.status).toBe(200);
  expect(data2.data).toStrictEqual({ full_name: "it definitely worked" });
});
