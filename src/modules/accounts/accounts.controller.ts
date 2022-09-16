import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {AccountsService} from "./accounts.service";
import {Account} from "./account.model";
import {AccountUpdateDto} from "./account.update.dto";

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}

    @Get()
    async getAll() {
        return this.accountsService.getAccounts();
    }

    @Post()
    async createAccount(@Body() accountDto: Account) {
        return this.accountsService.createAccount(accountDto);
    }

    @Put(':id')
    async updateAccount(
        @Param('id') id: string, @Body() updateData: AccountUpdateDto
    ): Promise<Account> {
        return this.accountsService.updateAccount(id, updateData);
    }

    @Delete(':id')
    async deleteAccount(@Param('id') id: string) {
        return this.accountsService.deleteAccount(id);
    }
}
