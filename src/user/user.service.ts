import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, QueryOptions } from 'mongoose';
import { CreateUserDto as CreateUserDto } from 'src/dto/createUser.dto';
import { UserDto } from 'src/dto/user.dto';
import { GeneralInformation, PotentialUserInformation, UserInformationDTO } from 'src/dto/userInformation.dto';
import { PaginationQuery } from 'src/query/paginationQuery';
import { GetUserProfile, GetUserProfileDocument } from 'src/schemas/getUserProfile.schema';
import { User, UserDocument } from 'src/schemas/user.schema';
import { UserProfile, UserProfileDocument } from 'src/schemas/userProfile.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(UserProfile.name) private userProfileModel: Model<UserProfileDocument>,@InjectModel(UserProfile.name) private getUserProfileModel: Model<GetUserProfileDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }

    async create(userDto: CreateUserDto): Promise<UserProfile> {

        const userProfile = new UserProfile()
        userProfile.firstname_th = userDto.firstNameTH;
        userProfile.lastname_th = userDto.lastNameTH;
        userProfile.firstname_en = userDto.firstNameEN;
        userProfile.lastname_en = userDto.lastNameEN;
        userProfile.position = userDto.position;
        userProfile.email = userDto.email;
        userProfile.mobile_no = userDto.mobileNo;
        userProfile.phone_contact = userDto.phoneContact;
        userProfile.work_status = userDto.workStatus;
        userProfile.role = userDto.role;
        userProfile.profile_picture = userDto.profilePicture;
        userProfile.username = userDto.email;
        userProfile.logAccess = [];
        userProfile.createDate = new Date().toISOString();
        userProfile.createdBy = "";
        const userProfileModelCreated = new this.userProfileModel(userProfile).save();
        // console.log(userProfileModelCreated);
        // console.log((await userProfileModelCreated)._id);
        // console.log((await userProfileModelCreated).id);
        // const userId = (await userProfileModelCreated)._id;
        // const user = new User()
        // user.firmName = "";
        // user.username = userDto.firstNameEN;
        // user.role = userDto.role;
        // user.workStatus = userDto.workStatus;
        // user.userId = userId.toString();
        // new this.userModel(user).save()

        return userProfileModelCreated;
    }

    async findAll(options: PaginationQuery) {
        const total = await this.userProfileModel.count();
        const totalPage = Math.ceil(total/options.limit);
        const results = await this.userProfileModel.find().exec();
        // .where({firmName: options.firmName, username: options.username})
        // .skip((options.page-1)*options.limit)
        // .limit(options.limit)
        
        console.log({ results, page: Number(options.page), totalPages: totalPage});
        return { results, page: Number(options.page), totalPages: totalPage};
    }
    // findAll(): UserDTO[] {
    //     return this.users;
    // }

    async findById(id: number) {
        // return this.userProfileModel.find((u) => u._id === id.toString());
        return "";
    }


    async findUserManagement(options: PaginationQuery) {
        const total = await this.userProfileModel.count();
        const totalPage = Math.ceil(total/options.limit);
        const getUserProfileModel: GetUserProfile[]  = await this.userProfileModel
        .find()
        // .where({firmName: options.firmName, username: options.username})
        .skip((options.page-1)*options.limit)
        .limit(options.limit)
        .exec();

        const results = [];
        for(var userProfile of getUserProfileModel){
            const user = new UserDto()
            // console.log(userProfile._id);
            // console.log(userProfile.id);
            user.userId = (userProfile._id).toString();
            user.firmName = "";
            user.username = userProfile.username;
            user.role = userProfile.role;
            user.workStatus = userProfile.work_status;

            results.push(user);
        }
        
        
        
        // console.log({ results, page: Number(options.page), totalPages: totalPage});
        return { results, page: Number(options.page), totalPages: totalPage};
    }

}
