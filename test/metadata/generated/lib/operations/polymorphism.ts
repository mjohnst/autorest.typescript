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
import * as Models from "../models";
import * as Mappers from "../models/polymorphismMappers";
import { AutoRestComplexTestServiceContext } from "../autoRestComplexTestServiceContext";

/** Class representing a Polymorphism. */
export class Polymorphism {
  private readonly client: AutoRestComplexTestServiceContext;

  /**
   * Create a Polymorphism.
   * @param {AutoRestComplexTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestComplexTestServiceContext) {
    this.client = client;
  }

  /**
   * Get complex types that are polymorphic
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.FishUnion>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getValidOperationSpec);
  }

  /**
   * Put complex types that are polymorphic
   *
   * @param {FishUnion} complexBody Please put a salmon that looks like this:
   * {
   * 'fishtype':'Salmon',
   * 'location':'alaska',
   * 'iswild':true,
   * 'species':'king',
   * 'length':1.0,
   * 'siblings':[
   * {
   * 'fishtype':'Shark',
   * 'age':6,
   * 'birthday': '2012-01-05T01:00:00Z',
   * 'length':20.0,
   * 'species':'predator',
   * },
   * {
   * 'fishtype':'Sawshark',
   * 'age':105,
   * 'birthday': '1900-01-05T01:00:00Z',
   * 'length':10.0,
   * 'picture': new Buffer([255, 255, 255, 255, 254]).toString('base64'),
   * 'species':'dangerous',
   * },
   * {
   * 'fishtype': 'goblin',
   * 'age': 1,
   * 'birthday': '2015-08-08T00:00:00Z',
   * 'length': 30.0,
   * 'species': 'scary',
   * 'jawsize': 5
   * }
   * ]
   * };
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putValidWithHttpOperationResponse(complexBody: Models.FishUnion, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putValidOperationSpec);
  }

  /**
   * Get complex types that are polymorphic, but not at the root of the hierarchy; also have
   * additional properties
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getComplicatedWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SalmonUnion>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getComplicatedOperationSpec);
  }

  /**
   * Put complex types that are polymorphic, but not at the root of the hierarchy; also have
   * additional properties
   *
   * @param {SalmonUnion} complexBody
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putComplicatedWithHttpOperationResponse(complexBody: Models.SalmonUnion, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putComplicatedOperationSpec);
  }

  /**
   * Put complex types that are polymorphic, omitting the discriminator
   *
   * @param {SalmonUnion} complexBody
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putMissingDiscriminatorWithHttpOperationResponse(complexBody: Models.SalmonUnion, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SalmonUnion>> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putMissingDiscriminatorOperationSpec);
  }

  /**
   * Put complex types that are polymorphic, attempting to omit required 'birthday' field - the
   * request should not be allowed from the client
   *
   * @param {FishUnion} complexBody Please attempt put a sawshark that looks like this, the client
   * should not allow this data to be sent:
   * {
   * "fishtype": "sawshark",
   * "species": "snaggle toothed",
   * "length": 18.5,
   * "age": 2,
   * "birthday": "2013-06-01T01:00:00Z",
   * "location": "alaska",
   * "picture": base64(FF FF FF FF FE),
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "birthday": "2012-01-05T01:00:00Z",
   * "length": 20,
   * "age": 6
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "picture": base64(FF FF FF FF FE),
   * "length": 10,
   * "age": 105
   * }
   * ]
   * }
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putValidMissingRequiredWithHttpOperationResponse(complexBody: Models.FishUnion, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        complexBody,
        options
      },
      putValidMissingRequiredOperationSpec);
  }

  /**
   * Get complex types that are polymorphic
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.FishUnion} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.FishUnion} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getValid(): Promise<Models.FishUnion>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.FishUnion>;
  getValid(callback: msRest.ServiceCallback<Models.FishUnion>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FishUnion>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.FishUnion>): any {
    return msRest.responseToBody(this.getValidWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Put complex types that are polymorphic
   *
   * @param {FishUnion} complexBody Please put a salmon that looks like this:
   * {
   * 'fishtype':'Salmon',
   * 'location':'alaska',
   * 'iswild':true,
   * 'species':'king',
   * 'length':1.0,
   * 'siblings':[
   * {
   * 'fishtype':'Shark',
   * 'age':6,
   * 'birthday': '2012-01-05T01:00:00Z',
   * 'length':20.0,
   * 'species':'predator',
   * },
   * {
   * 'fishtype':'Sawshark',
   * 'age':105,
   * 'birthday': '1900-01-05T01:00:00Z',
   * 'length':10.0,
   * 'picture': new Buffer([255, 255, 255, 255, 254]).toString('base64'),
   * 'species':'dangerous',
   * },
   * {
   * 'fishtype': 'goblin',
   * 'age': 1,
   * 'birthday': '2015-08-08T00:00:00Z',
   * 'length': 30.0,
   * 'species': 'scary',
   * 'jawsize': 5
   * }
   * ]
   * };
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  putValid(complexBody: Models.FishUnion): Promise<void>;
  putValid(complexBody: Models.FishUnion, options: msRest.RequestOptionsBase): Promise<void>;
  putValid(complexBody: Models.FishUnion, callback: msRest.ServiceCallback<void>): void;
  putValid(complexBody: Models.FishUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putValid(complexBody: Models.FishUnion, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.putValidWithHttpOperationResponse.bind(this), complexBody, options, callback);
  }

  /**
   * Get complex types that are polymorphic, but not at the root of the hierarchy; also have
   * additional properties
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.SalmonUnion} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.SalmonUnion} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getComplicated(): Promise<Models.SalmonUnion>;
  getComplicated(options: msRest.RequestOptionsBase): Promise<Models.SalmonUnion>;
  getComplicated(callback: msRest.ServiceCallback<Models.SalmonUnion>): void;
  getComplicated(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SalmonUnion>): void;
  getComplicated(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SalmonUnion>): any {
    return msRest.responseToBody(this.getComplicatedWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Put complex types that are polymorphic, but not at the root of the hierarchy; also have
   * additional properties
   *
   * @param {SalmonUnion} complexBody
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  putComplicated(complexBody: Models.SalmonUnion): Promise<void>;
  putComplicated(complexBody: Models.SalmonUnion, options: msRest.RequestOptionsBase): Promise<void>;
  putComplicated(complexBody: Models.SalmonUnion, callback: msRest.ServiceCallback<void>): void;
  putComplicated(complexBody: Models.SalmonUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putComplicated(complexBody: Models.SalmonUnion, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.putComplicatedWithHttpOperationResponse.bind(this), complexBody, options, callback);
  }

  /**
   * Put complex types that are polymorphic, omitting the discriminator
   *
   * @param {SalmonUnion} complexBody
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.SalmonUnion} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.SalmonUnion} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  putMissingDiscriminator(complexBody: Models.SalmonUnion): Promise<Models.SalmonUnion>;
  putMissingDiscriminator(complexBody: Models.SalmonUnion, options: msRest.RequestOptionsBase): Promise<Models.SalmonUnion>;
  putMissingDiscriminator(complexBody: Models.SalmonUnion, callback: msRest.ServiceCallback<Models.SalmonUnion>): void;
  putMissingDiscriminator(complexBody: Models.SalmonUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SalmonUnion>): void;
  putMissingDiscriminator(complexBody: Models.SalmonUnion, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SalmonUnion>): any {
    return msRest.responseToBody(this.putMissingDiscriminatorWithHttpOperationResponse.bind(this), complexBody, options, callback);
  }

  /**
   * Put complex types that are polymorphic, attempting to omit required 'birthday' field - the
   * request should not be allowed from the client
   *
   * @param {FishUnion} complexBody Please attempt put a sawshark that looks like this, the client
   * should not allow this data to be sent:
   * {
   * "fishtype": "sawshark",
   * "species": "snaggle toothed",
   * "length": 18.5,
   * "age": 2,
   * "birthday": "2013-06-01T01:00:00Z",
   * "location": "alaska",
   * "picture": base64(FF FF FF FF FE),
   * "siblings": [
   * {
   * "fishtype": "shark",
   * "species": "predator",
   * "birthday": "2012-01-05T01:00:00Z",
   * "length": 20,
   * "age": 6
   * },
   * {
   * "fishtype": "sawshark",
   * "species": "dangerous",
   * "picture": base64(FF FF FF FF FE),
   * "length": 10,
   * "age": 105
   * }
   * ]
   * }
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  putValidMissingRequired(complexBody: Models.FishUnion): Promise<void>;
  putValidMissingRequired(complexBody: Models.FishUnion, options: msRest.RequestOptionsBase): Promise<void>;
  putValidMissingRequired(complexBody: Models.FishUnion, callback: msRest.ServiceCallback<void>): void;
  putValidMissingRequired(complexBody: Models.FishUnion, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  putValidMissingRequired(complexBody: Models.FishUnion, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.putValidMissingRequiredWithHttpOperationResponse.bind(this), complexBody, options, callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/polymorphism/valid",
  responses: {
    200: {
      bodyMapper: Mappers.Fish
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/polymorphism/valid",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.Fish,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getComplicatedOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/polymorphism/complicated",
  responses: {
    200: {
      bodyMapper: Mappers.Salmon
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putComplicatedOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/polymorphism/complicated",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.Salmon,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putMissingDiscriminatorOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/polymorphism/missingdiscriminator",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.Salmon,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Salmon
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putValidMissingRequiredOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/polymorphism/missingrequired/invalid",
  requestBody: {
    parameterPath: "complexBody",
    mapper: {
      ...Mappers.Fish,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
