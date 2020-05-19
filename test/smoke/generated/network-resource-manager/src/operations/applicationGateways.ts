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
  ApplicationGatewaysGetResponse,
  ApplicationGateway,
  ApplicationGatewaysCreateOrUpdateResponse,
  TagsObject,
  ApplicationGatewaysUpdateTagsResponse,
  ApplicationGatewaysListResponse,
  ApplicationGatewaysListAllResponse,
  ApplicationGatewaysBackendHealthOptionalParams,
  ApplicationGatewaysBackendHealthResponse,
  ApplicationGatewayOnDemandProbe,
  ApplicationGatewaysBackendHealthOnDemandOptionalParams,
  ApplicationGatewaysBackendHealthOnDemandResponse,
  ApplicationGatewaysListAvailableServerVariablesResponse,
  ApplicationGatewaysListAvailableRequestHeadersResponse,
  ApplicationGatewaysListAvailableResponseHeadersResponse,
  ApplicationGatewaysListAvailableWafRuleSetsResponse,
  ApplicationGatewaysListAvailableSslOptionsResponse,
  ApplicationGatewaysListAvailableSslPredefinedPoliciesResponse,
  ApplicationGatewaysGetSslPredefinedPolicyResponse,
  ApplicationGatewaysListNextResponse,
  ApplicationGatewaysListAllNextResponse,
  ApplicationGatewaysListAvailableSslPredefinedPoliciesNextResponse
} from "../models";

/**
 * Class representing a ApplicationGateways.
 */
