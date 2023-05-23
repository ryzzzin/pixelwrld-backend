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

@Controller('pixels')
export class PixelsController {
  constructor(private readonly pixelsService: PixelsService) {}

  @Post()
  create(@Body() createPixelDto: CreatePixelDto) {
    return this.pixelsService.create(createPixelDto);
  }

  @Get()
  findAll() {
    return this.pixelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pixelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePixelDto: UpdatePixelDto) {
    return this.pixelsService.update(+id, updatePixelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pixelsService.remove(+id);
  }
}
