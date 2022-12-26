import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.validateUser(username, password);
    const payload = {
      userId: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    console.log(user);
    console.log(password);
    const tablePassword = bcrypt.compare(password, user.password);
    if (!user) throw new BadRequestException();

    // if (!tablePassword) throw new UnauthorizedException();

    if (user && tablePassword) {
      return user;
    }
  }
}
