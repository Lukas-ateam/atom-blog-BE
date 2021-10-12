import { Module } from '@nestjs/common';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entry } from '../entities/entry.entity';
import { Entry_Person } from '../entities/entry_person.entity';
import { Entry_Content } from '../entities/entry_content.entity';
import { Entry_Category } from '../entities/entry_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entry, Entry_Person, Entry_Content, Entry_Category])],
  controllers: [EntryController],
  providers: [EntryService],
})
export class EntryModule {}
