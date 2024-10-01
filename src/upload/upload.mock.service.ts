import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from 'src/record/record.entity';
import { Express } from 'express';

@Injectable()
export class MockUploadService {
  constructor(@InjectRepository(Log) private logRepository: Repository<Log>) {}

  async handleFileUpload(file: Express.Multer.File) {
    const mockBrandName = 'Marca Fictícia'; // Simulação de marca

    // Cria um novo log com as informações da consulta
    const newLog = this.logRepository.create({
      filename: file.filename,
      brand: mockBrandName,
      created_at: new Date(),
      imagePath: file.path,
    });

    await this.logRepository.save(newLog);

    return newLog;
  }
}
