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
import { XmlServiceClient } from "../xmlServiceClient";
import {
  XmlGetComplexTypeRefNoMetaResponse,
  RootWithRefAndNoMeta,
  XmlGetComplexTypeRefWithMetaResponse,
  RootWithRefAndMeta,
  XmlGetSimpleResponse,
  Slideshow,
  XmlGetWrappedListsResponse,
  AppleBarrel,
  XmlGetHeadersResponse,
  XmlGetEmptyListResponse,
  XmlGetEmptyWrappedListsResponse,
  XmlGetRootListResponse,
  Banana,
  XmlGetRootListSingleItemResponse,
  XmlGetEmptyRootListResponse,
  XmlGetEmptyChildElementResponse,
  XmlListContainersResponse,
  XmlGetServicePropertiesResponse,
  StorageServiceProperties,
  XmlGetAclsResponse,
  SignedIdentifier,
  XmlListBlobsResponse,
  JsonInput,
  XmlJsonOutputResponse
} from "../models";

/**
 * Class representing a Xml.
 */
export class Xml {
  private readonly client: XmlServiceClient;

  /**
   * Initialize a new instance of the class Xml class.
   * @param client Reference to the service client
   */
  constructor(client: XmlServiceClient) {
    this.client = client;
  }

  /**
   * Get a complex type that has a ref to a complex type with no XML node
   * @param options The options parameters.
   */
  getComplexTypeRefNoMeta(
    options?: coreHttp.OperationOptions
  ): Promise<XmlGetComplexTypeRefNoMetaResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getComplexTypeRefNoMetaOperationSpec
    ) as Promise<XmlGetComplexTypeRefNoMetaResponse>;
  }

  /**
   * Puts a complex type that has a ref to a complex type with no XML node
   * @param model I am root, and I ref a model with no meta
   * @param options The options parameters.
   */
  putComplexTypeRefNoMeta(
    model: RootWithRefAndNoMeta,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { model, options: operationOptions },
      putComplexTypeRefNoMetaOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get a complex type that has a ref to a complex type with XML node
   * @param options The options parameters.
   */
  getComplexTypeRefWithMeta(
    options?: coreHttp.OperationOptions
  ): Promise<XmlGetComplexTypeRefWithMetaResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getComplexTypeRefWithMetaOperationSpec
    ) as Promise<XmlGetComplexTypeRefWithMetaResponse>;
  }

  /**
   * Puts a complex type that has a ref to a complex type with XML node
   * @param model I am root, and I ref a model WITH meta
   * @param options The options parameters.
   */
  putComplexTypeRefWithMeta(
    model: RootWithRefAndMeta,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { model, options: operationOptions },
      putComplexTypeRefWithMetaOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get a simple XML document
   * @param options The options parameters.
   */
  getSimple(
    options?: coreHttp.OperationOptions
  ): Promise<XmlGetSimpleResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getSimpleOperationSpec
    ) as Promise<XmlGetSimpleResponse>;
  }

  /**
   * Put a simple XML document
   * @param slideshow Data about a slideshow
   * @param options The options parameters.
   */
  putSimple(
    slideshow: Slideshow,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { slideshow, options: operationOptions },
      putSimpleOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get an XML document with multiple wrapped lists
   * @param options The options parameters.
   */
  getWrappedLists(
    options?: coreHttp.OperationOptions
  ): Promise<XmlGetWrappedListsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getWrappedListsOperationSpec
    ) as Promise<XmlGetWrappedListsResponse>;
  }

  /**
   * Put an XML document with multiple wrapped lists
   * @param wrappedLists A barrel of apples.
   * @param options The options parameters.
   */
  putWrappedLists(
    wrappedLists: AppleBarrel,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { wrappedLists, options: operationOptions },
      putWrappedListsOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get strongly-typed response headers.
   * @param options The options parameters.
   */
  getHeaders(
    options?: coreHttp.OperationOptions
  ): Promise<XmlGetHeadersResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getHeadersOperationSpec
    ) as Promise<XmlGetHeadersResponse>;
  }

  /**
   * Get an empty list.
   * @param options The options parameters.
   */
  getEmptyList(
    options?: coreHttp.OperationOptions
  ): Promise<XmlGetEmptyListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getEmptyListOperationSpec
    ) as Promise<XmlGetEmptyListResponse>;
  }

  /**
   * Puts an empty list.
   * @param slideshow Data about a slideshow
   * @param options The options parameters.
   */
  putEmptyList(
    slideshow: Slideshow,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { slideshow, options: operationOptions },
      putEmptyListOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets some empty wrapped lists.
   * @param options The options parameters.
   */
  getEmptyWrappedLists(
    options?: coreHttp.OperationOptions
  ): Promise<XmlGetEmptyWrappedListsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getEmptyWrappedListsOperationSpec
    ) as Promise<XmlGetEmptyWrappedListsResponse>;
  }

  /**
   * Puts some empty wrapped lists.
   * @param appleBarrel A barrel of apples.
   * @param options The options parameters.
   */
  putEmptyWrappedLists(
    appleBarrel: AppleBarrel,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { appleBarrel, options: operationOptions },
      putEmptyWrappedListsOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets a list as the root element.
   * @param options The options parameters.
   */
  getRootList(
    options?: coreHttp.OperationOptions
  ): Promise<XmlGetRootListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getRootListOperationSpec
    ) as Promise<XmlGetRootListResponse>;
  }

  /**
   * Puts a list as the root element.
   * @param bananas Array of Banana
   * @param options The options parameters.
   */
  putRootList(
    bananas: Banana[],
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { bananas, options: operationOptions },
      putRootListOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets a list with a single item.
   * @param options The options parameters.
   */
  getRootListSingleItem(
    options?: coreHttp.OperationOptions
  ): Promise<XmlGetRootListSingleItemResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getRootListSingleItemOperationSpec
    ) as Promise<XmlGetRootListSingleItemResponse>;
  }

  /**
   * Puts a list with a single item.
   * @param bananas Array of Banana
   * @param options The options parameters.
   */
  putRootListSingleItem(
    bananas: Banana[],
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { bananas, options: operationOptions },
      putRootListSingleItemOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets an empty list as the root element.
   * @param options The options parameters.
   */
  getEmptyRootList(
    options?: coreHttp.OperationOptions
  ): Promise<XmlGetEmptyRootListResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getEmptyRootListOperationSpec
    ) as Promise<XmlGetEmptyRootListResponse>;
  }

  /**
   * Puts an empty list as the root element.
   * @param bananas Array of Banana
   * @param options The options parameters.
   */
  putEmptyRootList(
    bananas: Banana[],
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { bananas, options: operationOptions },
      putEmptyRootListOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets an XML document with an empty child element.
   * @param options The options parameters.
   */
  getEmptyChildElement(
    options?: coreHttp.OperationOptions
  ): Promise<XmlGetEmptyChildElementResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getEmptyChildElementOperationSpec
    ) as Promise<XmlGetEmptyChildElementResponse>;
  }

  /**
   * Puts a value with an empty child element.
   * @param banana A banana.
   * @param options The options parameters.
   */
  putEmptyChildElement(
    banana: Banana,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { banana, options: operationOptions },
      putEmptyChildElementOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Lists containers in a storage account.
   * @param options The options parameters.
   */
  listContainers(
    options?: coreHttp.OperationOptions
  ): Promise<XmlListContainersResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listContainersOperationSpec
    ) as Promise<XmlListContainersResponse>;
  }

  /**
   * Gets storage service properties.
   * @param options The options parameters.
   */
  getServiceProperties(
    options?: coreHttp.OperationOptions
  ): Promise<XmlGetServicePropertiesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getServicePropertiesOperationSpec
    ) as Promise<XmlGetServicePropertiesResponse>;
  }

  /**
   * Puts storage service properties.
   * @param properties Storage Service Properties.
   * @param options The options parameters.
   */
  putServiceProperties(
    properties: StorageServiceProperties,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { properties, options: operationOptions },
      putServicePropertiesOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets storage ACLs for a container.
   * @param options The options parameters.
   */
  getAcls(options?: coreHttp.OperationOptions): Promise<XmlGetAclsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      getAclsOperationSpec
    ) as Promise<XmlGetAclsResponse>;
  }

  /**
   * Puts storage ACLs for a container.
   * @param properties a collection of signed identifiers
   * @param options The options parameters.
   */
  putAcls(
    properties: SignedIdentifier[],
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { properties, options: operationOptions },
      putAclsOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Lists blobs in a storage container.
   * @param options The options parameters.
   */
  listBlobs(
    options?: coreHttp.OperationOptions
  ): Promise<XmlListBlobsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      listBlobsOperationSpec
    ) as Promise<XmlListBlobsResponse>;
  }

  /**
   * A Swagger with XML that has one operation that takes JSON as input. You need to send the ID number
   * 42
   * @param properties
   * @param options The options parameters.
   */
  jsonInput(
    properties: JsonInput,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { properties, options: operationOptions },
      jsonInputOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * A Swagger with XML that has one operation that returns JSON. ID number 42
   * @param options The options parameters.
   */
  jsonOutput(
    options?: coreHttp.OperationOptions
  ): Promise<XmlJsonOutputResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.client.sendOperationRequest(
      { options: operationOptions },
      jsonOutputOperationSpec
    ) as Promise<XmlJsonOutputResponse>;
  }
}
// Operation Specifications

