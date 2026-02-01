import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './brands/brand.entity';
import { Model } from './models/model.entity';
import { BrandsModule } from './brands/brands.module';
import { ModelsModule } from './models/models.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Brand, Model],
      synchronize: true, // ⚠️ Solo para desarrollo
    }),
    BrandsModule,
    ModelsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
