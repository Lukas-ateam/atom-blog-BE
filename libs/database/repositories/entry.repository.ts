import { EntityRepository, Repository } from 'typeorm';
import { EntryEntity } from '../entities/entry.entity';
import { CreateEntryDto } from '../../../src/dto/entry.dto';

@EntityRepository(EntryEntity)
export class EntryRepository extends Repository<EntryEntity> {
    async findAllEntry(){
        return this.find({
            join: {
                alias: "e",
                leftJoinAndSelect: {
                    entry_content: "e.content",
                },
            }
        })
    }
    async findOneEntryById(uuid: string){   
        return this.findOne({
            join: {
                alias: "e",
                leftJoinAndSelect: {
                    entry_link: "e.link",
                    entry_category: "e.category",
                    entry_content: "e.content", 
                },
            },
            where: {
                uuid: uuid
            },
        })
    }
    async saveEntry(entryDto: CreateEntryDto){
        
        return this.create().save();
    }
}