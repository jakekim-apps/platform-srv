import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';
export type AccountDocument = Account & Document;

@Schema({ timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }})

@Schema()
export class Account {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    accountNumber: string;

    @Prop()
    description: string;

    @Prop({ default: 0 })
    amount: number;

    @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    createdAt: Date;

    @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    updatedAt: Date;

}

export const AccountSchema = SchemaFactory.createForClass(Account)