import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EntryEntity } from './entities/entry.entity';
import { EntryContentEntity } from './entities/entry-content.entity';
import { EntryCategoryEntity } from './entities/entry-category.entity';
import { EntryPersonEntity } from './entities/entry-person.entity';
import { EntryLinkEntity } from './entities/entry-link.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { UserEntity } from './entities/user.entity';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.env.${process.env.NODE_ENV}`,
          }),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_POST),
            username: process.env.DB_USER,
            password: process.env.DB_PWD,
            database: process.env.DB_NAME,
            schema: process.env.DB_SCHEMA,
            logging: "all",
            entities: [
                EntryEntity,
                EntryContentEntity,
                EntryCategoryEntity,
                EntryPersonEntity,
                EntryLinkEntity,
                UserEntity,
            ],
            synchronize: true,
            cli: {}
        }),
        GraphQLModule.forRoot({
            debug: false,
            autoSchemaFile: 'schema.gql'
        }),
    ]
})
export class DatabaseModule {}
