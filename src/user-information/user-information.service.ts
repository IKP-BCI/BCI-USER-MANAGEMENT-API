import { Injectable } from '@nestjs/common';
import { GeneralInformation, PotentialUserInformation, UserInformationDTO } from 'src/dto/userInformation.dto';

@Injectable()
export class UserInformationService {
    private generalInformation: GeneralInformation = {
        bciSuperAdmin: 1,
        bciAdminMaker: 9,
        bciAdminApprover: 4,
        bciOperator: 2,
        auditorFirm: 2,
        auditorAdminMaker: 5,
        auditorAdminApprover: 2,
        auditorUserMaker: 12,
        auditorUserApprover: 4,
        auditorViewver: 2,
        auditorIndividual: 6,
        bankFirm: 4,
        bankAdminMaker: 8,
        bankAdminApprover: 3,
        bankUserMaker: 11,
        bankUserApprover: 3,
        bankViewver: 7
    }

    private potentialUserInformation: PotentialUserInformation = {
        auditorApplicant: 9,
        firmApplicant: 9
    }

    private userInformation: UserInformationDTO = {
        generalInformation: this.generalInformation,
        potentialUserInformation: this.potentialUserInformation
    };

    getUserInformation(): UserInformationDTO {
        return this.userInformation;
    }
}
