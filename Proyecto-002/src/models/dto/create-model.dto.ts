import { ApiProperty } from '@nestjs/swagger';

export class CreateModelDto {
  @ApiProperty({
    example: 'Galaxy S24',
    description: 'Nombre del modelo de celular',
  })
  name: string;

  @ApiProperty({
    example: 2024,
    description: 'Año de lanzamiento del modelo',
    minimum: 1900,
    maximum: 2100,
  })
  year: number;

  @ApiProperty({
    example: { id: 1 },
    description: 'ID de la marca a la que pertenece el modelo',
  })
  brand: {
    id: number;
  };
}
