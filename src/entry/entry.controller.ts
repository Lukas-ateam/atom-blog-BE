import { Controller, Get } from '@nestjs/common';
import { EntryService } from './entry.service';
import { Entry } from '../entities/entry.entity';

@Controller('entry')
export class EntryController {
    constructor(
        private readonly entry_service: EntryService
    ){}

    @Get('list')
    async getEntryList() : Promise<Entry[]>{
        return await this.entry_service.entry_findAll();
    }
}
