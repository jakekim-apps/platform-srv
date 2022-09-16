import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;

export enum Role {
    ADMIN,
    MANAGER,
    GUEST
}

@Schema({ timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }})

@Schema()
export class User {

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ type: String, enum: Role })
    role: Role;

    @Prop()
    phone: string;

    @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    createdAt: Date;

    @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    updatedAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(User)