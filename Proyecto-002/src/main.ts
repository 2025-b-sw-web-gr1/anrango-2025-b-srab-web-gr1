import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS
  app.enableCors();
  
  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Marcas y Modelos de Celulares')
    .setDescription('Documentación completa de endpoints RESTful para gestión de marcas y modelos de celulares')
    .setVersion('1.0')
    .addTag('brands', 'Operaciones relacionadas con marcas de celulares')
    .addTag('models', 'Operaciones relacionadas con modelos de celulares')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  // Puerto del servidor
  const PORT = process.env.PORT || 3000;
  
  await app.listen(PORT);
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📚 Documentación Swagger disponible en http://localhost:${PORT}/api`);
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
