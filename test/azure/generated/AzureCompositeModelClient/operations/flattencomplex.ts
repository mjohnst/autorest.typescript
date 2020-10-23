/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/flattencomplexMappers";
import * as Parameters from "../models/parameters";
import { AzureCompositeModelContext } from "../azureCompositeModelContext";

/** Class representing a Flattencomplex. */
export class Flattencomplex {
  private readonly client: AzureCompositeModelContext;

  /**
   * Create a Flattencomplex.
   * @param {AzureCompositeModelContext} client Reference to the service client.
   */
  constructor(client: AzureCompositeModelContext) {
    this.client = client;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.FlattencomplexGetValidResponse>
   */
  getValid(options?: msRest.RequestOptionsBase): Promise<Models.FlattencomplexGetValidResponse>;
  /**
   * @param callback The callback
   */
  getValid(callback: msRest.ServiceCallback<Models.MyBaseTypeUnion>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MyBaseTypeUnion>): void;
  getValid(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MyBaseTypeUnion>, callback?: msRest.ServiceCallback<Models.MyBaseTypeUnion>): Promise<Models.FlattencomplexGetValidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getValidOperationSpec,
      callback) as Promise<Models.FlattencomplexGetValidResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/flatten/valid",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MyBaseType
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
