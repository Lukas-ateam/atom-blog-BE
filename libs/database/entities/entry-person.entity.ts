import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EntryEntity } from './entry.entity';

export enum PersonType {
  AUTHOR = 'author',
  CONTRIBUTOR = 'contributor',
}

@Entity('entry_person')
export class EntryPersonEntity extends BaseEntity {
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

  @Column({
    type: 'enum',
    enum: PersonType,
  })
  type: PersonType;

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
