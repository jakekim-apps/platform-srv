import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { CardsService } from "./cards.service";
import { Card } from "./card.model";
import { CardUpdateDto } from "./card.update.dto";

@Controller('cards')
export class CardsController {
    constructor(private readonly cardsService: CardsService) {}

    @Get()
    async getAll() {
        return this.cardsService.getCards()
    }

    @Post()
    async createUser(@Body() cardDto: Card){
        return this.cardsService.createCard(cardDto)
    }


    @Put(':id')
    async updateCard(
        @Param('id') id:string ,@Body() updateData:CardUpdateDto
    ):Promise<Card>{
        return this.cardsService.updateCard(id,updateData)
    }

    @Delete(':id')
    async deleteCard(@Param('id') id:string){
        return this.cardsService.deleteCard(id)
    }



}
