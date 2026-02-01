import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  // Crear una marca
  async create(data: Partial<Brand>): Promise<Brand> {
    const brand = this.brandRepository.create(data);
    return this.brandRepository.save(brand);
  }

  // Actualizar una marca
  async update(id: number, data: Partial<Brand>): Promise<Brand | null> {
    await this.brandRepository.update(id, data);
    return this.brandRepository.findOneBy({ id });
  }

  // Eliminar una marca
  async delete(id: number): Promise<void> {
    await this.brandRepository.delete(id);
  }

  // Obtener una marca por ID
  async findOne(id: number): Promise<Brand | null> {
    return this.brandRepository.findOne({
      where: { id },
      relations: ['models'], // Incluye modelos relacionados
    });
  }

  // Obtener todas las marcas
  async findAll(): Promise<Brand[]> {
    return this.brandRepository.find({
      relations: ['models'],
    });
  }

  // Obtener modelos de una marca específica
  async findBrandModels(id: number): Promise<Brand | null> {
    return this.brandRepository.findOne({
      where: { id },
      relations: ['models'],
    });
  }
}
