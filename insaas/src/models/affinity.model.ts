import {Entity, model, property} from '@loopback/repository';

@model()
export class Affinity extends Entity {
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
  userId: string;

  @property({
    type: 'string',
    required: true,
  })
  tierId: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'date',
    required: true,
  })
  createdDate: string;


  constructor(data?: Partial<Affinity>) {
    super(data);
  }
}

export interface AffinityRelations {
  // describe navigational properties here
}

export type AffinityWithRelations = Affinity & AffinityRelations;
