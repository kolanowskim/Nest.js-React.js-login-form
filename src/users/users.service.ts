import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/db/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async findOne(email: string): Promise<Users | undefined> {
    return await this.usersRepository.findOneBy({ email: email });
  }

  async create(
    userData: Users,
  ): Promise<{ statusCode: number; message: string }> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    const flag = await this.usersRepository.save({
      email: userData.email,
      password: hashedPassword,
    });
    if (flag)
      return {
        statusCode: 200,
        message: 'user created',
      };
  }
}
