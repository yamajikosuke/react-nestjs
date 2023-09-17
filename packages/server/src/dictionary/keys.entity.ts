import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Key {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: string;

  // @OneToOne(() => Details)
  // @JoinColumn([
  //   {
  //     name: 'detailsId',
  //     referencedColumnName: 'id',
  //   },
  // ])
  // details?: Details;
}
