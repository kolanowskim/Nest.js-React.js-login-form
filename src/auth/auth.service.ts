import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/db/user.entity';

type User = {
  id: number;
  email: string;
  password: string;
};

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(
    userData: Users,
  ): Promise<{ statusCode: number; message: string }> {
    return await this.usersService.create(userData);
  }

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.usersService.findOne(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: Users) {
    const payload = { email: user.email, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
