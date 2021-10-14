import { Test, TestingModule } from '@nestjs/testing';
import { EntryService } from './entry.service';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Entry } from '../entities/entry.entity';
import { Entry_Content } from '../entities/entry_content.entity';
import { Entry_Category } from '../entities/entry_category.entity';
import { Entry_Person } from '../entities/entry_person.entity';
import { Entry_Link } from '../entities/entry_link.entity';
import { EntryModule } from './entry.module';
import { AppModule } from '../app.module';

describe('EntryService', () => {
  let service: EntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: `.env.${process.env.NODE_ENV}`,
        }),
        AppModule,
        EntryModule
      ],
      providers: [
        EntryService,
      ],
    }).compile();

    service = module.get<EntryService>(EntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Entry List (entry_findAll)', async() => {
    const result = await service.entry_findAll();
    expect(result).not.toBeNull();
  });

  // it('Entry Content List (entry_content_findAll)', async() => {
  //   const result = await service.entry_content_findAll();
  //   expect(result).not.toBeNull();
  // });

  // it('Entry Category List (entry_category_findAll)', async() => {
  //   const result = await service.entry_category_findAll();
  //   expect(result).not.toBeNull();
  // });

  // it('Entry Person List (entry_person_findAll)', async() => {
  //   const result = await service.entry_person_findAll();
  //   expect(result).not.toBeNull();
  // });

  // it('Entry Link List (entry_link_findAll)', async() => {
  //   const result = await service.entry_link_findAll();
  //   expect(result).not.toBeNull();
  // });
});
