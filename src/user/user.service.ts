import { Injectable } from '@nestjs/common';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../../libs/database/repositories/user.repository';
import { UserEntity } from '../../libs/database/entities/user.entity';
import { UserDto, CreateUserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
    async getUsers() {
        const userRepository: UserRepository = getCustomRepository<UserRepository>(UserRepository);
        return await userRepository.findAllUser();
    }
    async createUser(data: CreateUserDto){
        const userRepository: UserRepository = getCustomRepository<UserRepository>(UserRepository);
        const user = new UserEntity();
        user.email = data.email;
        user.pwd = data.pwd;
        return await userRepository.createUser(user);
    }
}
