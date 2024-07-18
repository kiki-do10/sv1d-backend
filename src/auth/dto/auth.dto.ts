import { IsOptional, IsString, MinLength } from 'class-validator';

export class AuthDto {
  @IsString()
  @MinLength(4, {
    message: 'Логин должен быть не менее 4 символов',
  })
  login: string;

  @IsString()
  @IsOptional()
  name?: string;

  @MinLength(6, {
    message: 'Пароль должен быть не менее 6 символов',
  })
  password: string;
}
