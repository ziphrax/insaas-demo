import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {InsaasTier} from '../models';
import {InsaasTierRepository} from '../repositories';

export class TierController {
  constructor(
    @repository(InsaasTierRepository)
    public insaasTierRepository : InsaasTierRepository,
  ) {}

  @post('/insaas-tiers')
  @response(200, {
    description: 'InsaasTier model instance',
    content: {'application/json': {schema: getModelSchemaRef(InsaasTier)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InsaasTier, {
            title: 'NewInsaasTier',
            exclude: ['id'],
          }),
        },
      },
    })
    insaasTier: Omit<InsaasTier, 'id'>,
  ): Promise<InsaasTier> {
    return this.insaasTierRepository.create(insaasTier);
  }

  @get('/insaas-tiers/count')
  @response(200, {
    description: 'InsaasTier model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(InsaasTier) where?: Where<InsaasTier>,
  ): Promise<Count> {
    return this.insaasTierRepository.count(where);
  }

  @get('/insaas-tiers')
  @response(200, {
    description: 'Array of InsaasTier model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(InsaasTier, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(InsaasTier) filter?: Filter<InsaasTier>,
  ): Promise<InsaasTier[]> {
    return this.insaasTierRepository.find(filter);
  }

  @patch('/insaas-tiers')
  @response(200, {
    description: 'InsaasTier PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InsaasTier, {partial: true}),
        },
      },
    })
    insaasTier: InsaasTier,
    @param.where(InsaasTier) where?: Where<InsaasTier>,
  ): Promise<Count> {
    return this.insaasTierRepository.updateAll(insaasTier, where);
  }

  @get('/insaas-tiers/{id}')
  @response(200, {
    description: 'InsaasTier model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(InsaasTier, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(InsaasTier, {exclude: 'where'}) filter?: FilterExcludingWhere<InsaasTier>
  ): Promise<InsaasTier> {
    return this.insaasTierRepository.findById(id, filter);
  }

  @patch('/insaas-tiers/{id}')
  @response(204, {
    description: 'InsaasTier PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InsaasTier, {partial: true}),
        },
      },
    })
    insaasTier: InsaasTier,
  ): Promise<void> {
    await this.insaasTierRepository.updateById(id, insaasTier);
  }

  @put('/insaas-tiers/{id}')
  @response(204, {
    description: 'InsaasTier PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() insaasTier: InsaasTier,
  ): Promise<void> {
    await this.insaasTierRepository.replaceById(id, insaasTier);
  }

  @del('/insaas-tiers/{id}')
  @response(204, {
    description: 'InsaasTier DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.insaasTierRepository.deleteById(id);
  }
}
