import {
  IsString,
  MaxLength,
  IsInt,
  Min,
  Max,
  IsDate,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSessionDto {
  @ApiProperty({
    type: String,
    example: 'Session Name',
    minLength: 3,
    maxLength: 50,
  })
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @ApiProperty({ type: Number, example: 30, minimum: 1, maximum: 32 })
  @IsInt()
  @Min(1)
  @Max(32)
  width: number;

  @ApiProperty({ type: Number, example: 30, minimum: 1, maximum: 32 })
  @IsInt()
  @Min(1)
  @Max(32)
  height: number;

  @ApiProperty({ type: Date, example: '2024-05-28T12:09' })
  @IsDate()
  endsAt: Date;
}
