import { Controller, Get } from '@nestjs/common';
import { RecordService } from './record.service';

@Controller('record')
export class RecordController {
  constructor(private readonly logsService: RecordService) {}

  @Get()
  findAll() {
    // Lógica para retornar record
  }
}
