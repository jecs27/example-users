import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import User from './entities/user.entity';

@Injectable()
export class UsersService {
  private userRepository: Repository<User>;

  constructor(private dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(User);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(userId: number): Promise<User> {
    return this.userRepository.findOneBy({ userId });
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  // async update(id: number, user: Partial<User>): Promise<User> {
  //   return this.userRepository.findOneBy({ userId });
  // }

  async remove(userId: number): Promise<void> {
    await this.userRepository.delete(userId);
  }
}
