import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
// import { MockUploadService } from './upload.mock.service';
import { RecordModule } from '../record/record.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([]), RecordModule],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
