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
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { AutoRestResourceFlatteningTestServiceContext } from "./autoRestResourceFlatteningTestServiceContext";


class AutoRestResourceFlatteningTestService extends AutoRestResourceFlatteningTestServiceContext {
  /**
   * Initializes a new instance of the AutoRestResourceFlatteningTestService class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials, options?: Models.AutoRestResourceFlatteningTestServiceOptions) {
    super(credentials, options);
  }

  /**
   * Put External Resource as an Array
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putArray(options?: Models.AutoRestResourceFlatteningTestServicePutArrayOptionalParams): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  putArray(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  putArray(options: Models.AutoRestResourceFlatteningTestServicePutArrayOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  putArray(options?: Models.AutoRestResourceFlatteningTestServicePutArrayOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      putArrayOperationSpec,
      callback);
  }

  /**
   * Get External Resource as an Array
   * @param [options] The optional parameters
   * @returns Promise<Models.GetArrayResponse>
   */
  getArray(options?: coreHttp.RequestOptionsBase): Promise<Models.GetArrayResponse>;
  /**
   * @param callback The callback
   */
  getArray(callback: coreHttp.ServiceCallback<Models.FlattenedProduct[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getArray(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.FlattenedProduct[]>): void;
  getArray(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.FlattenedProduct[]>, callback?: coreHttp.ServiceCallback<Models.FlattenedProduct[]>): Promise<Models.GetArrayResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getArrayOperationSpec,
      callback) as Promise<Models.GetArrayResponse>;
  }

  /**
   * Put External Resource as a Dictionary
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putDictionary(options?: Models.AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  putDictionary(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  putDictionary(options: Models.AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  putDictionary(options?: Models.AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      putDictionaryOperationSpec,
      callback);
  }

  /**
   * Get External Resource as a Dictionary
   * @param [options] The optional parameters
   * @returns Promise<Models.GetDictionaryResponse>
   */
  getDictionary(options?: coreHttp.RequestOptionsBase): Promise<Models.GetDictionaryResponse>;
  /**
   * @param callback The callback
   */
  getDictionary(callback: coreHttp.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getDictionary(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>): void;
  getDictionary(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>, callback?: coreHttp.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>): Promise<Models.GetDictionaryResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getDictionaryOperationSpec,
      callback) as Promise<Models.GetDictionaryResponse>;
  }

  /**
   * Put External Resource as a ResourceCollection
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putResourceCollection(options?: Models.AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  putResourceCollection(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  putResourceCollection(options: Models.AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  putResourceCollection(options?: Models.AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      putResourceCollectionOperationSpec,
      callback);
  }

  /**
   * Get External Resource as a ResourceCollection
   * @param [options] The optional parameters
   * @returns Promise<Models.GetResourceCollectionResponse>
   */
  getResourceCollection(options?: coreHttp.RequestOptionsBase): Promise<Models.GetResourceCollectionResponse>;
  /**
   * @param callback The callback
   */
  getResourceCollection(callback: coreHttp.ServiceCallback<Models.ResourceCollection>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getResourceCollection(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.ResourceCollection>): void;
  getResourceCollection(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.ResourceCollection>, callback?: coreHttp.ServiceCallback<Models.ResourceCollection>): Promise<Models.GetResourceCollectionResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getResourceCollectionOperationSpec,
      callback) as Promise<Models.GetResourceCollectionResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const putArrayOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "azure/resource-flatten/array",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "resourceArray"
    ],
    mapper: {
      serializedName: "ResourceArray",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "Resource"
          }
        }
      }
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

const getArrayOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "azure/resource-flatten/array",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FlattenedProduct"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putDictionaryOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "azure/resource-flatten/dictionary",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "resourceDictionary"
    ],
    mapper: {
      serializedName: "ResourceDictionary",
      type: {
        name: "Dictionary",
        value: {
          type: {
            name: "Composite",
            className: "FlattenedProduct"
          }
        }
      }
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

const getDictionaryOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "azure/resource-flatten/dictionary",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "FlattenedProduct"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putResourceCollectionOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "azure/resource-flatten/resourcecollection",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "resourceComplexObject"
    ],
    mapper: Mappers.ResourceCollection
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getResourceCollectionOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "azure/resource-flatten/resourcecollection",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

export {
  AutoRestResourceFlatteningTestService,
  AutoRestResourceFlatteningTestServiceContext,
  Models as AutoRestResourceFlatteningTestServiceModels,
  Mappers as AutoRestResourceFlatteningTestServiceMappers
};
