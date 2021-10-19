import { Test, TestingModule } from '@nestjs/testing';
import { EntryService } from './entry.service';
import { EntryModule } from './entry.module';
import { DatabaseModule } from '../../libs/database/database.module';
import { Logger } from '@nestjs/common';
import { EntryRepository } from '../../libs/database/repositories/entry.repository';
import { getConnection, getConnectionManager, getRepository } from 'typeorm';
import { EntryEntity } from '../../libs/database/entities/entry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('EntryService', () => {
  let service: EntryService;
  let entryRepo: EntryRepository;
  beforeEach(async () => {
    Logger.log(process.env.NODE_ENV);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EntryService,
        EntryRepository
      ],
    }).compile();

    service = module.get<EntryService>(EntryService);
    entryRepo = module.get<EntryRepository>(EntryRepository);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('Entry List (findAllEntry)', async() => {
    const result:any = '1';
    const repoResult:any = '2';
    jest.spyOn(service, 'getEntry').mockImplementation(() => result);
    jest.spyOn(entryRepo, 'findOneEntryById').mockImplementation(() => repoResult);
    expect(result).toEqual(repoResult);
  });

  /*
  it('Entry Content List (findAllEntryContent)', async() => {
    const result = await service.readEntryContentList();
    expect(result).not.toBeNull();
  });

  it('Entry Category List (findAllEntryCategory)', async() => {
    const result = await service.readEntryCategoryList();
    expect(result).not.toBeNull();
  });

  it('Entry Person List (findAllEntryPerson)', async() => {
    const result = await service.readEntryPersonList();
    expect(result).not.toBeNull();
  });

  it('Entry Link List (findAllEntryLink)', async() => {
    const result = await service.readEntryLinkList();
    expect(result).not.toBeNull();
  });
  */
});
