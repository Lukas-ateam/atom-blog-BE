import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 

import { Repository } from 'typeorm';
import { Entry } from '../entities/entry.entity';
import { Entry_Content } from '../entities/entry_content.entity';
import { Entry_Category } from '../entities/entry_category.entity';
import { Entry_Person } from '../entities/entry_person.entity';
import { Entry_Link } from '../entities/entry_link.entity';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(Entry)
    private EntryRepository: Repository<Entry>,

    @InjectRepository(Entry_Content)
    private Entry_ContentRepository: Repository<Entry_Content>,

    @InjectRepository(Entry_Category)
    private Entry_CategoryRepository: Repository<Entry_Category>,

    @InjectRepository(Entry_Person)
    private Entry_PersonRepository: Repository<Entry_Person>,

    @InjectRepository(Entry_Link)
    private Entry_LinkRepository: Repository<Entry_Link>
  ){}

  // Service
  async entry_findAll(): Promise<Entry[]> {
    return this.query_entry_findAll();
  }
  async entry_content_findAll(): Promise<Entry_Content[]> {
    return this.query_entry_content_findAll();
  }
  async entry_category_findAll(): Promise<Entry_Category[]> {
    return this.query_entry_category_findAll();
  }
  async entry_person_findAll(): Promise<Entry_Person[]> {
    return this.query_entry_person_findAll();
  }
  async entry_link_findAll(): Promise<Entry_Link[]> {
    return this.query_entry_link_findAll();
  }

  // raw Query
  private async query_entry_findAll(){
    return await this.EntryRepository.createQueryBuilder('entry')
    .getMany();
  }
  private async query_entry_content_findAll(){
    return await this.Entry_ContentRepository.createQueryBuilder('entry_content')
    .getMany();
  }
  private async query_entry_category_findAll(){
    return await this.Entry_CategoryRepository.createQueryBuilder('entry_category')  
    .getMany();
  }
  private async query_entry_person_findAll(){
    return await this.Entry_PersonRepository.createQueryBuilder('entry_person')
    .getMany();
  }
  private async query_entry_link_findAll(){
    return await this.Entry_LinkRepository.createQueryBuilder('entry_link')
    .getMany();  
  }
}
