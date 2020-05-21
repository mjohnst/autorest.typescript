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
import { ManagementLinkClient } from "../managementLinkClient";
import {
  ResourceLink,
  ResourceLinksCreateOrUpdateResponse,
  ResourceLinksGetResponse,
  ResourceLinksListAtSubscriptionOptionalParams,
  ResourceLinksListAtSubscriptionResponse,
  ResourceLinksListAtSourceScopeResponse,
  ResourceLinksListAtSubscriptionNextOptionalParams,
  ResourceLinksListAtSubscriptionNextResponse,
  ResourceLinksListAtSourceScopeNextResponse
} from "../models";

/**
 * Class representing a ResourceLinks.
 */
export class ResourceLinks {
  private readonly client: ManagementLinkClient;

  /**
   * Initialize a new instance of the class ResourceLinks class.
   * @param client Reference to the service client
   */
  constructor(client: ManagementLinkClient) {
    this.client = client;
  }

  /**
   * Deletes a resource link with the specified ID.
   * @param linkId The fully qualified ID of the resource link. Use the format,
   *               /subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/{provider-namespace}/{resource-type}/{resource-name}/Microsoft.Resources/links/{link-name}.
   *               For example,
   *               /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
   * @param options The options parameters.
   */
  delete(
    linkId: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { linkId, options: operationOptions },
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Creates or updates a resource link between the specified resources.
   * @param linkId The fully qualified ID of the resource link. Use the format,
   *               /subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/{provider-namespace}/{resource-type}/{resource-name}/Microsoft.Resources/links/{link-name}.
   *               For example,
   *               /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
   * @param parameters Parameters for creating or updating a resource link.
   * @param options The options parameters.
   */
  createOrUpdate(
    linkId: string,
    parameters: ResourceLink,
    options?: coreHttp.OperationOptions
  ): Promise<ResourceLinksCreateOrUpdateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { linkId, parameters, options: operationOptions },
      createOrUpdateOperationSpec
    ) as Promise<ResourceLinksCreateOrUpdateResponse>;
  }

  /**
   * Gets a resource link with the specified ID.
   * @param linkId The fully qualified Id of the resource link. For example,
   *               /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup/Microsoft.Web/sites/mySite/Microsoft.Resources/links/myLink
   * @param options The options parameters.
   */
  get(
    linkId: string,
    options?: coreHttp.OperationOptions
  ): Promise<ResourceLinksGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { linkId, options: operationOptions },
      getOperationSpec
    ) as Promise<ResourceLinksGetResponse>;
  }

  /**
   * Gets all the linked resources for the subscription.
   * @param options The options parameters.
   */
  listAtSubscription(
    options?: ResourceLinksListAtSubscriptionOptionalParams
  ): Promise<ResourceLinksListAtSubscriptionResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listAtSubscriptionOperationSpec
    ) as Promise<ResourceLinksListAtSubscriptionResponse>;
  }

  /**
   * Gets a list of resource links at and below the specified source scope.
   * @param scope The fully qualified ID of the scope for getting the resource links. For example, to
   *              list resource links at and under a resource group, set the scope to
   *              /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup.
   * @param options The options parameters.
   */
  listAtSourceScope(
    scope: string,
    options?: coreHttp.OperationOptions
  ): Promise<ResourceLinksListAtSourceScopeResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { scope, options: operationOptions },
      listAtSourceScopeOperationSpec
    ) as Promise<ResourceLinksListAtSourceScopeResponse>;
  }

  /**
   * ListAtSubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListAtSubscription method.
   * @param options The options parameters.
   */
  listAtSubscriptionNext(
    nextLink: string,
    options?: ResourceLinksListAtSubscriptionNextOptionalParams
  ): Promise<ResourceLinksListAtSubscriptionNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { nextLink, options: operationOptions },
      listAtSubscriptionNextOperationSpec
    ) as Promise<ResourceLinksListAtSubscriptionNextResponse>;
  }

  /**
   * ListAtSourceScopeNext
   * @param scope The fully qualified ID of the scope for getting the resource links. For example, to
   *              list resource links at and under a resource group, set the scope to
   *              /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myGroup.
   * @param nextLink The nextLink from the previous successful call to the ListAtSourceScope method.
   * @param options The options parameters.
   */
  listAtSourceScopeNext(
    scope: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ResourceLinksListAtSourceScopeNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { scope, nextLink, options: operationOptions },
      listAtSourceScopeNextOperationSpec
    ) as Promise<ResourceLinksListAtSourceScopeNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/{linkId}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.linkId],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path: "/{linkId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceLink
    },
    201: {
      bodyMapper: Mappers.ResourceLink
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.linkId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path: "/{linkId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceLink
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.linkId],
  serializer
};
const listAtSubscriptionOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/links",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceLinkResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listAtSourceScopeOperationSpec: coreHttp.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Resources/links",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceLinkResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter1],
  urlParameters: [Parameters.$host, Parameters.scope],
  serializer
};
const listAtSubscriptionNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceLinkResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  serializer
};
const listAtSourceScopeNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceLinkResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter1],
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.scope],
  serializer
};
