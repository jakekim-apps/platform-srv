import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Card, CardDocument } from './card.model';

@Injectable()
export class CardsService {
    constructor(@InjectModel('card') private readonly cardModel: Model<CardDocument>) {}

    async createCard(card: Card): Promise<Card> {
        const newCard = new this.cardModel(card);
        return newCard.save()
    }

    async getCards(){
        return this.cardModel.find();
    }

    async updateCard(id,data):Promise<Card> {
        return this.cardModel.findByIdAndUpdate(id,data,{new:true})
    }

    async deleteCard(id){
        return this.cardModel.findByIdAndRemove(id)
    }

}
