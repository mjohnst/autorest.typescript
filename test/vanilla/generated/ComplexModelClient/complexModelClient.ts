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
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { ComplexModelClientContext } from "./complexModelClientContext";

class ComplexModelClient extends ComplexModelClientContext {
  /**
   * @class
   * Initializes a new instance of the ComplexModelClient class.
   * @constructor
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
   */
  constructor(baseUri?: string, options?: msRest.ServiceClientOptions) {
    super(baseUri, options);
  }
  // methods on the client.

  /**
   * @summary Product Types
   *
   * The Products endpoint returns information about the Uber products offered at a given location.
   * The response includes the display name and other details about each product, and lists the
   * products in the proper display order.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  listWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.CatalogArray>> {
    return this.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec);
  }
  // methods on the client.

  /**
   * @summary Create products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {ComplexModelClientCreateOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  createWithHttpOperationResponse(subscriptionId: string, resourceGroupName: string, options?: Models.ComplexModelClientCreateOptionalParams): Promise<msRest.HttpOperationResponse<Models.CatalogDictionary>> {
    return this.sendOperationRequest(
      {
        subscriptionId,
        resourceGroupName,
        options
      },
      createOperationSpec);
  }
  // methods on the client.

  /**
   * @summary Update products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {ComplexModelClientUpdateOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  updateWithHttpOperationResponse(subscriptionId: string, resourceGroupName: string, options?: Models.ComplexModelClientUpdateOptionalParams): Promise<msRest.HttpOperationResponse<Models.CatalogArray>> {
    return this.sendOperationRequest(
      {
        subscriptionId,
        resourceGroupName,
        options
      },
      updateOperationSpec);
  }

  /**
   * @summary Product Types
   *
   * The Products endpoint returns information about the Uber products offered at a given location.
   * The response includes the display name and other details about each product, and lists the
   * products in the proper display order.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.CatalogArray} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.CatalogArray} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  list(resourceGroupName: string): Promise<Models.CatalogArray>;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.CatalogArray>;
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.CatalogArray>): any {
    return msRest.responseToBody(this.listWithHttpOperationResponse.bind(this), resourceGroupName, options, callback);
  }

  /**
   * @summary Create products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {ComplexModelClientCreateOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.CatalogDictionary} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.CatalogDictionary} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  create(subscriptionId: string, resourceGroupName: string): Promise<Models.CatalogDictionary>;
  create(subscriptionId: string, resourceGroupName: string, options: Models.ComplexModelClientCreateOptionalParams): Promise<Models.CatalogDictionary>;
  create(subscriptionId: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogDictionary>): void;
  create(subscriptionId: string, resourceGroupName: string, options: Models.ComplexModelClientCreateOptionalParams, callback: msRest.ServiceCallback<Models.CatalogDictionary>): void;
  create(subscriptionId: string, resourceGroupName: string, options?: Models.ComplexModelClientCreateOptionalParams, callback?: msRest.ServiceCallback<Models.CatalogDictionary>): any {
    return msRest.responseToBody(this.createWithHttpOperationResponse.bind(this), subscriptionId, resourceGroupName, options, callback);
  }

  /**
   * @summary Update products
   *
   * Resets products.
   *
   * @param {string} subscriptionId Subscription ID.
   *
   * @param {string} resourceGroupName Resource Group ID.
   *
   * @param {ComplexModelClientUpdateOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.CatalogArray} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.CatalogArray} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  update(subscriptionId: string, resourceGroupName: string): Promise<Models.CatalogArray>;
  update(subscriptionId: string, resourceGroupName: string, options: Models.ComplexModelClientUpdateOptionalParams): Promise<Models.CatalogArray>;
  update(subscriptionId: string, resourceGroupName: string, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  update(subscriptionId: string, resourceGroupName: string, options: Models.ComplexModelClientUpdateOptionalParams, callback: msRest.ServiceCallback<Models.CatalogArray>): void;
  update(subscriptionId: string, resourceGroupName: string, options?: Models.ComplexModelClientUpdateOptionalParams, callback?: msRest.ServiceCallback<Models.CatalogArray>): any {
    return msRest.responseToBody(this.updateWithHttpOperationResponse.bind(this), subscriptionId, resourceGroupName, options, callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/Microsoft.Cache/Redis",
  urlParameters: [
    Parameters.subscriptionId0,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  responses: {
    200: {
      bodyMapper: Mappers.CatalogArray
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/Microsoft.Cache/Redis",
  urlParameters: [
    Parameters.subscriptionId1,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  requestBody: {
    parameterPath: {
      productDictionaryOfArray: [
        "options",
        "productDictionaryOfArray"
      ]
    },
    mapper: {
      ...Mappers.CatalogDictionaryOfArray,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CatalogDictionary
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/Microsoft.Cache/Redis",
  urlParameters: [
    Parameters.subscriptionId1,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  requestBody: {
    parameterPath: {
      productArrayOfDictionary: [
        "options",
        "productArrayOfDictionary"
      ]
    },
    mapper: {
      ...Mappers.CatalogArrayOfDictionary,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CatalogArray
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

export { ComplexModelClient, Models as ComplexModelModels, Mappers as ComplexModelMappers };
