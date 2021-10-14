import { Module } from '@nestjs/common';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entry } from '../entities/entry.entity';
import { Entry_Person } from '../entities/entry_person.entity';
import { Entry_Content } from '../entities/entry_content.entity';
import { Entry_Category } from '../entities/entry_category.entity';
import { Entry_Link } from '../entities/entry_link.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forFeature([Entry, Entry_Person, Entry_Content, Entry_Category, Entry_Link])
  ],
  controllers: [EntryController],
  providers: [EntryService],
  exports: [EntryService]
})
export class EntryModule {}
