/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * The product documentation.
 */
export interface Product {
  /**
   * Unique identifier representing a specific product for a given latitude & longitude. For
   * example, uberX in San Francisco will have a different product_id than uberX in Los Angeles.
   */
  productId?: string;
  /**
   * Description of product.
   */
  description?: string;
  /**
   * Display name of product.
   */
  displayName?: string;
  /**
   * Capacity of product. For example, 4 people. Default value: '100'.
   */
  capacity?: string;
  /**
   * Image URL representing the product.
   */
  image?: string;
}

/**
 * An interface representing CatalogDictionary.
 */
export interface CatalogDictionary {
  /**
   * Dictionary of products
   */
  productDictionary?: { [propertyName: string]: Product };
}

/**
 * An interface representing CatalogArray.
 */
export interface CatalogArray {
  /**
   * Array of products
   */
  productArray?: Product[];
}

/**
 * An interface representing CatalogArrayOfDictionary.
 */
export interface CatalogArrayOfDictionary {
  /**
   * Array of dictionary of products
   */
  productArrayOfDictionary?: { [propertyName: string]: Product }[];
}

/**
 * An interface representing CatalogDictionaryOfArray.
 */
export interface CatalogDictionaryOfArray {
  /**
   * Dictionary of Array of product
   */
  productDictionaryOfArray?: { [propertyName: string]: Product[] };
}

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  status?: number;
  message?: string;
}

/**
 * An interface representing Basic.
 */
export interface Basic {
  /**
   * Basic Id
   */
  id?: number;
  /**
   * Name property with a very long description that does not fit on a single line and a line
   * break.
   */
  name?: string;
  /**
   * Possible values include: 'cyan', 'Magenta', 'YELLOW', 'blacK'
   */
  color?: CMYKColors;
}

/**
 * An interface representing Pet.
 */
export interface Pet {
  id?: number;
  name?: string;
}

/**
 * An interface representing Dog.
 */
export interface Dog extends Pet {
  food?: string;
}

/**
 * An interface representing Cat.
 */
export interface Cat extends Pet {
  color?: string;
  hates?: Dog[];
}

/**
 * An interface representing Siamese.
 */
export interface Siamese extends Cat {
  breed?: string;
}

/**
 * Contains the possible cases for DotFish.
 */
export type DotFishUnion = DotFish | DotSalmon;

/**
 * An interface representing DotFish.
 */
export interface DotFish {
  /**
   * Polymorphic Discriminator
   */
  fishtype: "DotFish";
  species?: string;
}

/**
 * An interface representing DotSalmon.
 */
export interface DotSalmon {
  /**
   * Polymorphic Discriminator
   */
  fishtype: "DotSalmon";
  species?: string;
  location?: string;
  iswild?: boolean;
}

/**
 * An interface representing DotFishMarket.
 */
export interface DotFishMarket {
  sampleSalmon?: DotSalmon;
  salmons?: DotSalmon[];
  sampleFish?: DotFishUnion;
  fishes?: DotFishUnion[];
}

/**
 * Contains the possible cases for Fish.
 */
export type FishUnion = Fish | SalmonUnion | SharkUnion;

/**
 * An interface representing Fish.
 */
export interface Fish {
  /**
   * Polymorphic Discriminator
   */
  fishtype: "Fish";
  species?: string;
  length: number;
  siblings?: FishUnion[];
}

/**
 * Contains the possible cases for Salmon.
 */
export type SalmonUnion = Salmon | SmartSalmon;

/**
 * An interface representing Salmon.
 */
export interface Salmon {
  /**
   * Polymorphic Discriminator
   */
  fishtype: "salmon";
  species?: string;
  length: number;
  siblings?: FishUnion[];
  location?: string;
  iswild?: boolean;
}

/**
 * An interface representing SmartSalmon.
 */
