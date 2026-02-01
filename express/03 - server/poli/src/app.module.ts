import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receta } from './recetas/receta.entity'; 
import { Ingrediente } from './ingredientes/ingrediente.entity';
import { RecetasModule } from './recetas/recetas.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { AuthController } from './auth.controller';
import { I18nModule, 
  QueryResolver, AcceptLanguageResolver,
HeaderResolver, I18nJsonLoader } from 'nestjs-i18n';
import * as path from 'path';

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
        I18nModule.forRoot({
      fallbackLanguage: 'es',
      loader: I18nJsonLoader,
      loaderOptions: { path: path.join(__dirname, '/i18n/'), watch: true },
      resolvers: [
        { use: QueryResolver, options: ['lang'] }, // ?lang=es
        AcceptLanguageResolver,                   // header Accept-Language
        new HeaderResolver(['x-lang']),           // header personalizado
      ],
    }),
  ],
  controllers: [
    AppController,
    AuthController
  ],
  providers: [AppService],
})
export class AppModule {}
