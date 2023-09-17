import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Details {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  detail: string;
}
