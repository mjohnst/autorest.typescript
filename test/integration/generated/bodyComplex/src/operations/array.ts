/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/mappers";
import { BodyComplexClient } from "../bodyComplexClient";

/**
 * Class representing a Array.
 */
export class Array {
  private readonly client: BodyComplexClient;

  /**
   * Initialize a new instance of the class Array class.
   * @param client Reference to the service client
   */
  constructor(client: BodyComplexClient) {
    this.client = client;
  }

  /**
   * Get complex types with array property
   * @param options The options parameters.
   */
  getValid(options?: coreHttp.RequestOptionsBase): Promise<any>;
  /**
   * @param callback The callback.
   */
  getValid(callback: coreHttp.ServiceCallback<any>): void;
  /**
   * @param options The options parameters.
   * @param callback The callback.
   */
  getValid(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<any>): void;
  getValid(
    options?: coreHttp.RequestOptionsBase,
    callback?: coreHttp.ServiceCallback<any>
  ): Promise<any> {
    return this.client.sendOperationRequest({ options }, getValidOperationSpec, callback);
  }

  /**
   * Put complex types with array property
   * @param complexBody Please put an array with 4 items: "1, 2, 3, 4", "", null, "&S#$(*Y", "The quick brown fox jumps over the lazy dog"
   * @param options The options parameters.
   */
  putValid(complexBody: Models.ArrayWrapper, options?: coreHttp.RequestOptionsBase): Promise<any>;
  /**
   * @param complexBody Please put an array with 4 items: "1, 2, 3, 4", "", null, "&S#$(*Y", "The quick brown fox jumps over the lazy dog"
   * @param callback The callback.
   */
  putValid(complexBody: Models.ArrayWrapper, callback: coreHttp.ServiceCallback<any>): void;
  /**
   * @param complexBody Please put an array with 4 items: "1, 2, 3, 4", "", null, "&S#$(*Y", "The quick brown fox jumps over the lazy dog"
   * @param options The options parameters.
   * @param callback The callback.
   */
  putValid(
    complexBody: Models.ArrayWrapper,
    options: coreHttp.RequestOptionsBase,
    callback: coreHttp.ServiceCallback<any>
  ): void;
  putValid(
    complexBody: Models.ArrayWrapper,
    options?: coreHttp.RequestOptionsBase,
    callback?: coreHttp.ServiceCallback<any>
  ): Promise<any> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putValidOperationSpec,
      callback
    );
  }

  /**
   * Get complex types with array property which is empty
   * @param options The options parameters.
   */
  getEmpty(options?: coreHttp.RequestOptionsBase): Promise<any>;
  /**
   * @param callback The callback.
   */
  getEmpty(callback: coreHttp.ServiceCallback<any>): void;
  /**
   * @param options The options parameters.
   * @param callback The callback.
   */
  getEmpty(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<any>): void;
  getEmpty(
    options?: coreHttp.RequestOptionsBase,
    callback?: coreHttp.ServiceCallback<any>
  ): Promise<any> {
    return this.client.sendOperationRequest({ options }, getEmptyOperationSpec, callback);
  }

  /**
   * Put complex types with array property which is empty
   * @param complexBody Please put an array with 4 items: "1, 2, 3, 4", "", null, "&S#$(*Y", "The quick brown fox jumps over the lazy dog"
   * @param options The options parameters.
   */
  putEmpty(complexBody: Models.ArrayWrapper, options?: coreHttp.RequestOptionsBase): Promise<any>;
  /**
   * @param complexBody Please put an array with 4 items: "1, 2, 3, 4", "", null, "&S#$(*Y", "The quick brown fox jumps over the lazy dog"
   * @param callback The callback.
   */
  putEmpty(complexBody: Models.ArrayWrapper, callback: coreHttp.ServiceCallback<any>): void;
  /**
   * @param complexBody Please put an array with 4 items: "1, 2, 3, 4", "", null, "&S#$(*Y", "The quick brown fox jumps over the lazy dog"
   * @param options The options parameters.
   * @param callback The callback.
   */
  putEmpty(
    complexBody: Models.ArrayWrapper,
    options: coreHttp.RequestOptionsBase,
    callback: coreHttp.ServiceCallback<any>
  ): void;
  putEmpty(
    complexBody: Models.ArrayWrapper,
    options?: coreHttp.RequestOptionsBase,
    callback?: coreHttp.ServiceCallback<any>
  ): Promise<any> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putEmptyOperationSpec,
      callback
    );
  }

  /**
   * Get complex types with array property while server doesn't provide a response payload
   * @param options The options parameters.
   */
  getNotProvided(options?: coreHttp.RequestOptionsBase): Promise<any>;
  /**
   * @param callback The callback.
   */
  getNotProvided(callback: coreHttp.ServiceCallback<any>): void;
  /**
   * @param options The options parameters.
   * @param callback The callback.
   */
  getNotProvided(
    options: coreHttp.RequestOptionsBase,
    callback: coreHttp.ServiceCallback<any>
  ): void;
  getNotProvided(
    options?: coreHttp.RequestOptionsBase,
    callback?: coreHttp.ServiceCallback<any>
  ): Promise<any> {
    return this.client.sendOperationRequest({ options }, getNotProvidedOperationSpec, callback);
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers);

const getValidOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/array/valid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
const putValidOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/array/valid",
  httpMethod: "PUT",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: {
    parameterPath: "complexBody",
    mapper: Mappers.ArrayWrapper
  },
  serializer
};
const getEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/array/empty",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
const putEmptyOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/array/empty",
  httpMethod: "PUT",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: {
    parameterPath: "complexBody",
    mapper: Mappers.ArrayWrapper
  },
  serializer
};
const getNotProvidedOperationSpec: coreHttp.OperationSpec = {
  path: "/complex/array/notprovided",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
