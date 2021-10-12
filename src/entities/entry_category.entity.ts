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

  @Column()
  term: string;

  @Column()
  scheme: string;

  @Column()
  label: string;

  @ManyToOne((type) => Entry, (entry) => entry.category)
  @JoinColumn({
    name: 'entry',
    referencedColumnName: 'uuid'
  })
  entry: Entry;
}
