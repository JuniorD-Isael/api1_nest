import { Controller, Get } from '@nestjs/common';
import { RecordService } from './record.service';
import { Log } from './record.entity';

@Controller('record')
export class RecordController {
  constructor(private readonly logsService: RecordService) {}

  @Get()
  async findAll(): Promise<Log[]> {
    return this.logsService.findAll();
  }
}
