import { Inject, Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(@Inject('Bot') private readonly viberBot) {}

  async onModuleInit(): Promise<void> {
    try {
      const test = await this.viberBot.setWebhook(
        'https://ad57-45-128-188-57.ngrok.io/viber/webhook',
      );
      console.log(test);
    } catch (e) {
      console.log(e);
    }
  }

  async getHello() {
    const botData = await this.viberBot.getBotProfile();
    return botData;
  }
}
