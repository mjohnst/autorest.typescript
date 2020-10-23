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
import * as Mappers from "../models/pathItemsMappers";
import * as Parameters from "../models/parameters";
import { AutoRestUrlTestServiceContext } from "../autoRestUrlTestServiceContext";

/** Class representing a PathItems. */
export class PathItems {
  private readonly client: AutoRestUrlTestServiceContext;

  /**
   * Create a PathItems.
   * @param {AutoRestUrlTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestUrlTestServiceContext) {
    this.client = client;
  }

  /**
   * send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath',
   * localStringPath='localStringPath', globalStringQuery='globalStringQuery',
   * pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery'
   * @param localStringPath should contain value 'localStringPath'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getAllWithValues(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetAllWithValuesOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param localStringPath should contain value 'localStringPath'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param callback The callback
   */
  getAllWithValues(localStringPath: string, pathItemStringPath: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param localStringPath should contain value 'localStringPath'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param options The optional parameters
   * @param callback The callback
   */
  getAllWithValues(localStringPath: string, pathItemStringPath: string, options: Models.PathItemsGetAllWithValuesOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getAllWithValues(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetAllWithValuesOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        localStringPath,
        pathItemStringPath,
        options
      },
      getAllWithValuesOperationSpec,
      callback);
  }

  /**
   * send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath',
   * localStringPath='localStringPath', globalStringQuery=null,
   * pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery'
   * @param localStringPath should contain value 'localStringPath'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getGlobalQueryNull(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetGlobalQueryNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param localStringPath should contain value 'localStringPath'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param callback The callback
   */
  getGlobalQueryNull(localStringPath: string, pathItemStringPath: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param localStringPath should contain value 'localStringPath'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param options The optional parameters
   * @param callback The callback
   */
  getGlobalQueryNull(localStringPath: string, pathItemStringPath: string, options: Models.PathItemsGetGlobalQueryNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getGlobalQueryNull(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetGlobalQueryNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        localStringPath,
        pathItemStringPath,
        options
      },
      getGlobalQueryNullOperationSpec,
      callback);
  }

  /**
   * send globalStringPath=globalStringPath, pathItemStringPath='pathItemStringPath',
   * localStringPath='localStringPath', globalStringQuery=null,
   * pathItemStringQuery='pathItemStringQuery', localStringQuery=null
   * @param localStringPath should contain value 'localStringPath'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getGlobalAndLocalQueryNull(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetGlobalAndLocalQueryNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param localStringPath should contain value 'localStringPath'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param callback The callback
   */
  getGlobalAndLocalQueryNull(localStringPath: string, pathItemStringPath: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param localStringPath should contain value 'localStringPath'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param options The optional parameters
   * @param callback The callback
   */
  getGlobalAndLocalQueryNull(localStringPath: string, pathItemStringPath: string, options: Models.PathItemsGetGlobalAndLocalQueryNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getGlobalAndLocalQueryNull(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetGlobalAndLocalQueryNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        localStringPath,
        pathItemStringPath,
        options
      },
      getGlobalAndLocalQueryNullOperationSpec,
      callback);
  }

  /**
   * send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath',
   * localStringPath='localStringPath', globalStringQuery='globalStringQuery',
   * pathItemStringQuery=null, localStringQuery=null
   * @param localStringPath should contain value 'localStringPath'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  getLocalPathItemQueryNull(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetLocalPathItemQueryNullOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param localStringPath should contain value 'localStringPath'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param callback The callback
   */
  getLocalPathItemQueryNull(localStringPath: string, pathItemStringPath: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param localStringPath should contain value 'localStringPath'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param options The optional parameters
   * @param callback The callback
   */
  getLocalPathItemQueryNull(localStringPath: string, pathItemStringPath: string, options: Models.PathItemsGetLocalPathItemQueryNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getLocalPathItemQueryNull(localStringPath: string, pathItemStringPath: string, options?: Models.PathItemsGetLocalPathItemQueryNullOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        localStringPath,
        pathItemStringPath,
        options
      },
      getLocalPathItemQueryNullOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getAllWithValuesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/pathItemStringQuery/localStringQuery",
  urlParameters: [
    Parameters.localStringPath,
    Parameters.pathItemStringPath,
    Parameters.globalStringPath
  ],
  queryParameters: [
    Parameters.localStringQuery,
    Parameters.pathItemStringQuery,
    Parameters.globalStringQuery
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getGlobalQueryNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/localStringQuery",
  urlParameters: [
    Parameters.localStringPath,
    Parameters.pathItemStringPath,
    Parameters.globalStringPath
  ],
  queryParameters: [
    Parameters.localStringQuery,
    Parameters.pathItemStringQuery,
    Parameters.globalStringQuery
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getGlobalAndLocalQueryNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/null",
  urlParameters: [
    Parameters.localStringPath,
    Parameters.pathItemStringPath,
    Parameters.globalStringPath
  ],
  queryParameters: [
    Parameters.localStringQuery,
    Parameters.pathItemStringQuery,
    Parameters.globalStringQuery
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getLocalPathItemQueryNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/null/null",
  urlParameters: [
    Parameters.localStringPath,
    Parameters.pathItemStringPath,
    Parameters.globalStringPath
  ],
  queryParameters: [
    Parameters.localStringQuery,
    Parameters.pathItemStringQuery,
    Parameters.globalStringQuery
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