export interface SmartSalmon {
  /**
   * Polymorphic Discriminator
   */
  fishtype: "smart_salmon";
  species?: string;
  length: number;
  siblings?: FishUnion[];
  location?: string;
  iswild?: boolean;
  collegeDegree?: string;
  /**
   * Describes unknown properties. The value of an unknown property can be of "any" type.
   */
  [property: string]: any;
}

/**
 * Contains the possible cases for Shark.
 */
export type SharkUnion = Shark | Sawshark | Goblinshark | Cookiecuttershark;

/**
 * An interface representing Shark.
 */
export interface Shark {
  /**
   * Polymorphic Discriminator
   */
  fishtype: "shark";
  species?: string;
  length: number;
  siblings?: FishUnion[];
  age?: number;
  birthday: Date;
}

/**
 * An interface representing Sawshark.
 */
export interface Sawshark {
  /**
   * Polymorphic Discriminator
   */
  fishtype: "sawshark";
  species?: string;
  length: number;
  siblings?: FishUnion[];
  age?: number;
  birthday: Date;
  picture?: Uint8Array;
}

/**
 * An interface representing Goblinshark.
 */
export interface Goblinshark {
  /**
   * Polymorphic Discriminator
   */
  fishtype: "goblin";
  species?: string;
  length: number;
  siblings?: FishUnion[];
  age?: number;
  birthday: Date;
  jawsize?: number;
  /**
   * Colors possible. Possible values include: 'pink', 'gray', 'brown'. Default value: 'gray'.
   */
  color?: GoblinSharkColor;
}

/**
 * An interface representing Cookiecuttershark.
 */
export interface Cookiecuttershark {
  /**
   * Polymorphic Discriminator
   */
  fishtype: "cookiecuttershark";
  species?: string;
  length: number;
  siblings?: FishUnion[];
  age?: number;
  birthday: Date;
}

/**
 * An interface representing IntWrapper.
 */
export interface IntWrapper {
  field1?: number;
  field2?: number;
}

/**
 * An interface representing LongWrapper.
 */
export interface LongWrapper {
  field1?: number;
  field2?: number;
}

/**
 * An interface representing FloatWrapper.
 */
export interface FloatWrapper {
  field1?: number;
  field2?: number;
}

/**
 * An interface representing DoubleWrapper.
 */
export interface DoubleWrapper {
  field1?: number;
  field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose?: number;
}

/**
 * An interface representing BooleanWrapper.
 */
export interface BooleanWrapper {
  fieldTrue?: boolean;
  fieldFalse?: boolean;
}

/**
 * An interface representing StringWrapper.
 */
export interface StringWrapper {
  field?: string;
  empty?: string;
  nullProperty?: string;
}

/**
 * An interface representing DateWrapper.
 */
export interface DateWrapper {
  field?: Date;
  leap?: Date;
}

/**
 * An interface representing DatetimeWrapper.
 */
export interface DatetimeWrapper {
  field?: Date;
  now?: Date;
}

/**
 * An interface representing Datetimerfc1123Wrapper.
 */
export interface Datetimerfc1123Wrapper {
  field?: Date;
  now?: Date;
}

/**
 * An interface representing DurationWrapper.
 */
export interface DurationWrapper {
  field?: string;
}

/**
 * An interface representing ByteWrapper.
 */
export interface ByteWrapper {
  field?: Uint8Array;
}

/**
 * An interface representing ArrayWrapper.
 */
export interface ArrayWrapper {
  arrayProperty?: string[];
}

/**
 * An interface representing DictionaryWrapper.
 */
export interface DictionaryWrapper {
  defaultProgram?: { [propertyName: string]: string };
}

/**
 * An interface representing ReadonlyObj.
 */
export interface ReadonlyObj {
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  size?: number;
}

/**
 * Contains the possible cases for MyBaseType.
 */
export type MyBaseTypeUnion = MyBaseType | MyDerivedType;

/**
 * An interface representing MyBaseType.
 */
