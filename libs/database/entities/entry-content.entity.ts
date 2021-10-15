import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EntryEntity } from './entry.entity';

export enum ContentType {
  TEXT = 'text',
  HTML = 'html',
  XHTML = 'xhtml',
}

@Entity('entry_content')
export class EntryContentEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @OneToOne((type) => EntryEntity,{
    onUpdate: 'CASCADE'
  })
  @JoinColumn({
    name: 'entry',
    referencedColumnName: 'uuid'
  })
  entry: string;

  @Column({
    type: 'enum',
    enum: ContentType,
  })
  type: ContentType;

  @Column()
  content: string;
}
