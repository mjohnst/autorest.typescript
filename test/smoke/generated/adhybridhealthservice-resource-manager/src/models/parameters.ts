/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationURLParameter,
  OperationQueryParameter,
  OperationParameter
} from "@azure/core-http";
import {
  ServiceProperties as ServicePropertiesMapper,
  Tenant as TenantMapper,
  UserPreference as UserPreferenceMapper,
  ServiceMember as ServiceMemberMapper,
  AlertFeedback as AlertFeedbackMapper,
  Item as ItemMapper,
  IPAddressAggregateSetting as IPAddressAggregateSettingMapper
} from "../models/mappers";

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const serviceType: OperationQueryParameter = {
  parameterPath: ["options", "serviceType"],
  mapper: {
    serializedName: "serviceType",
    type: {
      name: "String"
    }
  }
};

export const skipCount: OperationQueryParameter = {
  parameterPath: ["options", "skipCount"],
  mapper: {
    serializedName: "skipCount",
    type: {
      name: "Number"
    }
  }
};

export const takeCount: OperationQueryParameter = {
  parameterPath: ["options", "takeCount"],
  mapper: {
    serializedName: "takeCount",
    type: {
      name: "Number"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2014-01-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const service: OperationParameter = {
  parameterPath: "service",
  mapper: ServicePropertiesMapper
};

export const serviceName: OperationURLParameter = {
  parameterPath: "serviceName",
  mapper: {
    serializedName: "serviceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const confirm: OperationQueryParameter = {
  parameterPath: ["options", "confirm"],
  mapper: {
    serializedName: "confirm",
    type: {
      name: "Boolean"
    }
  }
};

export const metricName: OperationURLParameter = {
  parameterPath: "metricName",
  mapper: {
    serializedName: "metricName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const groupName: OperationURLParameter = {
  parameterPath: "groupName",
  mapper: {
    serializedName: "groupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const perfCounter: OperationQueryParameter = {
  parameterPath: ["options", "perfCounter"],
  mapper: {
    serializedName: "perfCounter",
    type: {
      name: "Boolean"
    }
  }
};

export const groupKey: OperationQueryParameter = {
  parameterPath: ["options", "groupKey"],
  mapper: {
    serializedName: "groupKey",
    type: {
      name: "String"
    }
  }
};

export const fromDate: OperationQueryParameter = {
  parameterPath: ["options", "fromDate"],
  mapper: {
    serializedName: "fromDate",
    type: {
      name: "DateTime"
    }
  }
};

export const toDate: OperationQueryParameter = {
  parameterPath: ["options", "toDate"],
  mapper: {
    serializedName: "toDate",
    type: {
      name: "DateTime"
    }
  }
};

export const withDetails: OperationQueryParameter = {
  parameterPath: ["options", "withDetails"],
  mapper: {
    serializedName: "withDetails",
    type: {
      name: "Boolean"
    }
  }
};

export const isGroupbySite: OperationQueryParameter = {
  parameterPath: "isGroupbySite",
  mapper: {
    serializedName: "isGroupbySite",
    required: true,
    type: {
      name: "Boolean"
    }
  }
};

export const query: OperationQueryParameter = {
  parameterPath: "query",
  mapper: {
    serializedName: "query",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const nextPartitionKey: OperationQueryParameter = {
  parameterPath: "nextPartitionKey",
  mapper: {
    defaultValue: " ",
    isConstant: true,
    serializedName: "nextPartitionKey",
    type: {
      name: "String"
    }
  }
};

export const nextRowKey: OperationQueryParameter = {
  parameterPath: "nextRowKey",
  mapper: {
    defaultValue: " ",
    isConstant: true,
    serializedName: "nextRowKey",
    type: {
      name: "String"
    }
  }
};

export const serviceMemberId: OperationURLParameter = {
  parameterPath: "serviceMemberId",
  mapper: {
    serializedName: "serviceMemberId",
    required: true,
    type: {
      name: "Uuid"
    }
  }
};

export const state: OperationQueryParameter = {
  parameterPath: ["options", "state"],
  mapper: {
    serializedName: "state",
    type: {
      name: "String"
    }
  }
};

export const fromParam: OperationQueryParameter = {
  parameterPath: ["options", "fromParam"],
  mapper: {
    serializedName: "from",
    type: {
      name: "DateTime"
    }
  }
};

export const to: OperationQueryParameter = {
  parameterPath: ["options", "to"],
  mapper: {
    serializedName: "to",
    type: {
      name: "DateTime"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const grouping: OperationQueryParameter = {
  parameterPath: ["options", "grouping"],
  mapper: {
    serializedName: "grouping",
    type: {
      name: "String"
    }
  }
};

export const tenant: OperationParameter = {
  parameterPath: "tenant",
  mapper: TenantMapper
};

export const dimension: OperationURLParameter = {
  parameterPath: "dimension",
  mapper: {
    serializedName: "dimension",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const query1: OperationQueryParameter = {
  parameterPath: ["options", "query"],
  mapper: {
    serializedName: "query",
    type: {
      name: "String"
    }
  }
};

export const featureName: OperationURLParameter = {
  parameterPath: "featureName",
  mapper: {
    serializedName: "featureName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const setting: OperationParameter = {
  parameterPath: "setting",
  mapper: UserPreferenceMapper
};

export const dimensionType: OperationQueryParameter = {
  parameterPath: ["options", "dimensionType"],
  mapper: {
    serializedName: "dimensionType",
    type: {
      name: "String"
    }
  }
};

export const dimensionSignature: OperationQueryParameter = {
  parameterPath: ["options", "dimensionSignature"],
  mapper: {
    serializedName: "dimensionSignature",
    type: {
      name: "String"
    }
  }
};

export const serviceMember: OperationParameter = {
  parameterPath: "serviceMember",
  mapper: ServiceMemberMapper
};

export const errorBucket: OperationQueryParameter = {
  parameterPath: "errorBucket",
  mapper: {
    serializedName: "errorBucket",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const alertFeedback: OperationParameter = {
  parameterPath: "alertFeedback",
  mapper: AlertFeedbackMapper
};

export const shortName: OperationURLParameter = {
  parameterPath: "shortName",
  mapper: {
    serializedName: "shortName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const configurationSetting: OperationParameter = {
  parameterPath: "configurationSetting",
  mapper: ItemMapper
};

export const dataSource: OperationQueryParameter = {
  parameterPath: ["options", "dataSource"],
  mapper: {
    serializedName: "dataSource",
    type: {
      name: "String"
    }
  }
};

export const serviceMemberId1: OperationURLParameter = {
  parameterPath: "serviceMemberId",
  mapper: {
    serializedName: "serviceMemberId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const skiptoken: OperationQueryParameter = {
  parameterPath: ["options", "skiptoken"],
  mapper: {
    serializedName: "skiptoken",
    type: {
      name: "String"
    }
  }
};

export const iPAddressAggregateSetting: OperationParameter = {
  parameterPath: "iPAddressAggregateSetting",
  mapper: IPAddressAggregateSettingMapper
};