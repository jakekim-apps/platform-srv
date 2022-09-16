import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsersService} from "./users.service";
import {User} from "./user.model";
import {UserUpdateDto} from "./user.update.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async getAll() {
        return this.usersService.getUsers();
    }

    @Post()
    async createUser(@Body() userDto: User) {
        return this.usersService.createUser(userDto)
    }

    @Put(':id')
    async updateUser(
        @Param('id') id: string, @Body() updateData: UserUpdateDto
    ): Promise<User> {
        return this.usersService.updateUser(id, updateData);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUser(id);
    }
}
