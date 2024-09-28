import { Injectable } from '@nestjs/common';
import { Express } from 'express';

@Injectable()
export class MockUploadService {
  // Simula a chamada para a API de OCR
  handleFileUpload(file: Express.Multer.File) {
    return {
      filename: file.filename,
      brand: 'Marca Fictícia', // Retorna um nome de marca fictício
    };
  }
}
