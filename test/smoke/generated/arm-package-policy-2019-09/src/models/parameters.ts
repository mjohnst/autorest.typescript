/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";

export const $host: coreHttp.OperationURLParameter = {
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

export const scope: coreHttp.OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    serializedName: "scope",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const policyAssignmentName: coreHttp.OperationURLParameter = {
  parameterPath: "policyAssignmentName",
  mapper: {
    serializedName: "policyAssignmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: coreHttp.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2019-09-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: coreHttp.OperationParameter = {
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

export const parameters: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.PolicyAssignment
};

export const resourceGroupName: coreHttp.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-w._()]+$"),
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filter: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const subscriptionId: coreHttp.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceProviderNamespace: coreHttp.OperationURLParameter = {
  parameterPath: "resourceProviderNamespace",
  mapper: {
    serializedName: "resourceProviderNamespace",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parentResourcePath: coreHttp.OperationURLParameter = {
  parameterPath: "parentResourcePath",
  mapper: {
    serializedName: "parentResourcePath",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceType: coreHttp.OperationURLParameter = {
  parameterPath: "resourceType",
  mapper: {
    serializedName: "resourceType",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceName: coreHttp.OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filter1: coreHttp.OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const managementGroupId: coreHttp.OperationURLParameter = {
  parameterPath: "managementGroupId",
  mapper: {
    serializedName: "managementGroupId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const filter2: coreHttp.OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    serializedName: "$filter",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const policyAssignmentId: coreHttp.OperationURLParameter = {
  parameterPath: "policyAssignmentId",
  mapper: {
    serializedName: "policyAssignmentId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const nextLink: coreHttp.OperationURLParameter = {
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

export const parameters1: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.PolicyDefinition
};

export const policyDefinitionName: coreHttp.OperationURLParameter = {
  parameterPath: "policyDefinitionName",
  mapper: {
    serializedName: "policyDefinitionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters2: coreHttp.OperationParameter = {
  parameterPath: "parameters",
  mapper: Mappers.PolicySetDefinition
};

export const policySetDefinitionName: coreHttp.OperationURLParameter = {
  parameterPath: "policySetDefinitionName",
  mapper: {
    serializedName: "policySetDefinitionName",
    required: true,
    type: {
      name: "String"
    }
  }
};
