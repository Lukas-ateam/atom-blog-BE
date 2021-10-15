import { EntityRepository, Repository } from 'typeorm';
import { EntryEntity } from '../entities/entry.entity';

@EntityRepository(EntryEntity)
export class EntryRepository extends Repository<EntryEntity> {
    async findAllEntry(){
        // return await this.createQueryBuilder('entry')
        // .getMany();
        return this.find();
    }
}