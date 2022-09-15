import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';
export type SubCategoryDocument = SubCategory & Document;

@Schema({ timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }})

@Schema()
export class SubCategory {

    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId , ref: 'Category' })
    categoryId:  mongoose.Schema.Types.ObjectId;

    @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    createdAt: Date;

    @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    updatedAt: Date;

}

export const SubCategorySchema = SchemaFactory.createForClass(SubCategory);