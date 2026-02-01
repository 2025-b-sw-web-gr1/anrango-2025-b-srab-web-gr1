import { ApiProperty } from '@nestjs/swagger';

export class CreateBrandDto {
  @ApiProperty({
    example: 'Samsung',
    description: 'Nombre de la marca de celulares',
  })
  name: string;

  @ApiProperty({
    example: 'Corea del Sur',
    description: 'País de origen de la marca',
  })
  country: string;
}
