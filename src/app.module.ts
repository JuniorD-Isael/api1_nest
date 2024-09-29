import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import { RecordModule } from './record/record.module'; // Certifique-se de importar o RecordModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // ou o tipo de banco de dados que você está usando
      database: 'database.sqlite', // caminho do banco de dados
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // localização das entidades
      synchronize: true, // deve ser usado apenas em desenvolvimento
    }),
    RecordModule, // Adicione o RecordModule
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
