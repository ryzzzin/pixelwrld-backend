import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreatePixelDto {
  @IsString()
  color: string;

  @IsInt()
  @Min(0)
  @Max(32)
  x: number;

  @IsInt()
  @Min(0)
  @Max(32)
  y: number;

  @IsInt()
  sessionId: number;
}
