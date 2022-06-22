import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import { UserProfile, UserProfileSchema } from 'src/schemas/userProfile.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserProfile.name, schema: UserProfileSchema },{ name: User.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
