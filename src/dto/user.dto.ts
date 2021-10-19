import { Field, ObjectType, InputType } from "@nestjs/graphql";

@ObjectType()
export class UserDto {
    @Field()
    id: number;

    @Field()
    email: string;

    @Field()
    pwd: string;

    @Field()
    created_at: string;
}

@InputType()
export class CreateUserDto {
    @Field()
    email: string;

    @Field()
    pwd: string;
}