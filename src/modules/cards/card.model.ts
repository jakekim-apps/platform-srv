import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';
export type CardDocument = Card & Document;

@Schema({ timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }})

@Schema()
export class Card {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    number: string;

    @Prop()
    description: string;

    @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    createdAt: Date;

    @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    updatedAt: Date;

}

export const CardSchema = SchemaFactory.createForClass(Card)