export class ApplicationGateways {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class ApplicationGateways class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Deletes the specified application gateway.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    applicationGatewayName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      applicationGatewayName,
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
   * Gets the specified application gateway.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    applicationGatewayName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationGatewaysGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, applicationGatewayName, options: operationOptions },
      getOperationSpec
    ) as Promise<ApplicationGatewaysGetResponse>;
  }

  /**
   * Creates or updates the specified application gateway.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param parameters Parameters supplied to the create or update application gateway operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    applicationGatewayName: string,
    parameters: ApplicationGateway,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<ApplicationGatewaysCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "azure-async-operation"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      applicationGatewayName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        ApplicationGatewaysCreateOrUpdateResponse
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
   * Updates the specified application gateway tags.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param parameters Parameters supplied to update application gateway tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    applicationGatewayName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationGatewaysUpdateTagsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        applicationGatewayName,
        parameters,
        options: operationOptions
      },
      updateTagsOperationSpec
    ) as Promise<ApplicationGatewaysUpdateTagsResponse>;
  }

  /**
   * Lists all application gateways in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationGatewaysListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listOperationSpec
    ) as Promise<ApplicationGatewaysListResponse>;
  }

  /**
   * Gets all the application gateways in a subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationGatewaysListAllResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listAllOperationSpec
    ) as Promise<ApplicationGatewaysListAllResponse>;
  }

  /**
   * Starts the specified application gateway.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param options The options parameters.
   */
  async start(
    resourceGroupName: string,
    applicationGatewayName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      applicationGatewayName,
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
      startOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: startOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Stops the specified application gateway in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param options The options parameters.
   */
  async stop(
    resourceGroupName: string,
    applicationGatewayName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      applicationGatewayName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    const initialOperationResult = await sendOperation(args, stopOperationSpec);

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: stopOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets the backend health of the specified application gateway in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param options The options parameters.
   */
  async backendHealth(
    resourceGroupName: string,
    applicationGatewayName: string,
    options?: ApplicationGatewaysBackendHealthOptionalParams
  ): Promise<LROPoller<ApplicationGatewaysBackendHealthResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      applicationGatewayName,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        ApplicationGatewaysBackendHealthResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      backendHealthOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: backendHealthOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets the backend health for given combination of backend pool and http setting of the specified
   * application gateway in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param probeRequest Request body for on-demand test probe operation.
   * @param options The options parameters.
   */
  async backendHealthOnDemand(
    resourceGroupName: string,
    applicationGatewayName: string,
    probeRequest: ApplicationGatewayOnDemandProbe,
    options?: ApplicationGatewaysBackendHealthOnDemandOptionalParams
  ): Promise<LROPoller<ApplicationGatewaysBackendHealthOnDemandResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options,
      "location"
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      applicationGatewayName,
      probeRequest,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        ApplicationGatewaysBackendHealthOnDemandResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      backendHealthOnDemandOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: backendHealthOnDemandOperationSpec,
      initialOperationResult,
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Lists all available server variables.
   * @param options The options parameters.
   */
  listAvailableServerVariables(
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationGatewaysListAvailableServerVariablesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listAvailableServerVariablesOperationSpec
    ) as Promise<ApplicationGatewaysListAvailableServerVariablesResponse>;
  }

  /**
   * Lists all available request headers.
   * @param options The options parameters.
   */
  listAvailableRequestHeaders(
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationGatewaysListAvailableRequestHeadersResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listAvailableRequestHeadersOperationSpec
    ) as Promise<ApplicationGatewaysListAvailableRequestHeadersResponse>;
  }

  /**
   * Lists all available response headers.
   * @param options The options parameters.
   */
  listAvailableResponseHeaders(
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationGatewaysListAvailableResponseHeadersResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listAvailableResponseHeadersOperationSpec
    ) as Promise<ApplicationGatewaysListAvailableResponseHeadersResponse>;
  }

  /**
   * Lists all available web application firewall rule sets.
   * @param options The options parameters.
   */
  listAvailableWafRuleSets(
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationGatewaysListAvailableWafRuleSetsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listAvailableWafRuleSetsOperationSpec
    ) as Promise<ApplicationGatewaysListAvailableWafRuleSetsResponse>;
  }

  /**
   * Lists available Ssl options for configuring Ssl policy.
   * @param options The options parameters.
   */
  listAvailableSslOptions(
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationGatewaysListAvailableSslOptionsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listAvailableSslOptionsOperationSpec
    ) as Promise<ApplicationGatewaysListAvailableSslOptionsResponse>;
  }

  /**
   * Lists all SSL predefined policies for configuring Ssl policy.
   * @param options The options parameters.
   */
  listAvailableSslPredefinedPolicies(
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationGatewaysListAvailableSslPredefinedPoliciesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listAvailableSslPredefinedPoliciesOperationSpec
    ) as Promise<ApplicationGatewaysListAvailableSslPredefinedPoliciesResponse>;
  }

  /**
   * Gets Ssl predefined policy with the specified policy name.
   * @param predefinedPolicyName Name of Ssl predefined policy.
   * @param options The options parameters.
   */
  getSslPredefinedPolicy(
    predefinedPolicyName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationGatewaysGetSslPredefinedPolicyResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { predefinedPolicyName, options: operationOptions },
      getSslPredefinedPolicyOperationSpec
    ) as Promise<ApplicationGatewaysGetSslPredefinedPolicyResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationGatewaysListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<ApplicationGatewaysListNextResponse>;
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  listAllNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ApplicationGatewaysListAllNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listAllNextOperationSpec
    ) as Promise<ApplicationGatewaysListAllNextResponse>;
  }

  /**
   * ListAvailableSslPredefinedPoliciesNext
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListAvailableSslPredefinedPolicies method.
   * @param options The options parameters.
   */
  listAvailableSslPredefinedPoliciesNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    ApplicationGatewaysListAvailableSslPredefinedPoliciesNextResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listAvailableSslPredefinedPoliciesNextOperationSpec
    ) as Promise<
      ApplicationGatewaysListAvailableSslPredefinedPoliciesNextResponse
    >;
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId
  ],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGateway
    },
    201: {
      bodyMapper: Mappers.ApplicationGateway
    },
    202: {
      bodyMapper: Mappers.ApplicationGateway
    },
    204: {
      bodyMapper: Mappers.ApplicationGateway
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGateway
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
    Parameters.applicationGatewayName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayListResult
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
const listAllOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const startOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/start",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId
  ],
  serializer
};
const stopOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/stop",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId
  ],
  serializer
};
const backendHealthOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/backendhealth",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayBackendHealth
    },
    201: {
      bodyMapper: Mappers.ApplicationGatewayBackendHealth
    },
    202: {
      bodyMapper: Mappers.ApplicationGatewayBackendHealth
    },
    204: {
      bodyMapper: Mappers.ApplicationGatewayBackendHealth
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId
  ],
  serializer
};
const backendHealthOnDemandOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/getBackendHealthOnDemand",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayBackendHealthOnDemand
    },
    201: {
      bodyMapper: Mappers.ApplicationGatewayBackendHealthOnDemand
    },
    202: {
      bodyMapper: Mappers.ApplicationGatewayBackendHealthOnDemand
    },
    204: {
      bodyMapper: Mappers.ApplicationGatewayBackendHealthOnDemand
    }
  },
  requestBody: Parameters.probeRequest,
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listAvailableServerVariablesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableServerVariables",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Sequence", element: { type: { name: "String" } } }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listAvailableRequestHeadersOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableRequestHeaders",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Sequence", element: { type: { name: "String" } } }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listAvailableResponseHeadersOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableResponseHeaders",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Sequence", element: { type: { name: "String" } } }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listAvailableWafRuleSetsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableWafRuleSets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayAvailableWafRuleSetsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listAvailableSslOptionsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableSslOptions/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayAvailableSslOptions
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listAvailableSslPredefinedPoliciesOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableSslOptions/default/predefinedPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayAvailableSslPredefinedPolicies
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const getSslPredefinedPolicyOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/applicationGatewayAvailableSslOptions/default/predefinedPolicies/{predefinedPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewaySslPredefinedPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.predefinedPolicyName
  ],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayListResult
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
const listAllNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink1
  ],
  serializer
};
const listAvailableSslPredefinedPoliciesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayAvailableSslPredefinedPolicies
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink2
  ],
  serializer
};
