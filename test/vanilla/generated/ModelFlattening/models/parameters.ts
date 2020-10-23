/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const description: msRest.OperationParameter = {
  parameterPath: [
    "flattenParameterGroup",
    "description"
  ],
  mapper: {
    serializedName: "base_product_description",
    type: {
      name: "String"
    }
  }
};
export const genericValue: msRest.OperationParameter = {
  parameterPath: [
    "flattenParameterGroup",
    "genericValue"
  ],
  mapper: {
    serializedName: "details.max_product_image.generic_value",
    type: {
      name: "String"
    }
  }
};
export const maxProductDisplayName: msRest.OperationParameter = {
  parameterPath: [
    "flattenParameterGroup",
    "maxProductDisplayName"
  ],
  mapper: {
    required: true,
    serializedName: "details.max_product_display_name",
    type: {
      name: "String"
    }
  }
};
export const name: msRest.OperationURLParameter = {
  parameterPath: [
    "flattenParameterGroup",
    "name"
  ],
  mapper: {
    required: true,
    serializedName: "name",
    type: {
      name: "String"
    }
  }
};
export const odatavalue: msRest.OperationParameter = {
  parameterPath: [
    "flattenParameterGroup",
    "odatavalue"
  ],
  mapper: {
    serializedName: "details.max_product_image.@odata\\.value",
    type: {
      name: "String"
    }
  }
};
export const productId: msRest.OperationParameter = {
  parameterPath: [
    "flattenParameterGroup",
    "productId"
  ],
  mapper: {
    required: true,
    serializedName: "base_product_id",
    type: {
      name: "String"
    }
  }
};
