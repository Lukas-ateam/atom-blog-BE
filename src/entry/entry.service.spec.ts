import { Test, TestingModule } from '@nestjs/testing';
import { EntryService } from './entry.service';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EntryModule } from './entry.module';
import { AppModule } from '../app.module';
import { Repository } from 'typeorm';

describe('EntryService', () => {
  let service: EntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EntryService,
      ],
    }).compile();

    service = module.get<EntryService>(EntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  /*
  it('Entry List (entry_findAll)', async() => {
    const result = await service.entry_findAll();
    expect(result).not.toBeNull();
  });

  it('Entry Content List (entry_content_findAll)', async() => {
    const result = await service.entry_content_findAll();
    expect(result).not.toBeNull();
  });

  it('Entry Category List (entry_category_findAll)', async() => {
    const result = await service.entry_category_findAll();
    expect(result).not.toBeNull();
  });

  it('Entry Person List (entry_person_findAll)', async() => {
    const result = await service.entry_person_findAll();
    expect(result).not.toBeNull();
  });

  it('Entry Link List (entry_link_findAll)', async() => {
    const result = await service.entry_link_findAll();
    expect(result).not.toBeNull();
  });
  */
});
