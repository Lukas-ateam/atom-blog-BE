import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { EntryEntity } from './entry.entity';

@Entity('entry_category')
export class EntryCategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid') // unique
  uuid: string;

  @ManyToOne((type) => EntryEntity,{
    onUpdate: 'CASCADE'
  })
  @JoinColumn({
    name: 'entry',
    referencedColumnName: 'uuid'
  })
  entry: EntryEntity;

  @Column()
  term: string;

  @Column()
  scheme: string;

  @Column({
    nullable: true,
  })
  label: string;
}
