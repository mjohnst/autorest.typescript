/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";

const packageName = "";
const packageVersion = "";

export class AutoRestUrlTestServiceContext extends msRest.ServiceClient {
  globalStringPath: string;
  globalStringQuery?: string;

  /**
   * @class
   * Initializes a new instance of the AutoRestUrlTestServiceContext class.
   * @constructor
   *
   * @param {string} globalStringPath - A string value 'globalItemStringPath' that appears in the path
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.globalStringQuery] - should contain value null
   *
   */
  constructor(globalStringPath: string, baseUri?: string, options?: Models.AutoRestUrlTestServiceOptions) {
    if (globalStringPath === null || globalStringPath === undefined) {
      throw new Error('\'globalStringPath\' cannot be null.');
    }

    if (!options) {
      options = {};
    }

    super(undefined, options);

    this.baseUri = baseUri as string;
    if (!this.baseUri) {
      this.baseUri = "http://localhost:3000";
    }
    this.requestContentType = "application/json; charset=utf-8";
    this.globalStringPath = globalStringPath;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    if(options.globalStringQuery !== null && options.globalStringQuery !== undefined) {
      this.globalStringQuery = options.globalStringQuery;
    }
  }
}