export interface MyBaseType {
  /**
   * Polymorphic Discriminator
   */
  kind: "MyBaseType";
  propB1?: string;
  propBH1?: string;
}

/**
 * An interface representing MyDerivedType.
 */
export interface MyDerivedType {
  /**
   * Polymorphic Discriminator
   */
  kind: "Kind1";
  propB1?: string;
  propBH1?: string;
  propD1?: string;
}

/**
 * Optional Parameters.
 */
export interface AzureCompositeModelCreateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Dictionary of Array of product
   */
  productDictionaryOfArray?: { [propertyName: string]: Product[] };
}

/**
 * Optional Parameters.
 */
export interface AzureCompositeModelUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Array of dictionary of products
   */
  productArrayOfDictionary?: { [propertyName: string]: Product }[];
}

/**
 * Optional Parameters.
 */
export interface PrimitivePutDurationOptionalParams extends msRest.RequestOptionsBase {
  field?: string;
}

/**
 * Optional Parameters.
 */
export interface PrimitivePutByteOptionalParams extends msRest.RequestOptionsBase {
  field?: Uint8Array;
}

/**
 * Optional Parameters.
 */
export interface ArrayModelPutValidOptionalParams extends msRest.RequestOptionsBase {
  arrayProperty?: string[];
}

/**
 * Optional Parameters.
 */
export interface ArrayModelPutEmptyOptionalParams extends msRest.RequestOptionsBase {
  arrayProperty?: string[];
}

/**
 * Optional Parameters.
 */
export interface DictionaryPutValidOptionalParams extends msRest.RequestOptionsBase {
  defaultProgram?: { [propertyName: string]: string };
}

/**
 * Optional Parameters.
 */
export interface DictionaryPutEmptyOptionalParams extends msRest.RequestOptionsBase {
  defaultProgram?: { [propertyName: string]: string };
}

/**
 * Optional Parameters.
 */
export interface ReadonlypropertyPutValidOptionalParams extends msRest.RequestOptionsBase {
  size?: number;
}

/**
 * An interface representing AzureCompositeModelOptions.
 */
export interface AzureCompositeModelOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * Defines values for CMYKColors.
 * Possible values include: 'cyan', 'Magenta', 'YELLOW', 'blacK'
 * @readonly
 * @enum {string}
 */
export type CMYKColors = 'cyan' | 'Magenta' | 'YELLOW' | 'blacK';

/**
 * Defines values for GoblinSharkColor.
 * Possible values include: 'pink', 'gray', 'brown'
 * @readonly
 * @enum {string}
 */
export type GoblinSharkColor = 'pink' | 'gray' | 'brown';

/**
 * Defines values for MyKind.
 * Possible values include: 'Kind1'
 * @readonly
 * @enum {string}
 */
export type MyKind = 'Kind1';

/**
 * Contains response data for the list operation.
 */
export type ListResponse = CatalogArray & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CatalogArray;
    };
};

/**
 * Contains response data for the create operation.
 */
export type CreateResponse = CatalogDictionary & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CatalogDictionary;
    };
};

/**
 * Contains response data for the update operation.
 */
export type UpdateResponse = CatalogArray & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: CatalogArray;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type BasicGetValidResponse = Basic & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Basic;
    };
};

/**
 * Contains response data for the getInvalid operation.
 */
export type BasicGetInvalidResponse = Basic & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Basic;
    };
};

/**
 * Contains response data for the getEmpty operation.
 */
export type BasicGetEmptyResponse = Basic & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Basic;
    };
};

/**
 * Contains response data for the getNull operation.
 */
export type BasicGetNullResponse = Basic & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Basic;
    };
};

/**
 * Contains response data for the getNotProvided operation.
 */
export type BasicGetNotProvidedResponse = Basic & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Basic;
    };
};

/**
 * Contains response data for the getInt operation.
 */
export type PrimitiveGetIntResponse = IntWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: IntWrapper;
    };
};

/**
 * Contains response data for the getLong operation.
 */
