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
  P2SVpnGatewaysGetResponse,
  P2SVpnGateway,
  P2SVpnGatewaysCreateOrUpdateResponse,
  TagsObject,
  P2SVpnGatewaysUpdateTagsResponse,
  P2SVpnGatewaysListByResourceGroupResponse,
  P2SVpnGatewaysListResponse,
  P2SVpnProfileParameters,
  P2SVpnGatewaysGenerateVpnProfileResponse,
  P2SVpnGatewaysGetP2SVpnConnectionHealthResponse,
  P2SVpnConnectionHealthRequest,
  P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedResponse,
  P2SVpnConnectionRequest,
  P2SVpnGatewaysListByResourceGroupNextResponse,
  P2SVpnGatewaysListNextResponse
} from "../models";

/**
 * Class representing a P2SVpnGateways.
 */
export class P2SVpnGateways {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class P2SVpnGateways class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Retrieves the details of a virtual wan p2s vpn gateway.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    gatewayName: string,
    options?: coreHttp.OperationOptions
  ): Promise<P2SVpnGatewaysGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, gatewayName, options: operationOptions },
      getOperationSpec
    ) as Promise<P2SVpnGatewaysGetResponse>;
  }

  /**
   * Creates a virtual wan p2s vpn gateway if it doesn't exist else updates the existing gateway.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param p2SVpnGatewayParameters Parameters supplied to create or Update a virtual wan p2s vpn
   *                                gateway.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    gatewayName: string,
    p2SVpnGatewayParameters: P2SVpnGateway,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<P2SVpnGatewaysCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "azure-async-operation"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      gatewayName,
      p2SVpnGatewayParameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        P2SVpnGatewaysCreateOrUpdateResponse
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
   * Updates virtual wan p2s vpn gateway tags.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param p2SVpnGatewayParameters Parameters supplied to update a virtual wan p2s vpn gateway tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    gatewayName: string,
    p2SVpnGatewayParameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<P2SVpnGatewaysUpdateTagsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        gatewayName,
        p2SVpnGatewayParameters,
        options: operationOptions
      },
      updateTagsOperationSpec
    ) as Promise<P2SVpnGatewaysUpdateTagsResponse>;
  }

  /**
   * Deletes a virtual wan p2s vpn gateway.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param gatewayName The name of the gateway.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    gatewayName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      gatewayName,
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
   * Lists all the P2SVpnGateways in a resource group.
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<P2SVpnGatewaysListByResourceGroupResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listByResourceGroupOperationSpec
    ) as Promise<P2SVpnGatewaysListByResourceGroupResponse>;
  }

  /**
   * Lists all the P2SVpnGateways in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: coreHttp.OperationOptions
  ): Promise<P2SVpnGatewaysListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOperationSpec
    ) as Promise<P2SVpnGatewaysListResponse>;
  }

  /**
   * Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param gatewayName The name of the P2SVpnGateway.
   * @param parameters Parameters supplied to the generate P2SVpnGateway VPN client package operation.
   * @param options The options parameters.
   */
  async generateVpnProfile(
    resourceGroupName: string,
    gatewayName: string,
    parameters: P2SVpnProfileParameters,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<P2SVpnGatewaysGenerateVpnProfileResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      gatewayName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        P2SVpnGatewaysGenerateVpnProfileResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      generateVpnProfileOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: generateVpnProfileOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets the connection health of P2S clients of the virtual wan P2SVpnGateway in the specified resource
   * group.
   * @param resourceGroupName The name of the resource group.
   * @param gatewayName The name of the P2SVpnGateway.
   * @param options The options parameters.
   */
  async getP2SVpnConnectionHealth(
    resourceGroupName: string,
    gatewayName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<P2SVpnGatewaysGetP2SVpnConnectionHealthResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      gatewayName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        P2SVpnGatewaysGetP2SVpnConnectionHealthResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      getP2SVpnConnectionHealthOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: getP2SVpnConnectionHealthOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets the sas url to get the connection health detail of P2S clients of the virtual wan P2SVpnGateway
   * in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param gatewayName The name of the P2SVpnGateway.
   * @param request Request parameters supplied to get p2s vpn connections detailed health.
   * @param options The options parameters.
   */
  async getP2SVpnConnectionHealthDetailed(
    resourceGroupName: string,
    gatewayName: string,
    request: P2SVpnConnectionHealthRequest,
    options?: coreHttp.OperationOptions
  ): Promise<
    LROPoller<P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedResponse>
  > {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      gatewayName,
      request,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      getP2SVpnConnectionHealthDetailedOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: getP2SVpnConnectionHealthDetailedOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Disconnect P2S vpn connections of the virtual wan P2SVpnGateway in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param p2SVpnGatewayName The name of the P2S Vpn Gateway.
   * @param request The parameters are supplied to disconnect p2s vpn connections.
   * @param options The options parameters.
   */
  async disconnectP2SVpnConnections(
    resourceGroupName: string,
    p2SVpnGatewayName: string,
    request: P2SVpnConnectionRequest,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      p2SVpnGatewayName,
      request,
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
      disconnectP2SVpnConnectionsOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: disconnectP2SVpnConnectionsOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The resource group name of the P2SVpnGateway.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<P2SVpnGatewaysListByResourceGroupNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options: operationOptions },
      listByResourceGroupNextOperationSpec
    ) as Promise<P2SVpnGatewaysListByResourceGroupNextResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<P2SVpnGatewaysListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<P2SVpnGatewaysListNextResponse>;
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.gatewayName,
    Parameters.resourceGroupName11
  ],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    201: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    202: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    204: {
      bodyMapper: Mappers.P2SVpnGateway
    }
  },
  requestBody: Parameters.p2SVpnGatewayParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.gatewayName,
    Parameters.resourceGroupName11
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.p2SVpnGatewayParameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.gatewayName,
    Parameters.resourceGroupName11
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.gatewayName,
    Parameters.resourceGroupName11
  ],
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListP2SVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName11
  ],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/p2svpnGateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListP2SVpnGatewaysResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const generateVpnProfileOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}/generatevpnprofile",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VpnProfileResponse
    },
    201: {
      bodyMapper: Mappers.VpnProfileResponse
    },
    202: {
      bodyMapper: Mappers.VpnProfileResponse
    },
    204: {
      bodyMapper: Mappers.VpnProfileResponse
    }
  },
  requestBody: Parameters.parameters88,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName1
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getP2SVpnConnectionHealthOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}/getP2sVpnConnectionHealth",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    201: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    202: {
      bodyMapper: Mappers.P2SVpnGateway
    },
    204: {
      bodyMapper: Mappers.P2SVpnGateway
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName1
  ],
  serializer
};
const getP2SVpnConnectionHealthDetailedOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{gatewayName}/getP2sVpnConnectionHealthDetailed",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.P2SVpnConnectionHealth
    },
    201: {
      bodyMapper: Mappers.P2SVpnConnectionHealth
    },
    202: {
      bodyMapper: Mappers.P2SVpnConnectionHealth
    },
    204: {
      bodyMapper: Mappers.P2SVpnConnectionHealth
    }
  },
  requestBody: Parameters.request2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.gatewayName1
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const disconnectP2SVpnConnectionsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/p2svpnGateways/{p2sVpnGatewayName}/disconnectP2sVpnConnections",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  requestBody: Parameters.request3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.p2SVpnGatewayName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListP2SVpnGatewaysResult
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
    Parameters.resourceGroupName11
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListP2SVpnGatewaysResult
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
