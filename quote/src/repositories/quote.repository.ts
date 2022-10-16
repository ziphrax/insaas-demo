import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Quote, QuoteRelations} from '../models';

export class QuoteRepository extends DefaultCrudRepository<
  Quote,
  typeof Quote.prototype.id,
  QuoteRelations
> {
  constructor(
    @inject('datasources.mongoDb') dataSource: MongoDbDataSource,
  ) {
    super(Quote, dataSource);
  }
}