export type PrimitiveGetLongResponse = LongWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: LongWrapper;
    };
};

/**
 * Contains response data for the getFloat operation.
 */
export type PrimitiveGetFloatResponse = FloatWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FloatWrapper;
    };
};

/**
 * Contains response data for the getDouble operation.
 */
export type PrimitiveGetDoubleResponse = DoubleWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DoubleWrapper;
    };
};

/**
 * Contains response data for the getBool operation.
 */
export type PrimitiveGetBoolResponse = BooleanWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: BooleanWrapper;
    };
};

/**
 * Contains response data for the getString operation.
 */
export type PrimitiveGetStringResponse = StringWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: StringWrapper;
    };
};

/**
 * Contains response data for the getDate operation.
 */
export type PrimitiveGetDateResponse = DateWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DateWrapper;
    };
};

/**
 * Contains response data for the getDateTime operation.
 */
export type PrimitiveGetDateTimeResponse = DatetimeWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DatetimeWrapper;
    };
};

/**
 * Contains response data for the getDateTimeRfc1123 operation.
 */
export type PrimitiveGetDateTimeRfc1123Response = Datetimerfc1123Wrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Datetimerfc1123Wrapper;
    };
};

/**
 * Contains response data for the getDuration operation.
 */
export type PrimitiveGetDurationResponse = DurationWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DurationWrapper;
    };
};

/**
 * Contains response data for the getByte operation.
 */
export type PrimitiveGetByteResponse = ByteWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ByteWrapper;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type ArrayModelGetValidResponse = ArrayWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ArrayWrapper;
    };
};

/**
 * Contains response data for the getEmpty operation.
 */
export type ArrayModelGetEmptyResponse = ArrayWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ArrayWrapper;
    };
};

/**
 * Contains response data for the getNotProvided operation.
 */
export type ArrayModelGetNotProvidedResponse = ArrayWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ArrayWrapper;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type DictionaryGetValidResponse = DictionaryWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DictionaryWrapper;
    };
};

/**
 * Contains response data for the getEmpty operation.
 */
export type DictionaryGetEmptyResponse = DictionaryWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DictionaryWrapper;
    };
};

/**
 * Contains response data for the getNull operation.
 */
export type DictionaryGetNullResponse = DictionaryWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DictionaryWrapper;
    };
};

/**
 * Contains response data for the getNotProvided operation.
 */
export type DictionaryGetNotProvidedResponse = DictionaryWrapper & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DictionaryWrapper;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type InheritanceGetValidResponse = Siamese & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Siamese;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type PolymorphismGetValidResponse = FishUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FishUnion;
    };
};

/**
 * Contains response data for the getDotSyntax operation.
 */
export type PolymorphismGetDotSyntaxResponse = DotFishUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DotFishUnion;
    };
};

/**
 * Contains response data for the getComposedWithDiscriminator operation.
 */
export type PolymorphismGetComposedWithDiscriminatorResponse = DotFishMarket & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DotFishMarket;
    };
};

/**
 * Contains response data for the getComposedWithoutDiscriminator operation.
 */
export type PolymorphismGetComposedWithoutDiscriminatorResponse = DotFishMarket & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DotFishMarket;
    };
};

/**
 * Contains response data for the getComplicated operation.
 */
export type PolymorphismGetComplicatedResponse = SalmonUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SalmonUnion;
    };
};

/**
 * Contains response data for the putMissingDiscriminator operation.
 */
export type PolymorphismPutMissingDiscriminatorResponse = SalmonUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SalmonUnion;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type PolymorphicrecursiveGetValidResponse = FishUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FishUnion;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type ReadonlypropertyGetValidResponse = ReadonlyObj & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReadonlyObj;
    };
};

/**
 * Contains response data for the getValid operation.
 */
export type FlattencomplexGetValidResponse = MyBaseTypeUnion & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: MyBaseTypeUnion;
    };
};
