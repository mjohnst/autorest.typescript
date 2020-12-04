/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export interface Pet {
  /**
   * name
   */
  name?: string;
  /**
   * Type of Pet
   */
  daysOfWeek?: DaysOfWeekExtensibleEnum;
  intEnum: IntEnum;
}

/**
 * Known values of {@link DaysOfWeekExtensibleEnum} that the service accepts.
 */
export const enum KnownDaysOfWeekExtensibleEnum {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday"
}

/**
 * Defines values for DaysOfWeekExtensibleEnum. \
 * {@link KnownDaysOfWeekExtensibleEnum} can be used interchangeably with DaysOfWeekExtensibleEnum,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **Monday** \
 * **Tuesday** \
 * **Wednesday** \
 * **Thursday** \
 * **Friday** \
 * **Saturday** \
 * **Sunday**
 */
export type DaysOfWeekExtensibleEnum = string;

/**
 * Known values of {@link IntEnum} that the service accepts.
 */
export const enum KnownIntEnum {
  /**
   * one
   */
  One = "1",
  /**
   * two
   */
  Two = "2",
  /**
   * three
   */
  Three = "3"
}

/**
 * Defines values for IntEnum. \
 * {@link KnownIntEnum} can be used interchangeably with IntEnum,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **1**: one \
 * **2**: two \
 * **3**: three
 */
export type IntEnum = string;

/**
 * Contains response data for the getByPetId operation.
 */
export type PetGetByPetIdResponse = Pet & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Pet;
  };
};

/**
 * Optional parameters.
 */
export interface PetAddPetOptionalParams extends coreHttp.OperationOptions {
  /**
   * pet param
   */
  petParam?: Pet;
}

/**
 * Contains response data for the addPet operation.
 */
export type PetAddPetResponse = Pet & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Pet;
  };
};

/**
 * Optional parameters.
 */
export interface ExtensibleEnumsClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * server parameter
   */
  $host?: string;
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}