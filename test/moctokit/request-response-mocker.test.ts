/* eslint-disable @typescript-eslint/no-explicit-any */
import { EndpointMethod } from "@mg/endpoint-mocker/endpoint-mocker.types";
import { MoctokitRequestMocker } from "@mg/moctokit/request/request-mocker";
import { Moctokit } from "@mg/index";

const url = "http://127.0.0.1:8000";

const mocker = new Moctokit(url);
const agent = mocker.agent;

describe.each(["GET", "POST", "DELETE", "PUT", "PATCH"])(
  "Method - %p",
  (method: string) => {
    test("with path parameters", async () => {
      const requestMocker = new MoctokitRequestMocker(agent, url, {
        path: "/path/{param1}/path/{param2}/path/{param3}",
        method: method as EndpointMethod,
        parameters: {
          path: ["param1", "param2", "param3"],
          query: [],
          body: [],
        },
      });
      requestMocker
        .request({
          param1: "hello",
          param2: /(w|W)orld\d/,
        } as any)
        .reply({ status: 200, data: { msg: "hello world" } } as never);

      const response = await fetch(`${url}/path/hello/path/world2/path/any`, {
        method,
      });
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });

      // reuse same mocker with repeat
      requestMocker
        .request({
          param1: "hello",
          param2: /(w|W)orld\d/,
        } as any)
        .reply({
          status: 200,
          data: { msg: "hello world" },
          repeat: 3,
        } as never);

      // incorrect param1 - should be an exact match
      await expect(
        fetch(`${url}/path/Hello/path/world2/path/any`, { method })
      ).rejects.toThrowError();

      // incorrect param2 - does not match the regex
      await expect(
        fetch(`${url}/path/hello/path/world/path/any`, { method })
      ).rejects.toThrowError();

      // incorrect param3 - not passed
      await expect(
        fetch(`${url}/path/hello/path/world2/path/`, { method })
      ).rejects.toThrowError();
    });

    test("no path parameters passed", async () => {
      const requestMocker = new MoctokitRequestMocker(agent, url, {
        path: "/path/{param1}/path/{param2}/path",
        method: method as EndpointMethod,
        parameters: {
          path: ["param1", "param2"],
          query: [],
          body: [],
        },
      });
      requestMocker
        .request()
        .reply({ status: 200, data: { msg: "hello world" } } as never);

      const response = await fetch(
        `${url}/path/hello/path/world2/path`,
        {
          method,
        }
      );
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });
    });

    test("no path parameters defined. Exact path match", async () => {
      const requestMocker = new MoctokitRequestMocker(agent, url, {
        path: "/path/hello/world",
        method: method as EndpointMethod,
        parameters: {
          path: [],
          query: [],
          body: [],
        },
      });
      requestMocker.request().reply({
        status: 200,
        data: { msg: "hello world" },
        repeat: 2,
      } as never);

      const response = await fetch(`${url}/path/hello/world`, {
        method,
      });
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });

      await expect(
        fetch(`${url}/path/hello/worlD`, {
          method,
        })
      ).rejects.toThrowError();
    });

    test("with url queries", async () => {
      const requestMocker = new MoctokitRequestMocker(agent, url, {
        path: "/query/{param1}/query",
        method: method as EndpointMethod,
        parameters: {
          path: ["param1"],
          query: ["query1", "query2", "query3"],
          body: [],
        },
      });

      requestMocker
        .request({
          query1: "hello",
          query2: /\d/,
        } as any)
        .reply({ status: 200, data: { msg: "hello world" } } as never);

      const response = await fetch(
        `${url}/query/any/query?query1=hello&query2=1`,
        {
          method,
        }
      );
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });

      requestMocker
        .request({
          query1: "hello",
          query2: /\d/,
        } as any)
        .reply({
          status: 200,
          data: { msg: "hello world" },
          repeat: 3,
        } as never);

      await expect(
        fetch(`${url}/query/any/query?query1=hell&query2=2`, { method })
      ).rejects.toThrowError();
      await expect(
        fetch(`${url}/query/any/query?query1=hello&query2=hello`, { method })
      ).rejects.toThrowError();
      await expect(
        fetch(`${url}/query/any/query?query1=hello&query2=1&query3=hello`, {
          method,
        })
      ).rejects.toThrowError();
    });

    test("no url queries", async () => {
      const requestMocker = new MoctokitRequestMocker(agent, url, {
        path: "/query/{param1}/query",
        method: method as EndpointMethod,
        parameters: {
          path: ["param1"],
          query: ["query1", "query2", "query3"],
          body: [],
        },
      });

      requestMocker
        .request()
        .reply({ status: 200, data: { msg: "hello world" } } as never);

      const response = await fetch(
        `${url}/query/any/query?query1=hello&query2=1`,
        {
          method,
        }
      );
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });
    });

    test("mock headers", async () => {
      const requestMocker = new MoctokitRequestMocker(agent, url, {
        path: "/query/{param1}/query",
        method: method as EndpointMethod,
        parameters: {
          path: ["param1"],
          query: ["query1", "query2", "query3"],
          body: [],
        },
      });

      requestMocker
        .request({
          param1: "hello",
        } as any)
        .matchReqHeaders({
          authorization: /bearer */,
        })
        .reply({ status: 200, data: { msg: "hello world" } } as never);

      const response = await fetch(
        `${url}/query/hello/query?query1=hello`,
        {
          method,
          headers: {
            authorization: "bearer some_token",
            "custom-header": "value",
          },
        }
      );
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });
    });

    test("setResponse: singular response", async () => {
      const requestMocker = new MoctokitRequestMocker(agent, url, {
        path: "/response/{param1}/response",
        method: method as EndpointMethod,
        parameters: {
          path: ["param1"],
          query: ["query1", "query2", "query3"],
          body: [],
        },
      });

      requestMocker
        .request()
        .setResponse({
          status: 200,
          data: { msg: "hello world" },
          headers: { "test-header": "value" },
        } as never)
        .reply();

      const response = await fetch(
        `${url}/response/any/response?query1=hello&query2=1`,
        {
          method,
        }
      );
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });
      expect(Object.fromEntries(response.headers.entries())).toMatchObject({ "test-header": "value" });
    });

    test("setResponse: multiple response", async () => {
      const requestMocker = new MoctokitRequestMocker(agent, url, {
        path: "/response/{param1}/response",
        method: method as EndpointMethod,
        parameters: {
          path: ["param1"],
          query: ["query1", "query2", "query3"],
          body: [],
        },
      });

      requestMocker
        .request()
        .setResponse([
          {
            status: 200,
            data: { msg: "hello world" },
            headers: { "test-header": "value" },
          },
          { status: 201, data: { msg: "another response" } },
        ] as never)
        .reply();

      const response1 = await fetch(
        `${url}/response/any/response?query1=hello&query2=1`,
        {
          method,
        }
      );
      expect(response1.status).toBe(200);
      expect(await response1.json()).toStrictEqual({ msg: "hello world" });
      expect(Object.fromEntries(response1.headers.entries())).toMatchObject({ "test-header": "value" });

      const response2 = await fetch(
        `${url}/response/any/response?query1=hello&query2=1`,
        {
          method,
        }
      );
      expect(response2.status).toBe(201);
      expect(await response2.json()).toStrictEqual({ msg: "another response" });
      expect(Object.fromEntries(response2.headers.entries())).not.toMatchObject({ "test-header": "value" });
    });

    test("reply: with headers", async () => {
      const requestMocker = new MoctokitRequestMocker(agent, url, {
        path: "/response/{param1}/response",
        method: method as EndpointMethod,
        parameters: {
          path: ["param1"],
          query: ["query1", "query2", "query3"],
          body: [],
        },
      });

      requestMocker.request().reply({
        status: 200,
        data: { msg: "hello world" },
        headers: { "test-header": "value" },
      } as never);

      const response = await fetch(
        `${url}/response/any/response?query1=hello&query2=1`,
        {
          method,
        }
      );
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });
      expect(Object.fromEntries(response.headers.entries())).toMatchObject({ "test-header": "value" });
    });
  }
);

