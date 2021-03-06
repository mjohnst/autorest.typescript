/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/core-http";

/**
 * An interface representing AvailabilitySetUpdateParameters.
 */
export interface AvailabilitySetUpdateParameters {
  /**
   * A set of tags. A description about the set of tags.
   */
  tags: { [propertyName: string]: string };
}

/**
 * An interface representing AutoRestParameterFlatteningOptions.
 */
export interface AutoRestParameterFlatteningOptions extends ServiceClientOptions {
  baseUri?: string;
}
