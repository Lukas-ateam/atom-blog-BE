import { timeStamp } from "console";
import { 
    BaseEntity, 
    Column, 
    Entity, 
    JoinColumn, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { Entry_Person } from './entry_person.entity';

@Entity('entry')
export class Entry extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!:string;
    
    @Column()
    category!: string

    @Column({type: 'timestamp'})
    published!: string

    @Column()
    rights!: string

    @Column()
    source!: string

    @Column()
    summary!: string

    @Column()
    title!: string

    @Column()
    author!: string

    @Column()
    contributor!: string

    @Column({type: 'timestamp'})
    updated!: string

    // @OneToMany( 
    //     (author) => Entry_Person,
    //     (contributor) => Entry_Person
    // )
    // person!: Entry_Person  
}