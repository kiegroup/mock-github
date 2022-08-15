import axios from "axios";
import { ActivatedEndpoint } from "../../src/mock/api/activated-endpoint";
import { Body, Endpoint, Method, Query } from "../../src/mock/api/api-mocker.types";

const url = "http://localhost:8000";
const instance = axios.create({
  baseURL: url,
});

describe.each([
  "get" as Method,
  "put" as Method,
  "patch" as Method,
  "post" as Method,
  "patch" as Method,
])("%p", (method: Method) => {
  describe.each([
    [
      "regex, query and body",
      true,
      "/test\\d",
      { foo: "bar" },
      { foo: "bar" },
      "/test123/abc",
      "/abc",
    ],
    [
      "regex, query and no body",
      true,
      "/test\\d",
      new URLSearchParams({ foo: "bar" }),
      undefined,
      "/test123/abc",
      "/abc",
    ],
    [
      "regex, no query and no body",
      true,
      "/test\\d",
      undefined,
      undefined,
      "/test123/abc",
      "/abc",
    ],
    [
      "regex, no query and body",
      true,
      "/test\\d",
      undefined,
      { foo: "bar" },
      "/test123/abc",
      "/abc",
    ],
    [
      "no regex, query and body",
      false,
      "/test",
      { foo: "bar" },
      { foo: "bar" },
      "/test",
      "/test/abc",
    ],
    [
      "no regex, query and no body",
      false,
      "/test",
      new URLSearchParams({ foo: "bar" }),
      undefined,
      "/test",
      "/test/abc",
    ],
    [
      "no regex, no query and no body",
      false,
      "/test",
      undefined,
      undefined,
      "/test",
      "/test/abc",
    ],
    [
      "no regex, no query and body",
      false,
      "/test",
      undefined,
      { foo: "bar" },
      "/test",
      "/test/abc",
    ],
  ])(
    "setResponse: %p",
    (
      _title: string,
      isRegex: boolean,
      path: string,
      query: Query | undefined,
      body: Body | undefined,
      successTestUrl: string,
      failureTestUrl: string
    ) => {
      let activatedEndpoint: ActivatedEndpoint;
      const endpoint: Endpoint = {
        path,
        isRegex,
        method,
        query,
        body,
        response: {
          good_200: {
            status: 200,
            data: ["test"],
          },
          good_202: {
            status: 202,
            data: ["test"],
          },
          good_201: {
            status: 201,
            data: ["test"],
          },
        },
      };

      beforeEach(() => {
        activatedEndpoint = new ActivatedEndpoint(endpoint, url);
        activatedEndpoint.setResponse("good_200");
      });
      afterEach(() => {
        activatedEndpoint.deactivate();
      });

      test("path, query and body matches", async () => {
        let response = await instance({
          method,
          url: successTestUrl,
          params: query,
          data: body,
        });
        expect(response.data).toStrictEqual(endpoint.response.good_200.data);
        expect(response.status).toBe(endpoint.response.good_200.status);
      });

      test("path does not match", async () => {
        await expect(
          instance({ method, url: failureTestUrl, params: query, data: body })
        ).rejects.toThrowError();
      });

      test("path, body matches but not query", async () => {
        if (query) {
          await expect(
            instance({ method, url: successTestUrl, data: body })
          ).rejects.toThrowError();
        } else {
          let response = await instance({
            method,
            url: successTestUrl,
            params: { foo: "bar" },
            data: body,
          });
          expect(response.data).toStrictEqual(endpoint.response.good_200.data);
          expect(response.status).toBe(endpoint.response.good_200.status);
        }
      });

      test("path, query matches but not body", async () => {
        if (body && method !== "get") {
          await expect(
            instance({ method, url: successTestUrl, params: query })
          ).rejects.toThrowError();
        } else {
          let response = await instance({
            method,
            url: successTestUrl,
            params: query,
            data: { foo: "bar" },
          });
          expect(response.data).toStrictEqual(endpoint.response.good_200.data);
          expect(response.status).toBe(endpoint.response.good_200.status);
        }
      });

      test("chained setResponse with repetition", async () => {
        activatedEndpoint.setResponse("good_201", 2).setResponse("good_202");
        let response = await instance({
          method,
          url: successTestUrl,
          params: query,
          data: body,
        });
        expect(response.data).toStrictEqual(endpoint.response.good_200.data);
        expect(response.status).toBe(endpoint.response.good_200.status);

        response = await instance({
          method,
          url: successTestUrl,
          params: query,
          data: body,
        });
        expect(response.data).toStrictEqual(endpoint.response.good_201.data);
        expect(response.status).toBe(endpoint.response.good_201.status);

        response = await instance({
          method,
          url: successTestUrl,
          params: query,
          data: body,
        });
        expect(response.data).toStrictEqual(endpoint.response.good_201.data);
        expect(response.status).toBe(endpoint.response.good_201.status);

        response = await instance({
          method,
          url: successTestUrl,
          params: query,
          data: body,
        });
        expect(response.data).toStrictEqual(endpoint.response.good_202.data);
        expect(response.status).toBe(endpoint.response.good_202.status);
      });
    }
  );

  describe("deactivate", () => {
    test("endpoint can't be reached after deactivation", async () => {
      const endpoint: Endpoint = {
        path: "/test",
        method,
        response: {
          good_200: {
            status: 200,
            data: ["test"],
          },
          good_202: {
            status: 202,
            data: ["test"],
          },
          good_201: {
            status: 201,
            data: ["test"],
          },
        },
      };
      const activatedEndpoint = new ActivatedEndpoint(endpoint, url);
      activatedEndpoint
        .setResponse("good_200")
        .setResponse("good_201", 2)
        .setResponse("good_202");
      activatedEndpoint.deactivate();
      await expect(
        instance({ method, url: endpoint.path })
      ).rejects.toThrowError();
    });
  });
});
