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
import { KeyVaultManagementClient } from "../keyVaultManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  VaultCreateOrUpdateParameters,
  VaultsCreateOrUpdateResponse,
  VaultPatchParameters,
  VaultsUpdateResponse,
  VaultsGetResponse,
  VaultAccessPolicyParameters,
  AccessPolicyUpdateKind,
  VaultsUpdateAccessPolicyResponse,
  VaultsListByResourceGroupOptionalParams,
  VaultsListByResourceGroupResponse,
  VaultsListBySubscriptionOptionalParams,
  VaultsListBySubscriptionResponse,
  VaultsListDeletedResponse,
  VaultsGetDeletedResponse,
  VaultsListOptionalParams,
  VaultsListResponse,
  VaultCheckNameAvailabilityParameters,
  VaultsCheckNameAvailabilityResponse,
  VaultsListByResourceGroupNextOptionalParams,
  VaultsListByResourceGroupNextResponse,
  VaultsListBySubscriptionNextOptionalParams,
  VaultsListBySubscriptionNextResponse,
  VaultsListDeletedNextResponse,
  VaultsListNextOptionalParams,
  VaultsListNextResponse
} from "../models";

/**
 * Class representing a Vaults.
 */
export class Vaults {
  private readonly client: KeyVaultManagementClient;

  /**
   * Initialize a new instance of the class Vaults class.
   * @param client Reference to the service client
   */
  constructor(client: KeyVaultManagementClient) {
    this.client = client;
  }

