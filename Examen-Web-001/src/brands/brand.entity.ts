import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Model } from '../models/model.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  country: string;

  @OneToMany(() => Model, model => model.brand, { cascade: true })
  models: Model[];
}
