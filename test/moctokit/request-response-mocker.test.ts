import axios from "axios";
import { EndpointMethod } from "../../src/endpoint-mocker/endpoint-mocker.types";
import { MoctokitRequestMocker } from "../../src/moctokit/request/request-mocker";

const url = "http://localhost:8000";
const instance = axios.create({
  baseURL: url,
});

describe.each(["get", "post", "delete", "put", "patch"])(
  "Method - %p",
  (method: string) => {
    test("with path parameters", async () => {
      const requestMocker = new MoctokitRequestMocker(url, {
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

      const { status, data } = await instance({
        method,
        url: "path/hello/path/world2/path/any",
      });
      expect(status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });

      // reuse same mocker with repeat
      requestMocker
        .request({
          param1: "hello",
          param2: /(w|W)orld\d/,
        } as any)
        .repeat(3)
        .reply({ status: 200, data: { msg: "hello world" } } as never);

      // incorrect param1 - should be an exact match
      await expect(
        instance({ method, url: "path/Hello/path/world2/path/any" })
      ).rejects.toThrowError();

      // incorrect param2 - does not match the regex
      await expect(
        instance({ method, url: "path/hello/path/world/path/any" })
      ).rejects.toThrowError();

      // incorrect param3 - not passed
      await expect(
        instance({ method, url: "path/hello/path/world2/path/" })
      ).rejects.toThrowError();
    });

    test("no path parameters passed", async () => {
      const requestMocker = new MoctokitRequestMocker(url, {
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

      const { status, data } = await instance({
        method,
        url: "path/hello/path/world2/path",
      });
      expect(status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });
    });

    test("no path parameters defined. Exact path match", async () => {
      const requestMocker = new MoctokitRequestMocker(url, {
        path: "/path/hello/world",
        method: method as EndpointMethod,
        parameters: {
          path: [],
          query: [],
          body: [],
        },
      });
      requestMocker
        .request()
        .repeat(2)
        .reply({ status: 200, data: { msg: "hello world" } } as never);

      const { status, data } = await instance({
        method,
        url: "/path/hello/world",
      });
      expect(status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });

      await expect(
        instance({
          method,
          url: "/path/hello/worlD",
        })
      ).rejects.toThrowError();
    });

    test("with url queries", async () => {
      const requestMocker = new MoctokitRequestMocker(url, {
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

      const { status, data } = await instance({
        method,
        url: "/query/any/query?query1=hello",
        params: { query2: 1 },
      });
      expect(status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });

      requestMocker
        .request({
          query1: "hello",
          query2: /\d/,
        } as any)
        .repeat(2)
        .reply({ status: 200, data: { msg: "hello world" } } as never);

      await expect(
        instance({ method, url: "/query/any/query?query1=hell&query2=2" })
      ).rejects.toThrowError();
      await expect(
        instance({ method, url: "/query/any/query?query1=hello&query2=hello" })
      ).rejects.toThrowError();
      await expect(
        instance({
          method,
          url: "/query/any/query?query1=hello&query2=1&query3=hello",
        })
      ).rejects.toThrowError();
    });

    test("no url queries", async () => {
      const requestMocker = new MoctokitRequestMocker(url, {
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

      const { status, data } = await instance({
        method,
        url: "/query/any/query?query1=hello",
        params: { query2: 1 },
      });
      expect(status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });
    });
  }
);

describe.each(["post", "delete", "put", "patch"])(
  "Method - %p",
  (method: string) => {
    test("with request body", async () => {
      const requestMocker = new MoctokitRequestMocker(url, {
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

      const { status, data } = await instance({
        method,
        url: "/body/any/body",
        data: { body1: "hello", body2: 2 },
      });
      expect(status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });

      requestMocker
        .request({
          body1: "hello",
          body2: /\d/,
        } as any)
        .repeat(3)
        .reply({ status: 200, data: { msg: "hello world" } } as never);

      await expect(
        instance({
          method,
          url: "/body/any/body?query1=hell",
          data: { body1: "hell", body2: 2 },
        })
      ).rejects.toThrowError();
      await expect(
        instance({
          method,
          url: "/body/any/body?query1=hello",
          data: { body1: "hello", body2: "world" },
        })
      ).rejects.toThrowError();
      await expect(
        instance({
          method,
          url: "/body/any/body",
          data: { body1: "hello", body2: 2, body3: "world" },
        })
      ).rejects.toThrowError();
    });

    test("no request body", async () => {
      const requestMocker = new MoctokitRequestMocker(url, {
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

      const { status, data } = await instance({
        method,
        url: "/body/any/body",
        data: { body1: "hello", body2: 2 },
      });
      expect(status).toBe(200);
      expect(data).toStrictEqual({ msg: "hello world" });
    });
  }
);
