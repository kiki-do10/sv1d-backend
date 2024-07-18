import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Auth } from '../auth/decorators/auth.decorator';
import { PlayerDto } from './dto/player.dto';
import { PlayerService } from './player.service';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Auth()
  @Post('create')
  async create(@Body() dto: PlayerDto) {
    return this.playerService.createPlayer(dto);
  }

  @Get('all')
  async findAll() {
    return this.playerService.getAllPlayers();
  }

  @Auth()
  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: PlayerDto) {
    return this.playerService.updatePlayer(id, dto);
  }

  @Auth()
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.playerService.deletePlayer(id);
  }

  @Auth()
  @Post(':id/statistics')
  async createStatistics(@Param('id') id: number, @Body() dto: PlayerDto) {
    return this.playerService.createStatistics(id, dto);
  }

  @Auth()
  @Put(':id/statistics')
  async updateStatistics(@Param('id') id: number, @Body() dto: PlayerDto) {
    return this.playerService.updateStatistics(id, dto);
  }
}
