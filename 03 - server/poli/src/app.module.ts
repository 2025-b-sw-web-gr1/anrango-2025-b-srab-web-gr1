import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receta } from './recetas/receta.entity'; 
import { Ingrediente } from './ingredientes/ingrediente.entity';
import { RecetasModule } from './recetas/recetas.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [ // dentro de imports van los módulos que use nuestra aplicación
    TypeOrmModule.forRoot({ 
      type: 'sqlite', 
      database: 'database.sqlite', 
      entities: [Receta, Ingrediente], 
      synchronize: true, // ⚠️ Solo para desarrollo 
      }), 
    RecetasModule, 
    IngredientesModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
