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

export class ComplexModelClientContext extends coreHttp.ServiceClient {
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the ComplexModelClientContext class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.ComplexModelClientOptions) {
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.subscriptionId = '123456';
    this.apiVersion = '2014-04-01-preview';
    this.baseUri = options.baseUri || this.baseUri || "http://localhost:3000";
    this.requestContentType = "application/json; charset=utf-8";
  }
}
