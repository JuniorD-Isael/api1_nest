import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Express } from 'express';

@Injectable()
export class UploadService {
  private readonly api2Url = ''; // Adicione a URL da API 2

  async handleFileUpload(file: Express.Multer.File) {
    try {
      // Vamos enviar a imagem para a API 2
      const response = await axios.post(this.api2Url, file.buffer, {
        headers: {
          'Content-Type': file.mimetype,
        },
      });

      // Nome da marca da cerveja contida na resposta da API 2
      const brandName = response.data.brandName;

      return {
        message: 'File uploaded successfully',
        brand: brandName,
      };
    } catch (error) {
      throw new Error(`Erro no processamento da imagem: ${error.message}`);
    }
  }
}
