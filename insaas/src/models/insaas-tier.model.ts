import {Entity, model, property} from '@loopback/repository';

@model()
export class InsaasTier extends Entity {
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
  tierName: string;

  @property({
    type: 'boolean',
    required: true,
  })
  quoteEnabled: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  claimsEnabled: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  policyEnabled: boolean;

  @property({
    type: 'number',
  })
  monthlyCost?: number;

  @property({
    type: 'number',
  })
  annualCost?: number;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'date',
    required: true,
  })
  effectiveDate: string;

  @property({
    type: 'date',
  })
  endDate?: string;


  constructor(data?: Partial<InsaasTier>) {
    super(data);
  }
}

export interface InsaasTierRelations {
  // describe navigational properties here
}

export type InsaasTierWithRelations = InsaasTier & InsaasTierRelations;
