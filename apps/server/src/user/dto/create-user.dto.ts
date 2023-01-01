import { IsNumber, IsString, Matches } from 'class-validator';
import { MESSAGE, REGEX } from '../../app.utils';
import * as bcrypt from 'bcrypt';
import { Type } from 'class-transformer';

export class UserDto {
  @IsString()
  email: string;

  @IsString()
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGE.PASSWORD_RULE_MESSAGE,
  })
  password: string;

  @IsString()
  fullName: string;
}
