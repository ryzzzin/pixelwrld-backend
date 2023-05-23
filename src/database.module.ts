import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from './sessions/entities/session.entity';
import { Pixel } from './pixels/entities/pixel.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'pixel',
      password: 'wrld',
      database: 'pixelwrld',
      entities: [Session, Pixel],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
