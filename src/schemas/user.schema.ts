import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ versionKey: false })
export class User {
    @Prop()
    userId: string; //บอกน้องทาม เปลี่ยน id เป็น userId
    @Prop()
    firmName: string;
    @Prop()
    username: string;
    @Prop()
    role: string[];
    @Prop()
    workStatus: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);