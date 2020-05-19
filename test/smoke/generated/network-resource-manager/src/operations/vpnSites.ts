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
  VpnSitesGetResponse,
  VpnSite,
  VpnSitesCreateOrUpdateResponse,
  TagsObject,
  VpnSitesUpdateTagsResponse,
  VpnSitesListByResourceGroupResponse,
  VpnSitesListResponse,
  VpnSitesListByResourceGroupNextResponse,
  VpnSitesListNextResponse
} from "../models";

/**
 * Class representing a VpnSites.
 */
export class VpnSites {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class VpnSites class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves the details of a VPN site.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param vpnSiteName The name of the VpnSite being retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vpnSiteName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnSitesGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, vpnSiteName, options: operationOptions },
      getOperationSpec
    ) as Promise<VpnSitesGetResponse>;
  }

  /**
   * Creates a VpnSite resource if it doesn't exist else updates the existing VpnSite.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param vpnSiteName The name of the VpnSite being created or updated.
   * @param vpnSiteParameters Parameters supplied to create or update VpnSite.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    vpnSiteName: string,
    vpnSiteParameters: VpnSite,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<VpnSitesCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "azure-async-operation"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      vpnSiteName,
      vpnSiteParameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        VpnSitesCreateOrUpdateResponse
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
   * Updates VpnSite tags.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param vpnSiteName The name of the VpnSite being updated.
   * @param vpnSiteParameters Parameters supplied to update VpnSite tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    vpnSiteName: string,
    vpnSiteParameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<VpnSitesUpdateTagsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vpnSiteName,
        vpnSiteParameters,
        options: operationOptions
      },
      updateTagsOperationSpec
    ) as Promise<VpnSitesUpdateTagsResponse>;
  }

  /**
   * Deletes a VpnSite.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param vpnSiteName The name of the VpnSite being deleted.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    vpnSiteName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      vpnSiteName,
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
   * Lists all the vpnSites in a resource group.
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnSitesListByResourceGroupResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listByResourceGroupOperationSpec
    ) as Promise<VpnSitesListByResourceGroupResponse>;
  }

  /**
   * Lists all the VpnSites in a subscription.
   * @param options The options parameters.
   */
  list(options?: coreHttp.OperationOptions): Promise<VpnSitesListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOperationSpec
    ) as Promise<VpnSitesListResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The resource group name of the VpnSite.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnSitesListByResourceGroupNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options: operationOptions },
      listByResourceGroupNextOperationSpec
    ) as Promise<VpnSitesListByResourceGroupNextResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<VpnSitesListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<VpnSitesListNextResponse>;
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

const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites/{vpnSiteName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VpnSite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName7,
    Parameters.vpnSiteName
  ],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites/{vpnSiteName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VpnSite
    },
    201: {
      bodyMapper: Mappers.VpnSite
    },
    202: {
      bodyMapper: Mappers.VpnSite
    },
    204: {
      bodyMapper: Mappers.VpnSite
    }
  },
  requestBody: Parameters.vpnSiteParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName7,
    Parameters.vpnSiteName1
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites/{vpnSiteName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.VpnSite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.vpnSiteParameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName7,
    Parameters.vpnSiteName2
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites/{vpnSiteName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName7,
    Parameters.vpnSiteName3
  ],
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/vpnSites",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnSitesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName7
  ],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/vpnSites",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnSitesResult
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
      bodyMapper: Mappers.ListVpnSitesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink3,
    Parameters.resourceGroupName7
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListVpnSitesResult
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
