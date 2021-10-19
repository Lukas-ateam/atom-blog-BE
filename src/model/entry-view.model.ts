import { ContentType } from "libs/database/entities/entry-content.entity";
import { PersonType } from "libs/database/entities/entry-person.entity";

export class readEntryDto{
  uuid: string;
  published: string;
  updated: string;
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