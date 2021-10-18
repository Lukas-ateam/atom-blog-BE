import { EntityRepository, Repository } from 'typeorm';
import { EntryPersonEntity } from '../entities/entry-person.entity';

@EntityRepository(EntryPersonEntity)
export class EntryPersonRepository extends Repository<EntryPersonEntity>{
    async findAllEntryPerson(){
        // return await this.createQueryBuilder('entry_person')
        // .getMany();
        return this.find();
    }
    async findEntryAuthorById(uuid: string){   
        return this.findOne({
            where: {
                entry: uuid,
                type: "author"
            },
        })
    }
    async findEntryContributorById(uuid: string){   
        return this.find({
            where: {
                entry: uuid,
                type: "contributor"
            },
        })
    }
}