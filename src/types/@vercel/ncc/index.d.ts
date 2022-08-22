declare module "@vercel/ncc" {
  type NccOptions = {
    externals?: string[];
    filename?: string;
    minify?: boolean;
  };

  export function ncc(
    entrypoint: string,
    options?: NccOptions
  ): Promise<{ code: string; map: any; assets: any }>;
}
