import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from './record.entity';

@Injectable()
export class RecordService {
  constructor(@InjectRepository(Log) private logRepository: Repository<Log>) {}

  async findAll(): Promise<Log[]> {
    return this.logRepository.find();
  }
}
