import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadModule } from './ciudad/ciudad.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ClaseModule } from './clase/clase.module';
import { ProfesorModule } from './profesor/profesor.module';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { EscuelaModule } from './escuela/escuela.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Vicky.63-router",
    database: "escolar", 
    entities: [
      "dist/**/**.entity{.ts,.js}" 
    ],
    synchronize: true
  }),
    CiudadModule,
    EstudianteModule,
    ClaseModule,
    ProfesorModule,
    AsistenciaModule,
    EscuelaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
