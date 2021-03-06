/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestSwaggerBATServiceContext } from "./autoRestSwaggerBATServiceContext";

class AutoRestSwaggerBATService extends AutoRestSwaggerBATServiceContext {
  // Operation groups
  string: operations.String;
  enumModel: operations.EnumModel;

  /**
   * Initializes a new instance of the AutoRestSwaggerBATService class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.AutoRestSwaggerBATServiceOptions) {
    super(options);
    this.string = new operations.String(this);
    this.enumModel = new operations.EnumModel(this);
  }
}

// Operation Specifications

export {
  AutoRestSwaggerBATService,
  AutoRestSwaggerBATServiceContext,
  Models as AutoRestSwaggerBATServiceModels,
  Mappers as AutoRestSwaggerBATServiceMappers
};
export * from "./operations";
