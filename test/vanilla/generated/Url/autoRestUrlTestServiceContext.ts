/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "./models";

const packageName = "";
const packageVersion = "";

export class AutoRestUrlTestServiceContext extends coreHttp.ServiceClient {
  globalStringPath: string;
  globalStringQuery?: string;

  /**
   * Initializes a new instance of the AutoRestUrlTestServiceContext class.
   * @param globalStringPath A string value 'globalItemStringPath' that appears in the path
   * @param [options] The parameter options
   */
  constructor(globalStringPath: string, options?: Models.AutoRestUrlTestServiceOptions) {
    if (globalStringPath == undefined) {
      throw new Error("'globalStringPath' cannot be null.");
    }

    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.baseUri = options.baseUri || this.baseUri || "http://localhost:3000";
    this.requestContentType = "application/json; charset=utf-8";
    this.globalStringPath = globalStringPath;
    if (options.globalStringQuery !== null && options.globalStringQuery !== undefined) {
      this.globalStringQuery = options.globalStringQuery;
    }
  }
}
