import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(user: UserDto): Promise<UserDto> {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(user.password, salt);
    user.password = password;
    return this.userRepository.save(this.userRepository.create(user));
  }
}
