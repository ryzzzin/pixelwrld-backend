import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PixelsModule } from './pixels/pixels.module';
import { DatabaseModule } from './database.module';
import { SessionsModule } from './sessions/sessions.module';

@Module({
  imports: [DatabaseModule, SessionsModule, PixelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
