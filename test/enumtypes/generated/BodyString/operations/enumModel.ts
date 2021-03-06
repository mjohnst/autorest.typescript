/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/enumModelMappers";
import { AutoRestSwaggerBATServiceContext } from "../autoRestSwaggerBATServiceContext";

/** Class representing a EnumModel. */
export class EnumModel {
  private readonly client: AutoRestSwaggerBATServiceContext;

  /**
   * Create a EnumModel.
   * @param {AutoRestSwaggerBATServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestSwaggerBATServiceContext) {
    this.client = client;
  }

  /**
   * Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnumModelGetNotExpandableResponse>
   */
  getNotExpandable(options?: coreHttp.RequestOptionsBase): Promise<Models.EnumModelGetNotExpandableResponse>;
  /**
   * @param callback The callback
   */
  getNotExpandable(callback: coreHttp.ServiceCallback<Models.Colors>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getNotExpandable(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.Colors>): void;
  getNotExpandable(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.Colors>, callback?: coreHttp.ServiceCallback<Models.Colors>): Promise<Models.EnumModelGetNotExpandableResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNotExpandableOperationSpec,
      callback) as Promise<Models.EnumModelGetNotExpandableResponse>;
  }

  /**
   * Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'
   * @param stringBody Possible values include: 'red color', 'green-color', 'blue_color'
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putNotExpandable(stringBody: Models.Colors, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param stringBody Possible values include: 'red color', 'green-color', 'blue_color'
   * @param callback The callback
   */
  putNotExpandable(stringBody: Models.Colors, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param stringBody Possible values include: 'red color', 'green-color', 'blue_color'
   * @param options The optional parameters
   * @param callback The callback
   */
  putNotExpandable(stringBody: Models.Colors, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putNotExpandable(stringBody: Models.Colors, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        stringBody,
        options
      },
      putNotExpandableOperationSpec,
      callback);
  }

  /**
   * Get enum value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnumModelGetReferencedResponse>
   */
  getReferenced(options?: coreHttp.RequestOptionsBase): Promise<Models.EnumModelGetReferencedResponse>;
  /**
   * @param callback The callback
   */
  getReferenced(callback: coreHttp.ServiceCallback<Models.Colors>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getReferenced(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.Colors>): void;
  getReferenced(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.Colors>, callback?: coreHttp.ServiceCallback<Models.Colors>): Promise<Models.EnumModelGetReferencedResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getReferencedOperationSpec,
      callback) as Promise<Models.EnumModelGetReferencedResponse>;
  }

  /**
   * Sends value 'red color' from enumeration of 'red color', 'green-color', 'blue_color'
   * @param enumStringBody Possible values include: 'red color', 'green-color', 'blue_color'
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putReferenced(enumStringBody: Models.Colors, options?: coreHttp.RequestOptionsBase): Promise<coreHttp.RestResponse>;
  /**
   * @param enumStringBody Possible values include: 'red color', 'green-color', 'blue_color'
   * @param callback The callback
   */
  putReferenced(enumStringBody: Models.Colors, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param enumStringBody Possible values include: 'red color', 'green-color', 'blue_color'
   * @param options The optional parameters
   * @param callback The callback
   */
  putReferenced(enumStringBody: Models.Colors, options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<void>): void;
  putReferenced(enumStringBody: Models.Colors, options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        enumStringBody,
        options
      },
      putReferencedOperationSpec,
      callback);
  }

  /**
   * Get value 'green-color' from the constant.
   * @param [options] The optional parameters
   * @returns Promise<Models.EnumModelGetReferencedConstantResponse>
   */
  getReferencedConstant(options?: coreHttp.RequestOptionsBase): Promise<Models.EnumModelGetReferencedConstantResponse>;
  /**
   * @param callback The callback
   */
  getReferencedConstant(callback: coreHttp.ServiceCallback<Models.RefColorConstant>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getReferencedConstant(options: coreHttp.RequestOptionsBase, callback: coreHttp.ServiceCallback<Models.RefColorConstant>): void;
  getReferencedConstant(options?: coreHttp.RequestOptionsBase | coreHttp.ServiceCallback<Models.RefColorConstant>, callback?: coreHttp.ServiceCallback<Models.RefColorConstant>): Promise<Models.EnumModelGetReferencedConstantResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getReferencedConstantOperationSpec,
      callback) as Promise<Models.EnumModelGetReferencedConstantResponse>;
  }

  /**
   * Sends value 'green-color' from a constant
   * @param [options] The optional parameters
   * @returns Promise<coreHttp.RestResponse>
   */
  putReferencedConstant(options?: Models.EnumModelPutReferencedConstantOptionalParams): Promise<coreHttp.RestResponse>;
  /**
   * @param callback The callback
   */
  putReferencedConstant(callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  putReferencedConstant(options: Models.EnumModelPutReferencedConstantOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  putReferencedConstant(options?: Models.EnumModelPutReferencedConstantOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putReferencedConstantOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers);
const getNotExpandableOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "string/enum/notExpandable",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Enum",
          allowedValues: [
            "red color",
            "green-color",
            "blue_color"
          ]
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putNotExpandableOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "string/enum/notExpandable",
  requestBody: {
    parameterPath: "stringBody",
    mapper: {
      required: true,
      serializedName: "stringBody",
      type: {
        name: "Enum",
        allowedValues: [
          "red color",
          "green-color",
          "blue_color"
        ]
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

const getReferencedOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "string/enum/Referenced",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Enum",
          allowedValues: [
            "red color",
            "green-color",
            "blue_color"
          ]
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putReferencedOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "string/enum/Referenced",
  requestBody: {
    parameterPath: "enumStringBody",
    mapper: {
      required: true,
      serializedName: "enumStringBody",
      type: {
        name: "Enum",
        allowedValues: [
          "red color",
          "green-color",
          "blue_color"
        ]
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

const getReferencedConstantOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "GET",
  path: "string/enum/ReferencedConstant",
  responses: {
    200: {
      bodyMapper: Mappers.RefColorConstant
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putReferencedConstantOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "string/enum/ReferencedConstant",
  requestBody: {
    parameterPath: {
      field1: [
        "options",
        "field1"
      ]
    },
    mapper: {
      ...Mappers.RefColorConstant,
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
