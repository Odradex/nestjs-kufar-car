import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';


@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  async createUser(@Body() user: CreateUserDto) {
    console.log(user)
    //return this.usersService.createUser(user);
  }
}
