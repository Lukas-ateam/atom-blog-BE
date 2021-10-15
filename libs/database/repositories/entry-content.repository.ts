import { EntityRepository, Repository } from 'typeorm';
import { EntryContentEntity } from '../entities/entry-content.entity';

@EntityRepository(EntryContentEntity)
export class EntryContentRepository extends Repository<EntryContentEntity>{
    async findAllEntryContent(){
        // return await this.createQueryBuilder('entry')
        // .getMany();
        return this.find();
    }
}