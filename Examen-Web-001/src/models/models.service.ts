import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from './model.entity';

@Injectable()
export class ModelsService {
  constructor(
    @InjectRepository(Model)
    private readonly modelRepository: Repository<Model>,
  ) {}

  // Crear un modelo
  async create(data: Partial<Model>): Promise<Model> {
    const model = this.modelRepository.create(data);
    return this.modelRepository.save(model);
  }

  // Actualizar un modelo
  async update(id: number, data: Partial<Model>): Promise<Model | null> {
    await this.modelRepository.update(id, data);
    return this.modelRepository.findOneBy({ id });
  }

  // Eliminar un modelo
  async delete(id: number): Promise<void> {
    await this.modelRepository.delete(id);
  }

  // Obtener un modelo por ID
  async findOne(id: number): Promise<Model | null> {
    return this.modelRepository.findOne({
      where: { id },
      relations: ['brand'], // Incluye la marca relacionada
    });
  }

  // Obtener todos los modelos
  async findAll(): Promise<Model[]> {
    return this.modelRepository.find({
      relations: ['brand'],
    });
  }
}