  /**
   * Create or update a key vault in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the server belongs.
   * @param vaultName Name of the vault
   * @param parameters Parameters to create or update the vault
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    vaultName: string,
    parameters: VaultCreateOrUpdateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<VaultsCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      vaultName,
      parameters,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        VaultsCreateOrUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      createOrUpdateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Update a key vault in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the server belongs.
   * @param vaultName Name of the vault
   * @param parameters Parameters to patch the vault
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    vaultName: string,
    parameters: VaultPatchParameters,
    options?: coreHttp.OperationOptions
  ): Promise<VaultsUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, parameters, options: operationOptions },
      updateOperationSpec
    ) as Promise<VaultsUpdateResponse>;
  }

  /**
   * Deletes the specified Azure key vault.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault to delete
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    vaultName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, options: operationOptions },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets the specified Azure key vault.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VaultsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, options: operationOptions },
      getOperationSpec
    ) as Promise<VaultsGetResponse>;
  }

  /**
   * Update access policies in a key vault in the specified subscription.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName Name of the vault
   * @param operationKind Name of the operation
   * @param parameters Access policy to merge into the vault
   * @param options The options parameters.
   */
  updateAccessPolicy(
    resourceGroupName: string,
    vaultName: string,
    operationKind: AccessPolicyUpdateKind,
    parameters: VaultAccessPolicyParameters,
    options?: coreHttp.OperationOptions
  ): Promise<VaultsUpdateAccessPolicyResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        vaultName,
        operationKind,
        parameters,
        options: operationOptions
      },
      updateAccessPolicyOperationSpec
    ) as Promise<VaultsUpdateAccessPolicyResponse>;
  }

  /**
   * The List operation gets information about the vaults associated with the subscription and within the
   * specified resource group.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: VaultsListByResourceGroupOptionalParams
  ): Promise<VaultsListByResourceGroupResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, options: operationOptions },
      listByResourceGroupOperationSpec
    ) as Promise<VaultsListByResourceGroupResponse>;
  }

  /**
   * The List operation gets information about the vaults associated with the subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: VaultsListBySubscriptionOptionalParams
  ): Promise<VaultsListBySubscriptionResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listBySubscriptionOperationSpec
    ) as Promise<VaultsListBySubscriptionResponse>;
  }

  /**
   * Gets information about the deleted vaults in a subscription.
   * @param options The options parameters.
   */
  listDeleted(
    options?: coreHttp.OperationOptions
  ): Promise<VaultsListDeletedResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listDeletedOperationSpec
    ) as Promise<VaultsListDeletedResponse>;
  }

  /**
   * Gets the deleted Azure key vault.
   * @param vaultName The name of the vault.
   * @param location The location of the deleted vault.
   * @param options The options parameters.
   */
  getDeleted(
    vaultName: string,
    location: string,
    options?: coreHttp.OperationOptions
  ): Promise<VaultsGetDeletedResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { vaultName, location, options: operationOptions },
      getDeletedOperationSpec
    ) as Promise<VaultsGetDeletedResponse>;
  }

  /**
   * Permanently deletes the specified vault. aka Purges the deleted Azure key vault.
   * @param vaultName The name of the soft-deleted vault.
   * @param location The location of the soft-deleted vault.
   * @param options The options parameters.
   */
  async purgeDeleted(
    vaultName: string,
    location: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      vaultName,
      location,
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
      purgeDeletedOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: purgeDeletedOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * The List operation gets information about the vaults associated with the subscription.
   * @param options The options parameters.
   */
  list(options?: VaultsListOptionalParams): Promise<VaultsListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listOperationSpec
    ) as Promise<VaultsListResponse>;
  }

  /**
   * Checks that the vault name is valid and is not already in use.
   * @param vaultName The name of the vault.
   * @param options The options parameters.
   */
  checkNameAvailability(
    vaultName: VaultCheckNameAvailabilityParameters,
    options?: coreHttp.OperationOptions
  ): Promise<VaultsCheckNameAvailabilityResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { vaultName, options: operationOptions },
      checkNameAvailabilityOperationSpec
    ) as Promise<VaultsCheckNameAvailabilityResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: VaultsListByResourceGroupNextOptionalParams
  ): Promise<VaultsListByResourceGroupNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options: operationOptions },
      listByResourceGroupNextOperationSpec
    ) as Promise<VaultsListByResourceGroupNextResponse>;
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  listBySubscriptionNext(
    nextLink: string,
    options?: VaultsListBySubscriptionNextOptionalParams
  ): Promise<VaultsListBySubscriptionNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listBySubscriptionNextOperationSpec
    ) as Promise<VaultsListBySubscriptionNextResponse>;
  }

  /**
   * ListDeletedNext
   * @param nextLink The nextLink from the previous successful call to the ListDeleted method.
   * @param options The options parameters.
   */
  listDeletedNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<VaultsListDeletedNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listDeletedNextOperationSpec
    ) as Promise<VaultsListDeletedNextResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: VaultsListNextOptionalParams
  ): Promise<VaultsListNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listNextOperationSpec
    ) as Promise<VaultsListNextResponse>;
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

const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Vault
    },
    201: {
      bodyMapper: Mappers.Vault
    },
    202: {
      bodyMapper: Mappers.Vault
    },
    204: {
      bodyMapper: Mappers.Vault
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Vault
    },
    201: {
      bodyMapper: Mappers.Vault
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vaultName1
  ],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Vault
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.vaultName1
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const updateAccessPolicyOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/accessPolicies/{operationKind}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VaultAccessPolicyParameters
    },
    201: {
      bodyMapper: Mappers.VaultAccessPolicyParameters
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.subscriptionId,
    Parameters.operationKind
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const listBySubscriptionOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/vaults",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept1],
  serializer
};
const listDeletedOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/deletedVaults",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedVaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept1],
  serializer
};
const getDeletedOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedVault
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.vaultName1,
    Parameters.location
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const purgeDeletedOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/locations/{location}/deletedVaults/{vaultName}/purge",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.vaultName1,
    Parameters.location
  ],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept1],
  serializer
};
const checkNameAvailabilityOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.KeyVault/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResult
    }
  },
  requestBody: Parameters.vaultName2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const listBySubscriptionNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const listDeletedNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedVaultListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept1],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept1],
  serializer
};