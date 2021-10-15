import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { EntryEntity } from './entry.entity';

@Entity('entry_link')
export class EntryLinkEntity extends BaseEntity {
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
  rel: string;

  @Column()
  href: string;

  @Column({
    nullable: true,
  })
  type: string;

  @Column({
    nullable: true,
  })
  hreflang: string;

  @Column({
    nullable: true,
  })
  title: string;
  
  @Column({
    nullable: true,
  })
  length: string;
}
  