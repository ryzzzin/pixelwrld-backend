import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PixelsService } from './pixels.service';
import { CreatePixelDto } from './dto/create-pixel.dto';
import { UpdatePixelDto } from './dto/update-pixel.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Pixels')
@Controller('pixels')
export class PixelsController {
  constructor(private readonly pixelsService: PixelsService) {}

  @ApiOperation({ summary: 'Создать пиксель' })
  @Post()
  create(@Body() createPixelDto: CreatePixelDto) {
    return this.pixelsService.create(createPixelDto);
  }

  @ApiOperation({ summary: 'Получить все пиксели' })
  @Get()
  findAll() {
    return this.pixelsService.findAll();
  }

  @ApiOperation({ summary: 'Получить пиксель по ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pixelsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Обновить пиксель' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePixelDto: UpdatePixelDto) {
    return this.pixelsService.update(+id, updatePixelDto);
  }

  @ApiOperation({ summary: 'Удалить пиксель' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pixelsService.remove(+id);
  }
}
