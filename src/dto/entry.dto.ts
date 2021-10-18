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
export class readEntryDto{
  uuid: string;
  published: Date;
  updated: Date;
  title: string;
  summary: string;
  author: readEntryPersonDto;
  contributor: readEntryPersonDto[];
  id: string;
  source: string;
  rights: string;
  link: readEntryLinkDto[];
  category: readCategoryDto[];
  content: readEntryContentDto;
}

export class readCategoryDto{
  uuid: string;
  entry: string;
  term: string;
  schema: string;
  label: string;
}

export class readEntryLinkDto{
  uuid: string;
  entry: string;
  rel: string;
  href: string;
  type: string;
  hreflang: string;
  title: string;
  length: string;
}

export class readEntryPersonDto{
  uuid: string;
  entry: string;
  type: PersonType;
  name: string;
  uri: string;
  email: string;
}

export class readEntryContentDto{
  entry: string;
  type: ContentType;
  content: string;
}