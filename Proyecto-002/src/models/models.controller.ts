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
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { ModelsService } from './models.service';
import { Model } from './model.entity';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';

@ApiTags('models')
@Controller('models')
export class ModelsController {
  constructor(private readonly modelsService: ModelsService) {}

  // GET /models → obtener todos los modelos
  @Get()
  @ApiOperation({ summary: 'Obtener todos los modelos', description: 'Retorna la lista completa de modelos de celulares con sus marcas asociadas' })
  @ApiResponse({ status: 200, description: 'Lista de modelos obtenida exitosamente' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async findAll() {
    const models = await this.modelsService.findAll();
    return { statusCode: HttpStatus.OK, data: models };
  }

  // GET /models/:id → obtener un modelo por ID
  @Get(':id')
  @ApiOperation({ summary: 'Obtener un modelo por ID', description: 'Retorna un modelo específico con su marca asociada' })
  @ApiParam({ name: 'id', description: 'ID del modelo', example: 1 })
  @ApiResponse({ status: 200, description: 'Modelo encontrado exitosamente' })
  @ApiResponse({ status: 404, description: 'Modelo no encontrado' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async findOne(@Param('id') id: number) {
    const model = await this.modelsService.findOne(id);
    if (!model) {
      throw new HttpException('Modelo no encontrado', HttpStatus.NOT_FOUND);
    }
    return { statusCode: HttpStatus.OK, data: model };
  }

  // POST /models → crear un modelo
  @Post()
  @ApiOperation({ summary: 'Crear un nuevo modelo', description: 'Crea un nuevo modelo de celular en la base de datos' })
  @ApiBody({ type: CreateModelDto })
  @ApiResponse({ status: 201, description: 'Modelo creado exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos o marca no existe' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async create(@Body() data: CreateModelDto) {
    try {
      const model = await this.modelsService.create(data as any);
      return { statusCode: HttpStatus.CREATED, data: model };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // PUT /models/:id → actualizar un modelo
  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un modelo', description: 'Actualiza los datos de un modelo existente' })
  @ApiParam({ name: 'id', description: 'ID del modelo a actualizar', example: 1 })
  @ApiBody({ type: UpdateModelDto })
  @ApiResponse({ status: 200, description: 'Modelo actualizado exitosamente' })
  @ApiResponse({ status: 404, description: 'Modelo no encontrado' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async update(@Param('id') id: number, @Body() data: UpdateModelDto) {
    try {
      const model = await this.modelsService.update(id, data as any);
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
  @ApiOperation({ summary: 'Eliminar un modelo', description: 'Elimina un modelo de la base de datos' })
  @ApiParam({ name: 'id', description: 'ID del modelo a eliminar', example: 1 })
  @ApiResponse({ status: 204, description: 'Modelo eliminado exitosamente' })
  @ApiResponse({ status: 400, description: 'No se puede eliminar el modelo' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async delete(@Param('id') id: number) {
    try {
      await this.modelsService.delete(id);
      return { statusCode: HttpStatus.NO_CONTENT };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
