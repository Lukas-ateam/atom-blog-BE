import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Entry } from './entry.entity';

export enum Content_Type {
  TEXT = 'text',
  HTML = 'html',
  XHTML = 'xhtml',
}

@Entity('entry_content')
export class Entry_Content extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @OneToOne((type) => Entry, (entry) => entry.uuid)
  entry: string;

  @Column({
    type: 'enum',
    enum: Content_Type,
  })
  type: Content_Type;

  @Column()
  content: string;
}
