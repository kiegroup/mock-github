import { Moctokit } from "@mg/moctokit/moctokit";
import { Octokit } from "@octokit/rest";
import nock from "nock";

beforeEach(() => {
  // Ensure nock is clean before each test
  nock.cleanAll();
});

afterEach(() => {
  // Also clean up after each test
  nock.cleanAll();
});

afterEach(() => {
  const moctokit = new Moctokit();
  moctokit.cleanAll();
});

test("with default base url", async () => {
  const moctokit = new Moctokit();
  const replyTarget = moctokit.rest.repos.get({
    owner: "kie",
    repo: /(project|drools)/,
  });
  expect(replyTarget).toBeDefined();
  expect(typeof replyTarget.reply).toBe("function");
  replyTarget.reply({ status: 200, data: { full_name: "it definitely worked" }, repeat: 2 });
  expect(nock.activeMocks()).not.toStrictEqual([]);
  expect(nock.activeMocks().join("\n")).toContain("\\/repos\\/kie\\/");

  const octokit = new Octokit();
  const data1 = await octokit.rest.repos.get({
    owner: "kie",
    repo: "project",
  });
  expect(data1.status).toBe(200);
  expect(data1.data).toMatchObject({ full_name: "it definitely worked" });

  const data2 = await octokit.rest.repos.get({
    owner: "kie",
    repo: "drools",
  });
  expect(data2.status).toBe(200);
  expect(data2.data).toMatchObject({ full_name: "it definitely worked" });
});

test("with base url", async () => {
  const url = "https://local-git.com";
  const moctokit = new Moctokit(url);
  const replyTarget = moctokit.rest.repos.get({
    owner: "kie",
    repo: /(project|drools)/,
  });
  expect(replyTarget).toBeDefined();
  expect(typeof replyTarget.reply).toBe("function");
  replyTarget.reply({ status: 200, data: { full_name: "it definitely worked" }, repeat: 2 });
  expect(nock.activeMocks()).not.toStrictEqual([]);
  expect(nock.activeMocks().join("\n")).toContain("\\/repos\\/kie\\/");

  const octokit = new Octokit({ baseUrl: url });
  const data1 = await octokit.rest.repos.get({
    owner: "kie",
    repo: "project",
  });
  expect(data1.status).toBe(200);
  expect(data1.data).toMatchObject({ full_name: "it definitely worked" });

  const data2 = await octokit.rest.repos.get({
    owner: "kie",
    repo: "drools",
  });
  expect(data2.status).toBe(200);
  expect(data2.data).toMatchObject({ full_name: "it definitely worked" });
});
