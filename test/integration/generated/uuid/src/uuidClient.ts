/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as operations from "./operations";
import * as Models from "./models";
import { UuidClientContext } from "./uuidClientContext";
import { UuidClientOptionalParams } from "./models";

class UuidClient extends UuidClientContext {
  /**
   * Initializes a new instance of the UuidClient class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: UuidClientOptionalParams) {
    super($host, options);
    this.get = new operations.Get(this);
  }

  get: operations.Get;
}

// Operation Specifications

export { UuidClient, UuidClientContext, Models as UuidModels };
export * from "./operations";
