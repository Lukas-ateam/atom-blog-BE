import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 

import { EntryEntity } from '../../libs/database/entities/entry.entity';
import { EntryContentEntity } from '../../libs/database/entities/entry-content.entity';
import { EntryCategoryEntity } from '../../libs/database/entities/entry-category.entity';
import { EntryPersonEntity } from '../../libs/database/entities/entry-person.entity';
import { EntryLinkEntity } from '../../libs/database/entities/entry-link.entity';
import { EntryRepository } from '../../libs/database/repositories/entry.repository';
import { EntryContentRepository } from '../../libs/database/repositories/entry-content.repository';
import { EntryCategoryRepository } from '../../libs/database/repositories/entry-category.repository';
import { EntryPersonRepository } from 'libs/database/repositories/entry-person.repository';
import { EntryLinkRepository } from 'libs/database/repositories/entry-link.repository';
import { EntityManager, getCustomRepository } from 'typeorm';

@Injectable()
export class EntryService {
  async readEntryList(): Promise<EntryEntity[]>{
    const entryRepository: EntryRepository = getCustomRepository<EntryRepository>(EntryRepository);
    return await entryRepository.findAllEntry();
  }
  async readEntryContentList(): Promise<EntryContentEntity[]>{
    const entryContentRepository: EntryContentRepository = getCustomRepository<EntryContentRepository>(EntryContentRepository);
    return await entryContentRepository.findAllEntryContent();
  }
  async readEntryCategoryList(): Promise<EntryCategoryEntity[]>{
    const entryCategoryRepository: EntryCategoryRepository = getCustomRepository<EntryCategoryRepository>(EntryCategoryRepository);
    return await entryCategoryRepository.findAllEntryCategory();
  }
  async readEntryPersonList(): Promise<EntryPersonEntity[]>{
    const entryPersonRepository: EntryPersonRepository = getCustomRepository<EntryPersonRepository>(EntryPersonRepository);
    return await entryPersonRepository.findAllEntryPerson();
  }
  async readEntryLinkList(): Promise<EntryLinkEntity[]>{
    const entryLinkRepository: EntryLinkRepository = getCustomRepository<EntryLinkRepository>(EntryLinkRepository);
    return await entryLinkRepository.findAllEntryLink();
  }
}