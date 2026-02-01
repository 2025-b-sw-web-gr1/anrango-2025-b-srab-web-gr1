import { ApiProperty } from '@nestjs/swagger';

export class UpdateBrandDto {
  @ApiProperty({
    example: 'Samsung Electronics',
    description: 'Nombre de la marca de celulares',
    required: false,
  })
  name?: string;

  @ApiProperty({
    example: 'Corea del Sur',
    description: 'País de origen de la marca',
    required: false,
  })
  country?: string;
}
