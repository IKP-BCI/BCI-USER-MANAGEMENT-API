import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { QueryOptions } from 'mongoose';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { UserInformationDTO } from 'src/dto/userInformation.dto';
import { PaginationQuery } from 'src/query/paginationQuery';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {

    }

    @Get()
    getUserAll(@Query() paginationQuery: PaginationQuery) {
        console.log(paginationQuery);
        return this.userService.findAll(paginationQuery);
    }

    @Get('/management')
    getMangement(@Query() paginationQuery: PaginationQuery) {
        console.log(paginationQuery);
        return this.userService.findUserManagement(paginationQuery);
    }

    @Get()
    getUserList(@Query() paginationQuery: PaginationQuery) {
        console.log(paginationQuery);
        return this.userService.findAll(paginationQuery);
    }

    @Post()
    createUser(@Body() userDto: CreateUserDto) {
        return this.userService.create(userDto);
    }

    // @Get(':id')
    // getUserById(@Param() id: string) {
    //     // return this.userService.create(userDto);
    // }

    @Delete(':id')
    deleteUser(@Param() id: string) {
        // return this.userService.create(userDto);
    }

    @Put(':id')
    editUser(@Param() id: string) {
        // return this.userService.create(userDto);
    }



    // create(@Res() res: Response) {
    //     res.status(HttpStatus.CREATED).send();
    // }

    @Get(':id')
    getUserById(@Param() id: string) {
        return this.userService.findById(Number(id));
    }
}
