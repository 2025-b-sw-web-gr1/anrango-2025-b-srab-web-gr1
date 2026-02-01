import { ApiProperty } from '@nestjs/swagger';

export class UpdateModelDto {
  @ApiProperty({
    example: 'Galaxy S24 Ultra',
    description: 'Nombre del modelo de celular',
    required: false,
  })
  name?: string;

  @ApiProperty({
    example: 2024,
    description: 'Año de lanzamiento del modelo',
    minimum: 1900,
    maximum: 2100,
    required: false,
  })
  year?: number;

  @ApiProperty({
    example: { id: 1 },
    description: 'ID de la marca a la que pertenece el modelo',
    required: false,
  })
  brand?: {
    id: number;
  };
}
