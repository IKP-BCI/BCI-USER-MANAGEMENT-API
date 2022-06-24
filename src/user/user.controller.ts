import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { ApiParam, ApiProperty } from '@nestjs/swagger';
import { QueryOptions } from 'mongoose';
import { CreateUserDto } from 'src/dto/createUser.dto';
import { EditUserDto } from 'src/dto/editUser.dto';
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
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Get(':id')
    @ApiParam({
        name: 'id',
        description: 'Gets the Action id',
    })
    getUserById(@Param() id: string) {
        return this.userService.findById(id);
    }

    // @Delete(':id')
    // deleteUser(@Param() id: string) {
    //     // return this.userService.create(userDto);
    // }

    @Put(':id')
    @ApiParam({
        name: 'id',
        description: 'Gets the Action id',
    })
    editUser(@Param() id: string, @Body() editUserDto: EditUserDto) {
        return this.userService.update(id, editUserDto);
    }


}
