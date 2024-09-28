import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  handleFileUpload(file: Express.Multer.File) {
    // Lógica para salvar o arquivo no banco de dados
    return {
      message: 'File uploaded successfully',
      filePath: file.path,
    };
  }
}
