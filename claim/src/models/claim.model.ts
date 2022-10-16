import {Entity, model, property} from '@loopback/repository';

@model()
export class Claim extends Entity {
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
  policyId: string;

  @property({
    type: 'string',
    required: true,
  })
  claimReason: string;

  @property({
    type: 'date',
    required: true,
  })
  firstNotificationOfLossDate: string;

  @property({
    type: 'number',
    required: true,
  })
  claimAmount: number;


  constructor(data?: Partial<Claim>) {
    super(data);
  }
}

export interface ClaimRelations {
  // describe navigational properties here
}

export type ClaimWithRelations = Claim & ClaimRelations;
