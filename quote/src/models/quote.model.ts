import {Entity, model, property} from '@loopback/repository';

@model()
export class Quote extends Entity {
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
  vehicleRegistration: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'number',
  })
  annualPremium?: number;

  @property({
    type: 'number',
  })
  monthlyPremium?: number;

  @property({
    type: 'number',
  })
  initialMonthPremium?: number;

  @property({
    type: 'date',
    required: true,
  })
  effectiveDate: string;

  @property({
    type: 'number',
    default: 1,
  })
  paymentDay?: number;

  @property({
    type: 'date',
    required: true,
  })
  quoteDate: string;


  constructor(data?: Partial<Quote>) {
    super(data);
  }
}

export interface QuoteRelations {
  // describe navigational properties here
}

export type QuoteWithRelations = Quote & QuoteRelations;
