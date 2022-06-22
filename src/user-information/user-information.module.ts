import { Module } from '@nestjs/common';
import { UserInformationController } from './user-information.controller';
import { UserInformationService } from './user-information.service';

@Module({
  controllers: [UserInformationController],
  providers: [UserInformationService]
})
export class UserInformationModule {}
