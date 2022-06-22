export class UserInformationDTO {
    generalInformation: GeneralInformation;
    potentialUserInformation: PotentialUserInformation;
}

export class GeneralInformation {
    bciSuperAdmin: number;
    bciAdminMaker: number;
    bciAdminApprover: number;
    bciOperator: number;
    auditorFirm: number;
    auditorAdminMaker: number;
    auditorAdminApprover: number;
    auditorUserMaker: number;
    auditorUserApprover: number;
    auditorViewver: number;
    auditorIndividual: number;
    bankFirm: number;
    bankAdminMaker: number;
    bankAdminApprover: number;
    bankUserMaker: number;
    bankUserApprover: number;
    bankViewver: number;
}

export class PotentialUserInformation {
    auditorApplicant: number;
    firmApplicant: number;
}