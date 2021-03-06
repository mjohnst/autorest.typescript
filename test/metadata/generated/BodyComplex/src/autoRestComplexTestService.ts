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
import { AutoRestComplexTestServiceContext } from "./autoRestComplexTestServiceContext";

class AutoRestComplexTestService extends AutoRestComplexTestServiceContext {
  // Operation groups
  basic: operations.BasicOperations;
  primitive: operations.Primitive;
  arrayModel: operations.ArrayModel;
  dictionary: operations.Dictionary;
  inheritance: operations.Inheritance;
  polymorphism: operations.Polymorphism;
  polymorphicrecursive: operations.Polymorphicrecursive;
  readonlyproperty: operations.Readonlyproperty;
  flattencomplex: operations.Flattencomplex;

  /**
   * Initializes a new instance of the AutoRestComplexTestService class.
   * @param [options] The parameter options
   */
  constructor(options?: Models.AutoRestComplexTestServiceOptions) {
    super(options);
    this.basic = new operations.BasicOperations(this);
    this.primitive = new operations.Primitive(this);
    this.arrayModel = new operations.ArrayModel(this);
    this.dictionary = new operations.Dictionary(this);
    this.inheritance = new operations.Inheritance(this);
    this.polymorphism = new operations.Polymorphism(this);
    this.polymorphicrecursive = new operations.Polymorphicrecursive(this);
    this.readonlyproperty = new operations.Readonlyproperty(this);
    this.flattencomplex = new operations.Flattencomplex(this);
  }
}

// Operation Specifications

export {
  AutoRestComplexTestService,
  AutoRestComplexTestServiceContext,
  Models as AutoRestComplexTestServiceModels,
  Mappers as AutoRestComplexTestServiceMappers
};
export * from "./operations";
