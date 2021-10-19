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
import { EntryPersonEntity } from './entry-person.entity';
import { EntryContentEntity } from './entry-content.entity';
import { EntryCategoryEntity } from './entry-category.entity';
import { EntryLinkEntity } from './entry-link.entity';

@Entity('entry')
export class EntryEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid') // unique
  uuid: string;

  @OneToMany((type) => EntryCategoryEntity, (category) => category.entry,{
    cascade: true
  })
  category: EntryCategoryEntity[];

  @CreateDateColumn({
    type: 'timestamp',
    nullable: true
  })
  published: string;

  @UpdateDateColumn({ type: 'timestamp' })
  updated: string;

  @Column()
  title: string;

  @OneToMany((type) => EntryLinkEntity, (link) => link.entry,{
    cascade: true
  })
  link: EntryLinkEntity[];

  @Column({
    nullable: true
  })
  summary: string;

  @OneToOne((type) => EntryPersonEntity, (author) => author.entry,{
    cascade: true
  })
  author: EntryPersonEntity; 

  @OneToMany((type) => EntryPersonEntity, (contributor) => contributor.entry,{
    cascade: true
  })
  contributor: EntryPersonEntity[];

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

  @OneToOne((type) => EntryContentEntity, (content) => content.entry,{
    cascade: true
  })
  content: EntryContentEntity;
}