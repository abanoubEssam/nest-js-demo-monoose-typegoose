import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from './user.service';
import { User } from './interfaces/user.model';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('listusers')
    async listUsers(): Promise<User[] | null> {
        return await this.userService.listUsers();
    }

    @Post('createuser')
    async createUser(@Body() user: User): Promise<User> {
        return await this.userService.createCustomUser(user);
    }
}