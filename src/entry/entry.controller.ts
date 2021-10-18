import { Body, Controller, Get, Post, Logger, Param } from '@nestjs/common';
import { EntryService } from './entry.service';
import { EntryEntity } from '../../libs/database/entities/entry.entity';
import { EntryContentEntity } from '../../libs/database/entities/entry-content.entity';
import { EntryCategoryEntity } from '../../libs/database/entities/entry-category.entity';
import { EntryPersonEntity } from '../../libs/database/entities/entry-person.entity';
import { EntryLinkEntity } from '../../libs/database/entities/entry-link.entity';
import { InputEntryDto, readEntryDto } from '../dto/entry.dto';
@Controller('entry')
export class EntryController {
    constructor(
        private readonly entryService: EntryService
    ){}

    @Get()
    async getEntryList() : Promise<EntryEntity[]>{
        return await this.entryService.readEntryList();
    }
    @Get(':id')
    async getOneEntry(@Param('id') uuid: string) : Promise<any>{
        return await this.entryService.readEntry(uuid);
    }

    @Get('content')
    async getEntryContentList() : Promise<EntryContentEntity[]>{
        return await this.entryService.readEntryContentList();
    }

    @Get('category')
    async getEntryCategoryList() : Promise<EntryCategoryEntity[]>{
        return await this.entryService.readEntryCategoryList();
    }

    @Get('person')
    async getEntryPersonList() : Promise<EntryPersonEntity[]>{
        return await this.entryService.readEntryPersonList();
    }

    @Get('link')
    async getEntryLinkList() : Promise<EntryLinkEntity[]>{
        return await this.entryService.readEntryLinkList();
    }

    @Post()
    async createEntry(@Body() input: InputEntryDto){
        //return // await this.entryService.createEntry(input);

        return this.entryService.createEntry(input);
    }
}
