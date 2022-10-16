import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Claim, ClaimRelations} from '../models';

export class ClaimRepository extends DefaultCrudRepository<
  Claim,
  typeof Claim.prototype.id,
  ClaimRelations
> {
  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Claim, dataSource);
  }
}
