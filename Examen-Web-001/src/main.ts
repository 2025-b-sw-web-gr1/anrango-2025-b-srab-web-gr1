import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS
  app.enableCors();
  
  // Puerto del servidor
  const PORT = process.env.PORT || 3000;
  
  await app.listen(PORT);
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📊 Endpoints disponibles:`);
  console.log(`   - GET    /brands`);
  console.log(`   - GET    /brands/:id`);
  console.log(`   - POST   /brands`);
  console.log(`   - PUT    /brands/:id`);
  console.log(`   - DELETE /brands/:id`);
  console.log(`   - GET    /brands/:id/models`);
  console.log(`   - GET    /models`);
  console.log(`   - GET    /models/:id`);
  console.log(`   - POST   /models`);
  console.log(`   - PUT    /models/:id`);
  console.log(`   - DELETE /models/:id`);
}
bootstrap();
