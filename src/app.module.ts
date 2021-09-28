import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Bot } from 'viber-bot';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'Bot',
      useValue: new Bot({
        authToken: '4e0af45ea2e7dc91-77c5e392276d16c8-aa306c10e4d49de7',
        name: 'testingviberbotzp',
        avatar: '', // It is recommended to be 720x720, and no more than 100kb.
      }),
    },
  ],
})
export class AppModule {}
