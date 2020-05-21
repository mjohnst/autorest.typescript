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
import { ComputeManagementClient } from "../computeManagementClient";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import {
  GalleryImageVersion,
  GalleryImageVersionsCreateOrUpdateResponse,
  GalleryImageVersionUpdate,
  GalleryImageVersionsUpdateResponse,
  GalleryImageVersionsGetResponse,
  GalleryImageVersionsListByGalleryImageResponse,
  GalleryImageVersionsListByGalleryImageNextResponse
} from "../models";

/**
 * Class representing a GalleryImageVersions.
 */
export class GalleryImageVersions {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class GalleryImageVersions class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Create or update a gallery Image Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery Image Definition in which the Image Version is to be
   *                         created.
   * @param galleryImageVersionName The name of the gallery Image Version to be created. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryImageVersion Parameters supplied to the create or update gallery Image Version
   *                            operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    galleryImageVersion: GalleryImageVersion,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<GalleryImageVersionsCreateOrUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      galleryName,
      galleryImageName,
      galleryImageVersionName,
      galleryImageVersion,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        GalleryImageVersionsCreateOrUpdateResponse
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
   * Update a gallery Image Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery Image Definition in which the Image Version is to be
   *                         updated.
   * @param galleryImageVersionName The name of the gallery Image Version to be updated. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryImageVersion Parameters supplied to the update gallery Image Version operation.
   * @param options The options parameters.
   */
  async update(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    galleryImageVersion: GalleryImageVersionUpdate,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<GalleryImageVersionsUpdateResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      galleryName,
      galleryImageName,
      galleryImageVersionName,
      galleryImageVersion,
      options: operationOptions
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) =>
      this.client.sendOperationRequest(args, spec) as Promise<
        GalleryImageVersionsUpdateResponse
      >;
    const initialOperationResult = await sendOperation(
      args,
      updateOperationSpec
    );

    return new LROPoller({
      initialOperationArguments: args,
      initialOperationSpec: updateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Retrieves information about a gallery Image Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery Image Definition in which the Image Version resides.
   * @param galleryImageVersionName The name of the gallery Image Version to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<GalleryImageVersionsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        galleryImageName,
        galleryImageVersionName,
        options: operationOptions
      },
      getOperationSpec
    ) as Promise<GalleryImageVersionsGetResponse>;
  }

  /**
   * Delete a gallery Image Version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the gallery Image Definition in which the Image Version resides.
   * @param galleryImageVersionName The name of the gallery Image Version to be deleted.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<LROPoller<coreHttp.RestResponse>> {
    const operationOptions: coreHttp.RequestOptionsBase = this.getOperationOptions(
      options
    );

    const args: coreHttp.OperationArguments = {
      resourceGroupName,
      galleryName,
      galleryImageName,
      galleryImageVersionName,
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
      sendOperation
    });
  }

  /**
   * List gallery Image Versions in a gallery Image Definition.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the Shared Image Gallery Image Definition from which the Image
   *                         Versions are to be listed.
   * @param options The options parameters.
   */
  listByGalleryImage(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    options?: coreHttp.OperationOptions
  ): Promise<GalleryImageVersionsListByGalleryImageResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        galleryImageName,
        options: operationOptions
      },
      listByGalleryImageOperationSpec
    ) as Promise<GalleryImageVersionsListByGalleryImageResponse>;
  }

  /**
   * ListByGalleryImageNext
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the Image Definition resides.
   * @param galleryImageName The name of the Shared Image Gallery Image Definition from which the Image
   *                         Versions are to be listed.
   * @param nextLink The nextLink from the previous successful call to the ListByGalleryImage method.
   * @param options The options parameters.
   */
  listByGalleryImageNext(
    resourceGroupName: string,
    galleryName: string,
    galleryImageName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<GalleryImageVersionsListByGalleryImageNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        galleryName,
        galleryImageName,
        nextLink,
        options: operationOptions
      },
      listByGalleryImageNextOperationSpec
    ) as Promise<GalleryImageVersionsListByGalleryImageNextResponse>;
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    201: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    202: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    204: {
      bodyMapper: Mappers.GalleryImageVersion
    }
  },
  requestBody: Parameters.galleryImageVersion,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryImageName,
    Parameters.galleryImageVersionName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    201: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    202: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    204: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.galleryImageVersion1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryImageName,
    Parameters.galleryImageVersionName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryImageName,
    Parameters.galleryImageVersionName
  ],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions/{galleryImageVersionName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.galleryName,
    Parameters.galleryImageName,
    Parameters.galleryImageVersionName
  ],
  serializer
};
const listByGalleryImageOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/galleries/{galleryName}/images/{galleryImageName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageVersionList
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
    Parameters.galleryName,
    Parameters.galleryImageName
  ],
  serializer
};
const listByGalleryImageNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImageVersionList
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
    Parameters.nextLink,
    Parameters.galleryName,
    Parameters.galleryImageName
  ],
  serializer
};
