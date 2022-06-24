import { ApiProperty } from '@nestjs/swagger';

export class EditUserDto {
    @ApiProperty({ required: true, default: 'ชื่อ' })
    firstNameTH: string;
    @ApiProperty({ required: true, default: 'นามสกุล' })
    lastNameTH: string;
    @ApiProperty({ required: true, default: 'firstname' })
    firstNameEN: string;
    @ApiProperty({ required: true, default: 'lastname' })
    lastNameEN: string;
    @ApiProperty({ required: false, nullable: true, default: 'position' })
    position: string;
    @ApiProperty({ required: true, default: 'example@email.com' })
    email: string;
    @ApiProperty({ required: true, default: '0812345678' })
    mobileNo: string;
    @ApiProperty({ required: false, nullable: true, default: 'phoneContact' })
    phoneContact?: string;
    @ApiProperty({ required: false, nullable: true, default: 'ext' })
    ext: string;
    @ApiProperty({ required: true, default: true })
    workStatus: boolean;
    @ApiProperty({ required: true, default: ['Super Admin'] })
    role: string[];
    @ApiProperty({ required: false, nullable: true, default: 'profilePicture' })
    profilePicture: string;
    // username: string;
    // logAccess: string[];
    @ApiProperty({ required: false, nullable: true, default: 'remark' })
    remark: string;
    // createdBy: string;
    // createdDate: string;
    // lastestUpdatedDate: string;
}

