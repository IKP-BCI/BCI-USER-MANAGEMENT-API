import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
    userId: string;
    firmName: string;
    username: string;
    role: string[];
    workStatus: boolean;
}

