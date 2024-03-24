import { IsString, IsInt, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePixelDto {
  @ApiProperty({ type: String, example: 'FAFAFA' })
  @IsString()
  color: string;

  @ApiProperty({ type: Number, example: 10, minimum: 0, maximum: 32 })
  @IsInt()
  @Min(0)
  @Max(32)
  x: number;

  @ApiProperty({ type: Number, example: 20, minimum: 0, maximum: 32 })
  @IsInt()
  @Min(0)
  @Max(32)
  y: number;

  @ApiProperty({ type: Number, example: 1 })
  @IsInt()
  sessionId: number;
}
