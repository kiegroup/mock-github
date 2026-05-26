import axios from "axios";

// Mock implementation of @octokit/rest for testing
export class Octokit {
  rest: Record<string, Record<string, (params: Record<string, string>) => Promise<{ status: number; data: unknown }>>>;
  
  constructor(options?: { baseUrl?: string }) {
    const baseUrl = options?.baseUrl || "https://api.github.com";
    
    // Create a proxy that returns mock functions for any endpoint
    this.rest = new Proxy({}, {
      get: (_target, namespace: string) => {
        return new Proxy({}, {
          get: (_target, method: string) => {
            return async (params: Record<string, string>) => {
              // This will be intercepted by nock in the tests
              const owner = params.owner;
              const repo = params.repo;
              const url = `${baseUrl}/repos/${owner}/${repo}`;
              
              const response = await axios.get(url);
              
              return {
                status: response.status,
                data: response.data,
              };
            };
          },
        });
      },
    }) as Record<string, Record<string, (params: Record<string, string>) => Promise<{ status: number; data: unknown }>>>;
  }
}

// Made with Bob
