import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Account, AccountDocument} from "./account.model";
import {Model} from "mongoose";

@Injectable()
export class AccountsService {
    constructor(@InjectModel('account') private readonly accountModel: Model<AccountDocument>) {}

    async createAccount(account: Account): Promise<Account> {
        const newAccount = new this.accountModel(account);
        return newAccount.save();
    }

    async getAccounts() {
        return this.accountModel.find();
    }

    async updateAccount(id, data): Promise<Account> {
        return this.accountModel.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteAccount(id) {
        return this.accountModel.findByIdAndRemove(id);
    }
}
