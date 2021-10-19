import { PartialType } from '@nestjs/mapped-types';
import { PersonType } from 'libs/database/entities/entry-person.entity';
import { ContentType } from '../../libs/database/entities/entry-content.entity';

export class InputEntryDto{
  category: CreateEntryCategoryDto[];
  title: string;
  link: CreateEntryLinkDto[];
  summary: string;
  author: CreateEntryPersonDto;
  contributor: CreateEntryPersonDto[];
  id: string;
  source: string;
  rights: string;
  content: CreatEntryContentDto;
}

export class CreateEntryDto{
  title: string;
  summary: string;
  id: string;
  source: string;
  rights: string;
}

export class CreateEntryCategoryDto{
  entry: string;
  term: string;
  schema: string;
  label: string;
}

export class CreateEntryLinkDto{
  entry: string;
  rel: string;
  href: string;
  type: string;
  hreflang: string;
  title: string;
  length: string;
}

export class CreateEntryPersonDto{
  entry: string;
  type: PersonType;
  name: string;
  uri: string;
  email: string;
}

export class CreatEntryContentDto{
  entry: string;
  type: ContentType;
  content: string;
}
