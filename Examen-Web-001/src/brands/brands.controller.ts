import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BrandsService } from './brands.service';
import { Brand } from './brand.entity';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  // GET /brands → obtener todas las marcas
  @Get()
  async findAll() {
    const brands = await this.brandsService.findAll();
    return { statusCode: HttpStatus.OK, data: brands };
  }

  // GET /brands/:id → obtener una marca por ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const brand = await this.brandsService.findOne(id);
    if (!brand) {
      throw new HttpException('Marca no encontrada', HttpStatus.NOT_FOUND);
    }
    return { statusCode: HttpStatus.OK, data: brand };
  }

  // POST /brands → crear una marca
  @Post()
  async create(@Body() data: Partial<Brand>) {
    try {
      const brand = await this.brandsService.create(data);
      return { statusCode: HttpStatus.CREATED, data: brand };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // PUT /brands/:id → actualizar una marca
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Brand>) {
    try {
      const brand = await this.brandsService.update(id, data);
      if (!brand) {
        throw new HttpException('Marca no encontrada', HttpStatus.NOT_FOUND);
      }
      return { statusCode: HttpStatus.OK, data: brand };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // DELETE /brands/:id → eliminar una marca
  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      await this.brandsService.delete(id);
      return { statusCode: HttpStatus.NO_CONTENT };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // GET /brands/:id/models → obtener modelos de una marca específica
  @Get(':id/models')
  async findBrandModels(@Param('id') id: number) {
    const brand = await this.brandsService.findBrandModels(id);
    if (!brand) {
      throw new HttpException('Marca no encontrada', HttpStatus.NOT_FOUND);
    }
    return { statusCode: HttpStatus.OK, data: brand.models };
  }
}