describe.each(["POST", "DELETE", "PUT", "PATCH"])(
  "Method - %p",
  (method: string) => {
    test("with request body", async () => {
      const requestMocker = new MoctokitRequestMocker(agent, url, {
        path: "/body/{param1}/body",
        method: method as EndpointMethod,
        parameters: {
          path: ["param1"],
          query: ["query1"],
          body: ["body1", "body2"],
        },
      });

      requestMocker
        .request({
          body1: "hello",
          body2: /\d/,
        } as any)
        .reply({ status: 200, data: { msg: "hello world" } } as never);

      const response = await fetch(`${url}/body/any/body`, {
        method,
        body: JSON.stringify({ body1: "hello", body2: 2 }),
      });
      const data = await response.json();
      expect(response.status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });

      requestMocker
        .request({
          body1: "hello",
          body2: /\d/,
        } as any)
        .reply({
          status: 200,
          data: { msg: "hello world" },
          repeat: 3,
        } as never);

      await expect(
        fetch(`${url}/body/any/body?query1=hell`, {
          method,
          body: JSON.stringify({ body1: "hell", body2: 2 }),
          headers: {
            "content-type": "application/json"
          }
        })
      ).rejects.toThrowError();
      await expect(
        fetch(`${url}/body/any/body?query1=hello`, {
          method,
          body: JSON.stringify({ body1: "hello", body2: "world" }),
        })
      ).rejects.toThrowError();
      await expect(
        fetch(`${url}/body/any/body`, {
          method,
          body: JSON.stringify({ body1: "hello", body2: 2, body3: "world" }),
        })
      ).rejects.toThrowError();
    });

    test("no request body", async () => {
      const requestMocker = new MoctokitRequestMocker(agent, url, {
        path: "/body/{param1}/body",
        method: method as EndpointMethod,
        parameters: {
          path: ["param1"],
          query: ["query1"],
          body: ["body1", "body2"],
        },
      });

      requestMocker
        .request()
        .reply({ status: 200, data: { msg: "hello world" } } as never);

      try {
        const response = await fetch(`${url}/body/any/body`, {
          method,
          body: JSON.stringify({ body1: "hello", body2: 2 }),
          headers: { "content-type": "application/json" }
        });
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(data).toStrictEqual({ msg: "hello world" });
      } catch (error) {
        console.error(error);
        throw error;
      }
    });
  }
);
