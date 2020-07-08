import {Injectable} from '@nestjs/common';
import {InjectModel} from 'nestjs-typegoose';
import {ReturnModelType} from '@typegoose/typegoose';
import { User } from './interfaces/user.model';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly userModel: ReturnModelType<typeof User>) {
    }

    async createCustomUser(user: User) {
        const createdUser = new this.userModel(user);
        return await createdUser.save();
    }

    async listUsers(): Promise<User[] | null> {
        const users = await this.userModel.find();
        const translatedUser = this.userModel.schema.methods.toJSONLocalizedOnly(users , "ar");
        return  translatedUser
    }
}