import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class Name {
  @Column()
  first: string;

  @Column()
  last: string;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column((type) => Name)
  name: Name;

  @Column()
  isActive: boolean;
}
