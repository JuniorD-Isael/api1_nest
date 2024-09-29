import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
// import { MockUploadService } from './upload.mock.service';
import { LogsModule } from '../logs/logs.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([]), LogsModule],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
