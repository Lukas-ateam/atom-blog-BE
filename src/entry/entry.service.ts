import { Injectable } from '@nestjs/common';

import { EntryEntity } from '../../libs/database/entities/entry.entity';
import { EntryContentEntity } from '../../libs/database/entities/entry-content.entity';
import { EntryCategoryEntity } from '../../libs/database/entities/entry-category.entity';
import { EntryPersonEntity } from '../../libs/database/entities/entry-person.entity';
import { EntryLinkEntity } from '../../libs/database/entities/entry-link.entity';
import { EntryRepository } from '../../libs/database/repositories/entry.repository';
import { EntryContentRepository } from '../../libs/database/repositories/entry-content.repository';
import { EntryCategoryRepository } from '../../libs/database/repositories/entry-category.repository';
import { EntryPersonRepository } from '../../libs/database/repositories/entry-person.repository';
import { EntryLinkRepository } from '../../libs/database/repositories/entry-link.repository';
import { getCustomRepository } from 'typeorm';
import { InputEntryDto, CreateEntryDto, readEntryDto } from '../dto/entry.dto';

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

  async readEntry(uuid: string): Promise<any>{
    const entryRepository: EntryRepository = getCustomRepository<EntryRepository>(EntryRepository);
    const entryPersonRepository: EntryPersonRepository = getCustomRepository<EntryPersonRepository>(EntryPersonRepository);
    const entryCategoryRepository: EntryCategoryRepository = getCustomRepository<EntryCategoryRepository>(EntryCategoryRepository);
    const entryLinkRepository: EntryLinkRepository = getCustomRepository<EntryLinkRepository>(EntryLinkRepository);
    let entryOutPut: readEntryDto;
    const entryRes={
      entry: await entryRepository.findOneEntryById(uuid)
    }
    
    const authorRes: any = await entryPersonRepository.findEntryAuthorById(uuid);
    const contributorRes: any = await entryPersonRepository.findEntryContributorById(uuid);
    const linkRes: any = await entryLinkRepository.findEntryLinkById(uuid);
    const categoryRes: any = await entryCategoryRepository.findEntryCategoryById(uuid);
    Object.values(entryRes).map(entry => {
      return entryOutPut= {
        uuid: entry.uuid,
        published: entry.published,
        updated: entry.updated,
        title: entry.title,
        summary: entry.summary,
        author: authorRes,
        contributor: contributorRes,
        id: entry.id,
        source: entry.source,
        rights: entry.rights,
        link: linkRes,
        category: categoryRes,
        content: entry.content,
      }
    })
    return entryOutPut;
  }

  async createEntry(input: InputEntryDto): Promise<any>{
    let entry: CreateEntryDto;
    Object.values(input).map(input => {
      return entry = {
        title: input.title,
        summary: input.summary,
        id: input.id,
        source: input.source,
        rights: input.rights
      }
    });
    return entry;
  }
}