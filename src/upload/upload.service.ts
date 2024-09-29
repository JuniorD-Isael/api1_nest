import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from '../record/record.entity';
import { Repository } from 'typeorm';
import * as FormData from 'form-data';
import * as fs from 'node:fs';

@Injectable()
export class UploadService {
  private readonly api2Url = 'http://api2:8000/process-image'; // URL da API 2

  constructor(@InjectRepository(Log) private logRepository: Repository<Log>) {}

  async handleFileUpload(file: Express.Multer.File) {
    try {
      // Envia a imagem para a API 2
      const formData = new FormData();
      formData.append('file', fs.createReadStream(file.path), {
        filename: file.originalname,
        contentType: file.mimetype,
      });

      const response = await axios.post(this.api2Url, formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });

      // Nome da marca da cerveja contida na resposta da API 2
      const brandName = response.data.brandName;

      if (!brandName || brandName.trim().length === 0) {
        return {
          message:
            'Nenhum texto dectectado na imagem. Nada foi salvo no banco de dados.',
        };
      }

      const newLog = this.logRepository.create({
        filename: file.filename,
        brand: brandName,
        created_at: new Date(),
        imagePath: file.path,
      });

      await this.logRepository.save(newLog);

      return newLog;
    } catch (error) {
      throw new Error(`Erro no processamento da imagem: ${error.message}`);
    }
  }
}
