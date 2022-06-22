import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto as CreateUserDto } from 'src/dto/createUser.dto';
import { UserDto } from 'src/dto/user.dto';
import { UserProfileDto } from 'src/dto/userProfile.dto';
import { PaginationQuery } from 'src/query/paginationQuery';
import { UserProfile, UserProfileDocument } from 'src/schemas/userProfile.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(UserProfile.name) private userProfileModel: Model<UserProfileDocument>,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<UserProfile> {

        const userProfile = new UserProfile()
        userProfile.firstname_th = createUserDto.firstNameTH;
        userProfile.lastname_th = createUserDto.lastNameTH;
        userProfile.firstname_en = createUserDto.firstNameEN;
        userProfile.lastname_en = createUserDto.lastNameEN;
        userProfile.position = createUserDto.position;
        userProfile.email = createUserDto.email;
        userProfile.mobile_no = createUserDto.mobileNo;
        userProfile.phone_contact = createUserDto.phoneContact;
        userProfile.ext = createUserDto.ext;
        userProfile.work_status = createUserDto.workStatus;
        userProfile.role = createUserDto.role;
        userProfile.profile_picture = createUserDto.profilePicture;
        userProfile.username = createUserDto.email;
        userProfile.remark = "";
        userProfile.log_access = [];
        userProfile.created_date = new Date().toISOString();
        userProfile.updated_date = new Date().toISOString();
        userProfile.created_by = "";

        const userProfileModelCreated = new this.userProfileModel(userProfile).save();

        return userProfileModelCreated;
    }

    async findAll(options: PaginationQuery) {
        const total = await this.userProfileModel.count();
        const totalPage = Math.ceil(total / options.limit);
        const results = await this.userProfileModel
            .find()
            // .where({firmName: options.firmName, username: options.username})
            .skip((options.page - 1) * options.limit)
            .limit(options.limit)
            .exec();

        console.log({ results, page: Number(options.page), totalPages: totalPage });
        return { results, page: Number(options.page), totalPages: totalPage };
    }

    async findById(id: string) {
        try {
            var ObjectId = require('mongoose').Types.ObjectId;
            const userProfile = await this.userProfileModel.findById(ObjectId(id));
            const user = new UserProfileDto()
            user.firstNameTH = userProfile.firstname_th;
            user.lastNameTH = userProfile.lastname_th;
            user.firstNameEN = userProfile.firstname_en;
            user.lastNameEN = userProfile.lastname_en;
            user.position = userProfile.position;
            user.email = userProfile.email;
            user.mobileNo = userProfile.mobile_no;
            user.phoneContact = userProfile.phone_contact;
            user.workStatus = userProfile.work_status;
            user.role = userProfile.role;
            user.profilePicture = userProfile.profile_picture;
            user.username = userProfile.email;
            user.logAccess = userProfile.log_access;
            user.remark = userProfile.remark;
            user.createdBy = userProfile.created_by;
            user.createdDate = userProfile.created_date;
            user.lastestUpdatedDate = userProfile.updated_date;

        } catch (err) {
            throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
        }

        return this.userProfileModel.findById(ObjectId(id));
    }


    async findUserManagement(options: PaginationQuery) {
        const total = await this.userProfileModel.count();
        const totalPage = Math.ceil(total / options.limit);
        const userProfileModel = await this.userProfileModel
            .find()
            // .where({firmName: options.firmName, username: options.username})
            .skip((options.page - 1) * options.limit)
            .limit(options.limit)
            .exec();

        const results = [];
        for (var userProfile of userProfileModel) {
            const user = new UserDto()
            user.userId = userProfile.id;
            user.firmName = "";
            user.username = userProfile.username;
            user.role = userProfile.role;
            user.workStatus = userProfile.work_status;

            results.push(user);
        }

        return { results, page: Number(options.page), totalPages: totalPage };
    }

}
