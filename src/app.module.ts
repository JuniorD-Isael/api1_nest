import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import { LogsModule } from './logs/logs.module'; // Certifique-se de importar o LogsModule

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // ou o tipo de banco de dados que você está usando
      database: 'database.sqlite', // caminho do banco de dados
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // localização das entidades
      synchronize: true, // deve ser usado apenas em desenvolvimento
    }),
    LogsModule, // Adicione o LogsModule
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
