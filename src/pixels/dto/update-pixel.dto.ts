import { PartialType } from '@nestjs/mapped-types';
import { CreatePixelDto } from './create-pixel.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePixelDto extends PartialType(CreatePixelDto) {
  @ApiProperty({ type: String, example: 'FAFAFA' })
  color?: string;

  @ApiProperty({ type: Number, example: 10, minimum: 0, maximum: 32 })
  x?: number;

  @ApiProperty({ type: Number, example: 20, minimum: 0, maximum: 32 })
  y?: number;

  @ApiProperty({ type: Number, example: 1 })
  sessionId?: number;
}
