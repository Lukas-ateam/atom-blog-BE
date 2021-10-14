import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import { Entry } from './entry.entity';

@Entity('entry_link')
export class Entry_Link extends BaseEntity {
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
  