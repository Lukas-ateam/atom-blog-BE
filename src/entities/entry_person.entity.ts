import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Entry } from './entry.entity';

@Entity('entry_person')
export class Entry_Person extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number
    
    @Column()
    name!: string

//     @ManyToOne(
//         (type) => Entry
//     )
//     entry!: Entry
}