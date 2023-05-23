import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PixelsService } from './pixels.service';
import { PixelsController } from './pixels.controller';
import { PixelsGateway } from './pixels.gateway';
import { Pixel } from './entities/pixel.entity';
import { Session } from '../sessions/entities/session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pixel, Session])],
  providers: [PixelsService, PixelsGateway],
  controllers: [PixelsController],
})
export class PixelsModule {}
