import { IsString } from 'class-validator';

export class TournamentDto {
  @IsString()
  name: string;
}
