import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import User from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  // @Put(':id')
  // async update(@Param('id') id: number, @Body() user: User): Promise<User> {
  //   return this.userService.update(id, user);
  // }

  // @Delete(':id')
  // async delete(@Param('id') id: number): Promise<void> {
  //   await this.userService.delete(id);
  // }
}
