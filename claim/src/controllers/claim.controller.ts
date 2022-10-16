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
import {Claim} from '../models';
import {ClaimRepository} from '../repositories';

export class ClaimController {
  constructor(
    @repository(ClaimRepository)
    public claimRepository : ClaimRepository,
  ) {}

  @post('/claims')
  @response(200, {
    description: 'Claim model instance',
    content: {'application/json': {schema: getModelSchemaRef(Claim)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Claim, {
            title: 'NewClaim',
            exclude: ['id'],
          }),
        },
      },
    })
    claim: Omit<Claim, 'id'>,
  ): Promise<Claim> {
    return this.claimRepository.create(claim);
  }

  @get('/claims/count')
  @response(200, {
    description: 'Claim model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Claim) where?: Where<Claim>,
  ): Promise<Count> {
    return this.claimRepository.count(where);
  }

  @get('/claims')
  @response(200, {
    description: 'Array of Claim model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Claim, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Claim) filter?: Filter<Claim>,
  ): Promise<Claim[]> {
    return this.claimRepository.find(filter);
  }

  @patch('/claims')
  @response(200, {
    description: 'Claim PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Claim, {partial: true}),
        },
      },
    })
    claim: Claim,
    @param.where(Claim) where?: Where<Claim>,
  ): Promise<Count> {
    return this.claimRepository.updateAll(claim, where);
  }

  @get('/claims/{id}')
  @response(200, {
    description: 'Claim model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Claim, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Claim, {exclude: 'where'}) filter?: FilterExcludingWhere<Claim>
  ): Promise<Claim> {
    return this.claimRepository.findById(id, filter);
  }

  @patch('/claims/{id}')
  @response(204, {
    description: 'Claim PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Claim, {partial: true}),
        },
      },
    })
    claim: Claim,
  ): Promise<void> {
    await this.claimRepository.updateById(id, claim);
  }

  @put('/claims/{id}')
  @response(204, {
    description: 'Claim PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() claim: Claim,
  ): Promise<void> {
    await this.claimRepository.replaceById(id, claim);
  }

  @del('/claims/{id}')
  @response(204, {
    description: 'Claim DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.claimRepository.deleteById(id);
  }
}
