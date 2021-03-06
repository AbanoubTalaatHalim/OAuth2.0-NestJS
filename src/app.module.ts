import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './google.strategy';
import { ConfigModule } from '@nestjs/config';
import { config } from 'dotenv';

@Module({
  imports: [ConfigModule.forRoot({
  isGlobal:true,
    load: [config]
  })],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
