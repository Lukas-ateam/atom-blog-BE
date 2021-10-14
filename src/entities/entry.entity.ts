import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Entry_Person } from './entry_person.entity';
import { Entry_Content } from './entry_content.entity';
import { Entry_Category } from './entry_category.entity';
import { Entry_Link } from './entry_link.entity';

@Entity('entry')
export class Entry extends BaseEntity {
  @PrimaryGeneratedColumn('uuid') // unique
  @OneToOne((type) => Entry_Content, (uuid) => uuid.entry,{
    cascade: true
  })
  uuid: string;

  @OneToMany((type) => Entry_Category, (category) => category.entry,{
    cascade: true
  })
  category: Entry_Category[];

  @CreateDateColumn({
    type: 'timestamp',
    nullable: true
  })
  published: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated: Date;

  @Column()
  title: string;

  @OneToMany((type) => Entry_Link, (link) => link.entry,{
    cascade: true
  })
  link: Entry_Link[];

  @Column({
    nullable: true
  })
  summary: string;

  @OneToMany((type) => Entry_Person, (author) => author.entry,{
    cascade: true
  })
  author: Entry_Person[]; 

  @OneToMany((type) => Entry_Person, (contributor) => contributor.entry,{
    cascade: true
  })
  contributor: Entry_Person[];

  @Column()
  id: string;

  @Column({
    nullable: true
  })
  source: string;

  @Column({
    nullable: true
  })
  rights: string;
}
