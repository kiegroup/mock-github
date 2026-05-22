import { DataMatcher, DataMatcherMap, RequestBodyMatcher } from "nock/types";
import { EndpointDetails, Params } from "@mg/endpoint-mocker/endpoint-mocker.types";

export abstract class RequestMocker {
  private _endpointDetails: EndpointDetails;
  private _baseUrl: string;
  private _allowUnmocked: boolean;

  constructor(baseUrl: string, endpointDetails: EndpointDetails, allowUnmocked = false) {
    this._endpointDetails = endpointDetails;
    this._baseUrl = baseUrl;
    this._allowUnmocked = allowUnmocked;
  }

  get baseUrl() {
    return this._baseUrl;
  }

  get endpointDetails() {
    return this._endpointDetails;
  }

  get allowUnmocked() {
    return this._allowUnmocked;
  }

  protected parseParams(params?: Params) {
    const { pathParams, query, requestBody } = this.extractParams(params);

    let path: string | RegExp = this.endpointDetails.path;
    let regexFlag = false;

    // Escape special regex characters in the static parts of the path
    // but preserve the parameter placeholders
    // Note: We don't escape forward slashes as they're path separators
    const escapeRegexExceptPlaceholders = (str: string): string => {
      const parts: string[] = [];
      let lastIndex = 0;
      const placeholderRegex = /{[^{}]+}/g;
      let match;
      
      while ((match = placeholderRegex.exec(str)) !== null) {
        // Escape the part before the placeholder
        if (match.index > lastIndex) {
          const staticPart = str.substring(lastIndex, match.index);
          parts.push(staticPart.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
        }
        // Keep the placeholder as-is
        parts.push(match[0]);
        lastIndex = match.index + match[0].length;
      }
      
      // Escape any remaining part after the last placeholder
      if (lastIndex < str.length) {
        const staticPart = str.substring(lastIndex);
        parts.push(staticPart.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
      }
      
      return parts.join("");
    };

    // Escape the path template if there are parameters
    if (this.endpointDetails.path.match(/{[^{}]+}/g)) {
      path = escapeRegexExceptPlaceholders(path);
    }

    // replace any path variables with either values or regex expression
    for (const match of this.endpointDetails.path.match(/{[^{}]+}/g) ??
      []) {
      let replacementParam;
      if (pathParams[match.slice(1, -1)]) {
        const value = pathParams[match.slice(1, -1)];
        replacementParam = value instanceof RegExp ? value.source : `${value}`.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        regexFlag ||= value instanceof RegExp;
      } else {
        replacementParam = ".+";
        regexFlag = true;
      }
      path = path.replace(match, replacementParam);
    }

    // if a regex expression was encountered then path is used as a regex expression
    if (regexFlag) {
      // Add anchors to match the entire path
      path = new RegExp(`^${path}$`);
    }

    return { path, query, requestBody };
  }

  private extractParams(params?: Params) {
    const pathParams: Record<string, unknown> = {};
    let query: DataMatcherMap | undefined = undefined;
    let requestBody: RequestBodyMatcher | undefined = undefined;
    if (!params) {
      return { pathParams, query, requestBody };
    }

    // separate out the path, query and body params
    for (const [param, value] of Object.entries(params)) {
      if (this.endpointDetails.parameters.path.includes(param)) {
        pathParams[param] = value;
      }

      if (this.endpointDetails.parameters.query.includes(param)) {
        if (!query) {
          query = {};
        }
        query[param] = value as DataMatcher;
      }

      if (this.endpointDetails.parameters.body.includes(param)) {
        if (!requestBody) {
          requestBody = {};
        }
        requestBody[param] = value as DataMatcher;
      }
    }

    return { pathParams, query, requestBody };
  }
}
