import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { MockUploadService } from './upload.mock.service';

@Module({
  controllers: [UploadController],
  providers: [
    {
      provide: UploadService,
      useClass: MockUploadService,
    },
  ],
})
export class UploadModule {}
