import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { SETTINGS } from 'src/app.utils';
import { UserDto } from './dto/create-user.dto';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  create(
    @Body(SETTINGS.VALIDATION_PIPE)
    user: UserDto,
  ): Promise<UserDto> {
    // console.log(user);
    return this.userService.create(user);
  }
}
