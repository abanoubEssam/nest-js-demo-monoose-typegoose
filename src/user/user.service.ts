import {Injectable} from '@nestjs/common';
import { User } from './interfaces/user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel("User") private readonly userModel: Model<User>) {
    }

    async createCustomUser(user: User) {
        const createdUser = await this.userModel.create(user)
        return createdUser
    }

    async listUsers(): Promise<User[] | null> {
        const users = await this.userModel.find();
        const translatedUser = this.userModel.schema.methods.toJSONLocalizedOnly(users , "ar");
        console.log("UserService -> translate", translatedUser)
        return  translatedUser
    }
}