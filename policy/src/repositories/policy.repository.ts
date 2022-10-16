import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Policy, PolicyRelations} from '../models';

export class PolicyRepository extends DefaultCrudRepository<
  Policy,
  typeof Policy.prototype.id,
  PolicyRelations
> {
  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Policy, dataSource);
  }
}
