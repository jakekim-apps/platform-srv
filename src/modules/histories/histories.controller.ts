import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {HistoriesService} from "./histories.service";
import { History } from "./history.model";
import {HistoryUpdateDto} from "./history.update.dto";

@Controller('histories')
export class HistoriesController {
    constructor(private readonly historiesService: HistoriesService) {}

    @Get()
    async getAll() {
        return this.historiesService.getHistory();
    }

    @Post()
    async createHistory(@Body() historyDto: History){
        return this.historiesService.createHistory(historyDto)
    }


    @Put(':id')
    async updateHistory(
        @Param('id') id:string ,@Body() updateData: HistoryUpdateDto
    ):Promise<History>{
        return this.historiesService.updateHistory(id, updateData)
    }

    @Delete(':id')
    async deleteHistory(@Param('id') id:string){
        return this.historiesService.deleteHistory(id)
    }

}
