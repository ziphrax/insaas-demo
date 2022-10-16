import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {InsaasTier, InsaasTierRelations} from '../models';

export class InsaasTierRepository extends DefaultCrudRepository<
  InsaasTier,
  typeof InsaasTier.prototype.id,
  InsaasTierRelations
> {
  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource,
  ) {
    super(InsaasTier, dataSource);
  }
}
