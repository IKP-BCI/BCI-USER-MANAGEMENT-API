import { Controller, Get } from '@nestjs/common';
import { UserInformationDTO } from 'src/dto/userInformation.dto';
import { UserInformationService } from './user-information.service';

@Controller('user-information')
export class UserInformationController {
    constructor(private userInformationService: UserInformationService) {

    }

    @Get()
    getUserAmount(): UserInformationDTO{
        return this.userInformationService.getUserInformation();
    }
    
} 