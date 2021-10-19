import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Timestamp, CreateDateColumn } from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  email: string;

  @Column()
  pwd: string;

  @CreateDateColumn({
    type: 'timestamp'
  })
  created_at: string;
}