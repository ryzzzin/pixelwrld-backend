import { PartialType } from '@nestjs/mapped-types';
import { CreateSessionDto } from './create-session.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSessionDto extends PartialType(CreateSessionDto) {
  @ApiProperty({ type: Number, example: 1 })
  id: number;

  @ApiProperty({
    type: String,
    example: 'Session Name',
    minLength: 3,
    maxLength: 50,
  })
  name?: string;

  @ApiProperty({ type: Number, example: 20, minimum: 1, maximum: 32 })
  width?: number;

  @ApiProperty({ type: Number, example: 20, minimum: 1, maximum: 32 })
  height?: number;

  @ApiProperty({ type: Date, example: '2024-05-28T12:09' })
  endsAt?: Date;
}
