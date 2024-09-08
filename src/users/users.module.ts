import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './UserController';

@Module({
  controllers: [UserController],
  providers: [UsersService],
})
export class UsersModule {}