const xmlSerializer = new coreHttp.Serializer(Mappers, /* isXml */ true);

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getComplexTypeRefNoMetaOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/complex-type-ref-no-meta",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootWithRefAndNoMeta
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putComplexTypeRefNoMetaOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/complex-type-ref-no-meta",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.model,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getComplexTypeRefWithMetaOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/complex-type-ref-with-meta",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RootWithRefAndMeta
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putComplexTypeRefWithMetaOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/complex-type-ref-with-meta",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.model1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getSimpleOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/simple",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Slideshow
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putSimpleOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/simple",
  httpMethod: "PUT",
  responses: {
    201: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.slideshow,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getWrappedListsOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/wrapped-lists",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AppleBarrel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putWrappedListsOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/wrapped-lists",
  httpMethod: "PUT",
  responses: {
    201: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.wrappedLists,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getHeadersOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/headers",
  httpMethod: "GET",
  responses: {
    200: {
      headersMapper: Mappers.XmlGetHeadersHeaders
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getEmptyListOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/empty-list",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Slideshow
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putEmptyListOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/empty-list",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.slideshow,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getEmptyWrappedListsOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/empty-wrapped-lists",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AppleBarrel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putEmptyWrappedListsOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/empty-wrapped-lists",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.appleBarrel,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getRootListOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/root-list",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Banana" } }
        },
        serializedName: "ArrayOfBanana",
        xmlName: "bananas",
        xmlElementName: "banana"
      }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putRootListOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/root-list",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.bananas,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getRootListSingleItemOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/root-list-single-item",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Banana" } }
        },
        serializedName: "ArrayOfBanana",
        xmlName: "bananas",
        xmlElementName: "banana"
      }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putRootListSingleItemOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/root-list-single-item",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.bananas,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getEmptyRootListOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/empty-root-list",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Banana" } }
        },
        serializedName: "ArrayOfBanana",
        xmlName: "bananas",
        xmlElementName: "banana"
      }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putEmptyRootListOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/empty-root-list",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.bananas,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getEmptyChildElementOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/empty-child-element",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Banana
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putEmptyChildElementOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/empty-child-element",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.banana,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const listContainersOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListContainersResponse
    }
  },
  queryParameters: [Parameters.comp],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const getServicePropertiesOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StorageServiceProperties
    }
  },
  queryParameters: [Parameters.comp1, Parameters.restype],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putServicePropertiesOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.properties,
  queryParameters: [Parameters.comp1, Parameters.restype],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const getAclsOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/mycontainer",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "SignedIdentifier" }
          }
        },
        serializedName: "SignedIdentifiers",
        xmlName: "SignedIdentifiers",
        xmlIsWrapped: true,
        xmlElementName: "SignedIdentifier"
      }
    }
  },
  queryParameters: [Parameters.comp2, Parameters.restype1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const putAclsOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/mycontainer",
  httpMethod: "PUT",
  responses: { 201: {} },
  requestBody: Parameters.properties1,
  queryParameters: [Parameters.comp2, Parameters.restype1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const listBlobsOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/mycontainer",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListBlobsResponse
    }
  },
  queryParameters: [Parameters.comp, Parameters.restype1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  isXML: true,
  serializer: xmlSerializer
};
const jsonInputOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/jsoninput",
  httpMethod: "PUT",
  responses: { 200: {} },
  requestBody: Parameters.properties2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const jsonOutputOperationSpec: coreHttp.OperationSpec = {
  path: "/xml/jsonoutput",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JsonOutput
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept2],
  serializer
};