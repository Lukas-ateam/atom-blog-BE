import { EntityRepository, Repository } from 'typeorm';
import { EntryLinkEntity } from '../entities/entry-link.entity';

@EntityRepository(EntryLinkEntity)
export class EntryLinkRepository extends Repository<EntryLinkEntity>{
    async findAllEntryLink(){
        // return await this.createQueryBuilder('entry')
        // .getMany();
        return this.find();
    }
}