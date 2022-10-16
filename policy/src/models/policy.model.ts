import {Entity, model, property} from '@loopback/repository';

@model()
export class Policy extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  quoteId: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'date',
    required: true,
  })
  purchaseDate: string;

  @property({
    type: 'date',
    required: true,
  })
  effectiveDate: string;

  @property({
    type: 'date',
    required: true,
  })
  expiryDate: string;

  @property({
    type: 'number',
    required: true,
  })
  coverAmount: number;


  constructor(data?: Partial<Policy>) {
    super(data);
  }
}

export interface PolicyRelations {
  // describe navigational properties here
}

export type PolicyWithRelations = Policy & PolicyRelations;
