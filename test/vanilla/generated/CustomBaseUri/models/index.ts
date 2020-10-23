/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * An interface representing AutoRestParameterizedHostTestClientOptions.
 */
export interface AutoRestParameterizedHostTestClientOptions extends ServiceClientOptions {
  /**
   * A string value that is used as a global part of the parameterized host. Default value: 'host'.
   */
  host?: string;
}
