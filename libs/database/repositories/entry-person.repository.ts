import { EntityRepository, Repository } from 'typeorm';
import { EntryPersonEntity } from '../entities/entry-person.entity';

@EntityRepository(EntryPersonEntity)
export class EntryPersonRepository extends Repository<EntryPersonEntity>{
    async findAllEntryPerson(){
        // return await this.createQueryBuilder('entry_person')
        // .getMany();
        return this.find();
    }
}