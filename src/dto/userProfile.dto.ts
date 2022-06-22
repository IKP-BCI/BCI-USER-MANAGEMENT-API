import { ApiProperty } from '@nestjs/swagger';

export class UserProfileDto {
    firstNameTH: string;
    lastNameTH: string;
    firstNameEN: string;
    lastNameEN: string;
    position: string;
    email: string;
    mobileNo: string;
    phoneContact?: string;
    ext: string;
    workStatus: boolean;
    role: string[];
    profilePicture: string;
    username: string;
    logAccess: string[];
    remark: string;
    createdBy: string;
    createdDate: string;
    lastestUpdatedDate: string;
}

