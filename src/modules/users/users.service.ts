import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "./user.model";
import {Model} from "mongoose";

@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) {}

    async createUser(user: User): Promise<User> {
        const newUser = new this.userModel(User);
        return newUser.save();
    }

    async getUsers() {
        return this.userModel.find();
    }

    async updateUser(id, data): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteUser(id) {
        return this.userModel.findByIdAndRemove(id);
    }
}
