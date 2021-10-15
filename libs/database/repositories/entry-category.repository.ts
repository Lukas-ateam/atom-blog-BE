import { EntityRepository, Repository } from 'typeorm';
import { EntryCategoryEntity } from '../entities/entry-category.entity';

@EntityRepository(EntryCategoryEntity)
export class EntryCategoryRepository extends Repository<EntryCategoryEntity>{
    async findAllEntryCategory(){
        // return await this.createQueryBuilder('entry')
        // .getMany();
        return this.find();
    }
}