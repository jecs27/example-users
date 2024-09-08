import { Injectable, UnauthorizedException } from '@nestjs/common';
import User from 'src/users/entities/user.entity';
import { generateAccessToken } from 'src/utils/auth/jwt-token-util';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private userRepository: Repository<User>;

  async login(username: string, password: string): Promise<any> {
    const user = await this.userRepository.findOneBy({ username });
    if (!user) {
      throw new UnauthorizedException(`Invalid Credentials`);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException(`Invalid Credentials`);
    }
    const accessToken = generateAccessToken(user.userId);
    return [user, accessToken];
  }
}
