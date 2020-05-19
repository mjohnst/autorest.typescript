/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import { UsagesListResponse, UsagesListNextResponse } from "../models";

/**
 * Class representing a Usages.
 */
export class Usages {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class Usages class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * List network usages for a subscription.
   * @param location The location where resource usage is queried.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: coreHttp.OperationOptions
  ): Promise<UsagesListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { location, options: operationOptions },
      listOperationSpec
    ) as Promise<UsagesListResponse>;
  }

  /**
   * ListNext
   * @param location The location where resource usage is queried.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    location: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<UsagesListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { location, nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<UsagesListNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/locations/{location}/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsagesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location5
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsagesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location5
  ],
  serializer
};
