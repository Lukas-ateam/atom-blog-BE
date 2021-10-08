import { Module } from '@nestjs/common';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entry } from '../entities/entry.entity';
import { Entry_Person } from '../entities/entry_person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entry, Entry_Person])],
  controllers: [EntryController],
  providers: [EntryService]
})
export class EntryModule {}
