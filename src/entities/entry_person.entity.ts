import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Entry } from './entry.entity';

export enum Person_Type {
  AUTHOR = 'author',
  CONTRIBUTOR = 'contributor',
}

@Entity('entry_person')
export class Entry_Person extends BaseEntity {
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

  @Column({
    type: 'enum',
    enum: Person_Type,
  })
  type: Person_Type;

  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  uri: string;

  @Column({
    nullable: true,
  })
  email: string;
}
