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
import { ModelsService } from './models.service';
import { Model } from './model.entity';

@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  // GET /models → obtener todos los modelos
  @Get()
  async findAll() {
    const models = await this.modelsService.findAll();
    return { statusCode: HttpStatus.OK, data: models };
  }

  // GET /models/:id → obtener un modelo por ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const model = await this.modelsService.findOne(id);
    if (!model) {
      throw new HttpException('Modelo no encontrado', HttpStatus.NOT_FOUND);
    }
    return { statusCode: HttpStatus.OK, data: model };
  }

  // POST /models → crear un modelo
  @Post()
  async create(@Body() data: Partial<Model>) {
    try {
      const model = await this.modelsService.create(data);
      return { statusCode: HttpStatus.CREATED, data: model };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // PUT /models/:id → actualizar un modelo
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Model>) {
    try {
      const model = await this.modelsService.update(id, data);
      if (!model) {
        throw new HttpException('Modelo no encontrado', HttpStatus.NOT_FOUND);
      }
      return { statusCode: HttpStatus.OK, data: model };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // DELETE /models/:id → eliminar un modelo
  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      await this.modelsService.delete(id);
      return { statusCode: HttpStatus.NO_CONTENT };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
