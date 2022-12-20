import { IsNumber, IsString, Matches } from 'class-validator';
import { MESSAGE, REGEX } from '../../app.utils';
import * as bcrypt from 'bcrypt';

export class UserDto {
  // @IsNumber()
  // id: any;

  @IsString()
  email: string;

  @IsString()
  @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGE.PASSWORD_RULE_MESSAGE,
  })
  password: string;

  @IsString()
  fullName: string;

  // validatePassword(password: string): Promise<boolean> {
  //   return bcrypt.compare(password, this.password);
  // }
}
