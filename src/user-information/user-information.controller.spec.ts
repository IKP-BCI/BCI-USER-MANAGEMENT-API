import { Test, TestingModule } from '@nestjs/testing';
import { UserInformationController } from './user-information.controller';

describe('UserInformationController', () => {
  let controller: UserInformationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserInformationController],
    }).compile();

    controller = module.get<UserInformationController>(UserInformationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
