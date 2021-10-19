import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserDto, CreateUserDto} from '../dto/user.dto';

@Resolver('User')
export class UserResolver {
    constructor(
        private readonly userService: UserService,
    ){}
    @Query(() => [UserDto])
    async getUsers() {
        return await this.userService.getUsers();
    }
    @Mutation(() => UserDto)
    async createUser(@Args('data') data: CreateUserDto){
        return await this.userService.createUser(data);
    }
}
