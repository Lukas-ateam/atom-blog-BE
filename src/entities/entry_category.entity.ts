import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Entry } from './entry.entity';

@Entity('entry_category')
export class Entry_Category extends BaseEntity {
  @PrimaryGeneratedColumn('uuid') // unique
  uuid: string;

  @ManyToOne((type) => Entry,{
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'entry',
    referencedColumnName: 'uuid'
  })
  entry: Entry;

  @Column()
  term: string;

  @Column()
  scheme: string;

  @Column({
    nullable: true,
  })
  label: string;
}
