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
import {Affinity} from '../models';
import {AffinityRepository} from '../repositories';

export class AffinityController {
  constructor(
    @repository(AffinityRepository)
    public affinityRepository : AffinityRepository,
  ) {}

  @post('/affinities')
  @response(200, {
    description: 'Affinity model instance',
    content: {'application/json': {schema: getModelSchemaRef(Affinity)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Affinity, {
            title: 'NewAffinity',
            exclude: ['id'],
          }),
        },
      },
    })
    affinity: Omit<Affinity, 'id'>,
  ): Promise<Affinity> {
    return this.affinityRepository.create(affinity);
  }

  @get('/affinities/count')
  @response(200, {
    description: 'Affinity model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Affinity) where?: Where<Affinity>,
  ): Promise<Count> {
    return this.affinityRepository.count(where);
  }

  @get('/affinities')
  @response(200, {
    description: 'Array of Affinity model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Affinity, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Affinity) filter?: Filter<Affinity>,
  ): Promise<Affinity[]> {
    return this.affinityRepository.find(filter);
  }

  @patch('/affinities')
  @response(200, {
    description: 'Affinity PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Affinity, {partial: true}),
        },
      },
    })
    affinity: Affinity,
    @param.where(Affinity) where?: Where<Affinity>,
  ): Promise<Count> {
    return this.affinityRepository.updateAll(affinity, where);
  }

  @get('/affinities/{id}')
  @response(200, {
    description: 'Affinity model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Affinity, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Affinity, {exclude: 'where'}) filter?: FilterExcludingWhere<Affinity>
  ): Promise<Affinity> {
    return this.affinityRepository.findById(id, filter);
  }

  @patch('/affinities/{id}')
  @response(204, {
    description: 'Affinity PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Affinity, {partial: true}),
        },
      },
    })
    affinity: Affinity,
  ): Promise<void> {
    await this.affinityRepository.updateById(id, affinity);
  }

  @put('/affinities/{id}')
  @response(204, {
    description: 'Affinity PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() affinity: Affinity,
  ): Promise<void> {
    await this.affinityRepository.replaceById(id, affinity);
  }

  @del('/affinities/{id}')
  @response(204, {
    description: 'Affinity DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.affinityRepository.deleteById(id);
  }
}
