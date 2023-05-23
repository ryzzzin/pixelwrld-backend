import {
  IsString,
  MaxLength,
  IsInt,
  Min,
  Max,
  IsDate,
  MinLength,
} from 'class-validator';

export class CreateSessionDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsInt()
  @Min(1)
  @Max(32)
  width: number;

  @IsInt()
  @Min(1)
  @Max(32)
  height: number;

  @IsDate()
  endsAt: Date;
}
