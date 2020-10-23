/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * An interface representing AutoRestSwaggerBATFormDataServiceOptions.
 */
export interface AutoRestSwaggerBATFormDataServiceOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Contains response data for the uploadFile operation.
 */
export type FormdataUploadFileResponse = {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always undefined in node.js.
   */
  blobBody?: Promise<Blob>;

  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always undefined in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse;
};

/**
 * Contains response data for the uploadFileViaBody operation.
 */
export type FormdataUploadFileViaBodyResponse = {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always undefined in node.js.
   */
  blobBody?: Promise<Blob>;

  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always undefined in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse;
};
