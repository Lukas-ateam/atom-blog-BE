import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
    async findAllUser(){
        return await this.find()
    }
    async createUser(user: UserEntity){
        return await this.create(user).save();
    }
}