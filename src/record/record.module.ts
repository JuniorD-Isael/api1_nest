import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import { Log } from './record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Log])],
  providers: [RecordService],
  controllers: [RecordController],
  exports: [TypeOrmModule], // Adicione esta linha
})
export class RecordModule {}
