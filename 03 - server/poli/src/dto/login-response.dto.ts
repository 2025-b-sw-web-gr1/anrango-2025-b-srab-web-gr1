import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({ 
    example: 'Login exitoso', 
    description: 'Mensaje de éxito' 
})
  message: string;

  @ApiProperty({ 
    example: 'admin', 
    description: 'Usuario autenticado' 
})
  user: string;
}
 