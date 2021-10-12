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

@Entity('entry')
export class Entry extends BaseEntity {
  @PrimaryGeneratedColumn('uuid') // unique
  @OneToOne((type) => Entry_Content, (uuid) => uuid.entry)
  @JoinColumn({
    name: 'uuid',
    referencedColumnName: 'entry'
  })
  uuid: string;

  @OneToMany((type) => Entry_Category, (category) => category.entry)
  category: Entry_Category[];

  @CreateDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  published: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated: Date;

  @Column() // unique not null
  title: string;

  @Column() // unique nullable
  link: string;

  @Column()
  summary: string;

  @OneToMany((type) => Entry_Person, (author) => author.entry)
  author: Entry_Person[];

  @OneToMany((type) => Entry_Person, (contributor) => contributor.entry)
  contributor: Entry_Person[];

  @Column()
  id: string;

  @Column({
    nullable: true,
  })
  source: string;

  @Column({
    nullable: true,
  })
  rights: string;
}
