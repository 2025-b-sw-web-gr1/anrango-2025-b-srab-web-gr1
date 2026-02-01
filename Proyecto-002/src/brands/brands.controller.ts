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
import { BrandsService } from './brands.service';
import { Brand } from './brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  // GET /brands → obtener todas las marcas
  @Get()
  @ApiOperation({ summary: 'Obtener todas las marcas', description: 'Retorna la lista completa de marcas de celulares con sus modelos asociados' })
  @ApiResponse({ status: 200, description: 'Lista de marcas obtenida exitosamente' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async findAll() {
    const brands = await this.brandsService.findAll();
    return { statusCode: HttpStatus.OK, data: brands };
  }

  // GET /brands/:id → obtener una marca por ID
  @Get(':id')
  @ApiOperation({ summary: 'Obtener una marca por ID', description: 'Retorna una marca específica con todos sus modelos' })
  @ApiParam({ name: 'id', description: 'ID de la marca', example: 1 })
  @ApiResponse({ status: 200, description: 'Marca encontrada exitosamente' })
  @ApiResponse({ status: 404, description: 'Marca no encontrada' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async findOne(@Param('id') id: number) {
    const brand = await this.brandsService.findOne(id);
    if (!brand) {
      throw new HttpException('Marca no encontrada', HttpStatus.NOT_FOUND);
    }
    return { statusCode: HttpStatus.OK, data: brand };
  }

  // POST /brands → crear una marca
  @Post()
  @ApiOperation({ summary: 'Crear una nueva marca', description: 'Crea una nueva marca de celulares en la base de datos' })
  @ApiBody({ type: CreateBrandDto })
  @ApiResponse({ status: 201, description: 'Marca creada exitosamente' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async create(@Body() data: CreateBrandDto) {
    try {
      const brand = await this.brandsService.create(data);
      return { statusCode: HttpStatus.CREATED, data: brand };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // PUT /brands/:id → actualizar una marca
  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una marca', description: 'Actualiza los datos de una marca existente' })
  @ApiParam({ name: 'id', description: 'ID de la marca a actualizar', example: 1 })
  @ApiBody({ type: UpdateBrandDto })
  @ApiResponse({ status: 200, description: 'Marca actualizada exitosamente' })
  @ApiResponse({ status: 404, description: 'Marca no encontrada' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async update(@Param('id') id: number, @Body() data: UpdateBrandDto) {
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
  @ApiOperation({ summary: 'Eliminar una marca', description: 'Elimina una marca de la base de datos' })
  @ApiParam({ name: 'id', description: 'ID de la marca a eliminar', example: 1 })
  @ApiResponse({ status: 204, description: 'Marca eliminada exitosamente' })
  @ApiResponse({ status: 400, description: 'No se puede eliminar la marca' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
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
  @ApiOperation({ summary: 'Obtener modelos de una marca', description: 'Retorna todos los modelos asociados a una marca específica' })
  @ApiParam({ name: 'id', description: 'ID de la marca', example: 1 })
  @ApiResponse({ status: 200, description: 'Modelos obtenidos exitosamente' })
  @ApiResponse({ status: 404, description: 'Marca no encontrada' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor' })
  async findBrandModels(@Param('id') id: number) {
    const brand = await this.brandsService.findBrandModels(id);
    if (!brand) {
      throw new HttpException('Marca no encontrada', HttpStatus.NOT_FOUND);
    }
    return { statusCode: HttpStatus.OK, data: brand.models };
  }
}
