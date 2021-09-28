import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/viber/webhook')
  webHook(@Req() request: Request) {
    console.log(request);
    return true;
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
