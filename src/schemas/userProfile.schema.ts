import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';
export type UserProfileDocument = UserProfile & Document;

@Schema({
    versionKey: false
})

export class UserProfile {

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
    log_access: string[];
    @Prop()
    remark: string;
    @Prop()
    created_date: string;
    @Prop()
    updated_date: string
    @Prop()
    created_by: string;

}

export const UserProfileSchema = SchemaFactory.createForClass(UserProfile);
