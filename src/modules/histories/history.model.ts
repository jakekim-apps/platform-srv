import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';

export type HistoryDocument = History & Document;

enum ActionType {
    REVENUE,
    SPENDING
}

enum TargetType {
    CARD,
    ACCOUNT,
    CASH
}

@Schema({ timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }})

@Schema()
export class History {

    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;

    @Prop()
    amount: number;

    @Prop({ type: String, enum: ActionType })
    actionType: ActionType;

    // TODO check it
    @Prop({ type: String, enum: TargetType })
    targetType: TargetType;

    // TODO check it
    @Prop()
    targetId: mongoose.Schema.Types.ObjectId;

    @Prop( { type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    categoryId: mongoose.Schema.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory' })
    subCategoryId: mongoose.Schema.Types.ObjectId;

    @Prop( { type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    userId: mongoose.Schema.Types.ObjectId

    @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    createdAt: Date;

    @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    updatedAt: Date;

}

export const HistorySchema = SchemaFactory.createForClass(History);