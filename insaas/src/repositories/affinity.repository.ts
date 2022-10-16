import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Affinity, AffinityRelations} from '../models';

export class AffinityRepository extends DefaultCrudRepository<
  Affinity,
  typeof Affinity.prototype.id,
  AffinityRelations
> {
  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Affinity, dataSource);
  }
}
