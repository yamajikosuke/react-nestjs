import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Details } from './details.entity';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;

  @Column({ default: false })
  is_done: boolean;

  @OneToOne(() => Details)
  @JoinColumn([
    {
      name: 'detailsId',
      referencedColumnName: 'id',
    },
  ])
  details?: Details;

  @Column({ default: null })
  detailsId: number;

  @Column({ default: null })
  dead_line: Date;

  // @Column()
  // created_at: Date;
}
