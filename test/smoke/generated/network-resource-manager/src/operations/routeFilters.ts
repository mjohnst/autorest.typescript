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
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  RouteFiltersGetOptionalParams,
  RouteFiltersGetResponse,
  RouteFilter,
  RouteFiltersCreateOrUpdateResponse,
  TagsObject,
  RouteFiltersUpdateTagsResponse,
  RouteFiltersListByResourceGroupResponse,
  RouteFiltersListResponse,
  RouteFiltersListByResourceGroupNextResponse,
  RouteFiltersListNextResponse
} from "../models";

/**
 * Class representing a RouteFilters.
 */
export class RouteFilters {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class RouteFilters class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Deletes the specified route filter.
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    routeFilterName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      routeFilterName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      deleteOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets the specified route filter.
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    routeFilterName: string,
    options?: RouteFiltersGetOptionalParams
  ): Promise<RouteFiltersGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, routeFilterName, options: operationOptions },
      getOperationSpec
    ) as Promise<RouteFiltersGetResponse>;
  }

  /**
   * Creates or updates a route filter in a specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param routeFilterParameters Parameters supplied to the create or update route filter operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    routeFilterName: string,
    routeFilterParameters: RouteFilter,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<RouteFiltersCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "azure-async-operation"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      routeFilterName,
      routeFilterParameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        RouteFiltersCreateOrUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOrUpdateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "azure-async-operation"
    });
  }

  /**
   * Updates tags of a route filter.
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param parameters Parameters supplied to update route filter tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    routeFilterName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<RouteFiltersUpdateTagsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        routeFilterName,
        parameters,
        options: operationOptions
      },
      updateTagsOperationSpec
    ) as Promise<RouteFiltersUpdateTagsResponse>;
  }

  /**
   * Gets all route filters in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<RouteFiltersListByResourceGroupResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listByResourceGroupOperationSpec
    ) as Promise<RouteFiltersListByResourceGroupResponse>;
  }

  /**
   * Gets all route filters in a subscription.
   * @param options The options parameters.
   */
  list(options?: coreHttp.OperationOptions): Promise<RouteFiltersListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOperationSpec
    ) as Promise<RouteFiltersListResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<RouteFiltersListByResourceGroupNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options: operationOptions },
      listByResourceGroupNextOperationSpec
    ) as Promise<RouteFiltersListByResourceGroupNextResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<RouteFiltersListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<RouteFiltersListNextResponse>;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.routeFilterName
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilter
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.routeFilterName
  ],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilter
    },
    201: {
      bodyMapper: Mappers.RouteFilter
    },
    202: {
      bodyMapper: Mappers.RouteFilter
    },
    204: {
      bodyMapper: Mappers.RouteFilter
    }
  },
  requestBody: Parameters.routeFilterParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.routeFilterName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilter
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.routeFilterName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/routeFilters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilterListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  serializer
};
