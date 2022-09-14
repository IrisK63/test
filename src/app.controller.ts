import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TasksService } from './task.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly tasksService: TasksService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getError(@Body() body: any) {
    return this.tasksService.addInterval('nameInterval', 3600000);
  }
}
