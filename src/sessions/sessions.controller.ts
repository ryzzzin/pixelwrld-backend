import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Sessions')
@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @ApiOperation({ summary: 'Создать сессию' })
  @Post()
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionsService.create(createSessionDto);
  }

  @ApiOperation({ summary: 'Получить все сессии' })
  @Get()
  findAll() {
    return this.sessionsService.findAll();
  }

  @ApiOperation({ summary: 'Получить сессию по ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessionsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Обновить сессию' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionsService.update(+id, updateSessionDto);
  }

  @ApiOperation({ summary: 'Удалить сессию' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessionsService.remove(+id);
  }
}
