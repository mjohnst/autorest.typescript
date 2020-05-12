/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as operations from "./operations";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { CosmosDBManagementClientContext } from "./cosmosDBManagementClientContext";

class CosmosDBManagementClient extends CosmosDBManagementClientContext {
  /**
   * Initializes a new instance of the CosmosDBManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    subscriptionId: string,
    options?: Models.CosmosDBManagementClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.databaseAccounts = new operations.DatabaseAccounts(this);
    this.operations = new operations.Operations(this);
    this.database = new operations.Database(this);
    this.collection = new operations.Collection(this);
    this.collectionRegion = new operations.CollectionRegion(this);
    this.databaseAccountRegion = new operations.DatabaseAccountRegion(this);
    this.percentileSourceTarget = new operations.PercentileSourceTarget(this);
    this.percentileTarget = new operations.PercentileTarget(this);
    this.percentile = new operations.Percentile(this);
    this.collectionPartitionRegion = new operations.CollectionPartitionRegion(
      this
    );
    this.collectionPartition = new operations.CollectionPartition(this);
    this.partitionKeyRangeId = new operations.PartitionKeyRangeId(this);
    this.partitionKeyRangeIdRegion = new operations.PartitionKeyRangeIdRegion(
      this
    );
    this.sqlResources = new operations.SqlResources(this);
    this.mongoDBResources = new operations.MongoDBResources(this);
    this.tableResources = new operations.TableResources(this);
    this.cassandraResources = new operations.CassandraResources(this);
    this.gremlinResources = new operations.GremlinResources(this);
    this.notebookWorkspaces = new operations.NotebookWorkspaces(this);
    this.privateLinkResources = new operations.PrivateLinkResources(this);
    this.privateEndpointConnections = new operations.PrivateEndpointConnections(
      this
    );
  }

  databaseAccounts: operations.DatabaseAccounts;
  operations: operations.Operations;
  database: operations.Database;
  collection: operations.Collection;
  collectionRegion: operations.CollectionRegion;
  databaseAccountRegion: operations.DatabaseAccountRegion;
  percentileSourceTarget: operations.PercentileSourceTarget;
  percentileTarget: operations.PercentileTarget;
  percentile: operations.Percentile;
  collectionPartitionRegion: operations.CollectionPartitionRegion;
  collectionPartition: operations.CollectionPartition;
  partitionKeyRangeId: operations.PartitionKeyRangeId;
  partitionKeyRangeIdRegion: operations.PartitionKeyRangeIdRegion;
  sqlResources: operations.SqlResources;
  mongoDBResources: operations.MongoDBResources;
  tableResources: operations.TableResources;
  cassandraResources: operations.CassandraResources;
  gremlinResources: operations.GremlinResources;
  notebookWorkspaces: operations.NotebookWorkspaces;
  privateLinkResources: operations.PrivateLinkResources;
  privateEndpointConnections: operations.PrivateEndpointConnections;
}

// Operation Specifications

export {
  CosmosDBManagementClient,
  CosmosDBManagementClientContext,
  Models as CosmosDBManagementModels,
  Mappers as CosmosDBManagementMappers
};
export * from "./operations";
