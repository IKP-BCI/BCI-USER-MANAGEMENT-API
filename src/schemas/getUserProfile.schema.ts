import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';

export type GetUserProfileDocument = GetUserProfile & Document;

@Schema({ versionKey: false })
export class GetUserProfile {
    @Prop({type: SchemaTypes.ObjectId })
    _id: Types.ObjectId;
    @Prop()
    firstname_th: string;
    @Prop()
    lastname_th: string;
    @Prop()
    firstname_en: string;
    @Prop()
    lastname_en: string;
    @Prop()
    position: string;
    @Prop()
    email: string;
    @Prop()
    mobile_no: string;
    @Prop()
    phone_contact: string;
    @Prop()
    ext: string;
    @Prop()
    work_status: boolean;
    @Prop()
    role: string[];
    @Prop()
    profile_picture: string;
    @Prop()
    username: string;
    @Prop()
    logAccess: string[];
    @Prop()
    createDate: string;
    @Prop()
    createdBy: string;

}

export const GetUserProfileDocument = SchemaFactory.createForClass(GetUserProfile);