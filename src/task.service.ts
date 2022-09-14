import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  constructor(private schedulerRegistry: SchedulerRegistry) {}
  private readonly logger = new Logger(TasksService.name);

  
  addInterval(name: string, milliseconds: number) {
    try {
      const retryInterval = () => {
        this.logger.warn(`Interval ${name} executing at time (${milliseconds})!`);
      };
      
      const interval = setInterval(retryInterval, milliseconds);
      this.schedulerRegistry.addInterval(name, interval);
    } catch (error) {
      console.log(error);
    }
  }
  
  @Cron('0 53 17 * * *')
  deleteInterval(name: string) {
    this.schedulerRegistry.deleteInterval('nameInterval');
    this.logger.warn(`Interval ${'nameInterval'} deleted!`);
  }



  // @Cron(CronExpression.EVERY_30_SECONDS)
  // handleCron2() {
  //   this.logger.debug('Called every 30 seconds');
  // }


}