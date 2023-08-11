import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { Escuela } from './entities/escuela.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EscuelaService {
  create(createEscuelaDto: CreateEscuelaDto) {
    throw new Error('Method not implemented.');
  }
  private escuelas: Escuela[] = [];


  constructor(@InjectRepository(Escuela) private readonly escuelaRepository: Repository<Escuela>) { }


  async createEscuela(escuela: CreateEscuelaDto) {
    const ciudadFound = await this.escuelaRepository.findOne({
      where: {
        nombre: escuela.nombre
      }
    })

    if (ciudadFound) {
      return new HttpException('La escuela ya existe', HttpStatus.CONFLICT)
    }
    const newEscuela = this.escuelaRepository.create(escuela)
    return this.escuelaRepository.save(newEscuela);
  }

  findAll() {
    return this.escuelaRepository.find();

  }

  async findOne(id: number) {
    const escuelaFound = await this.escuelaRepository.findOne({ where: { id } });

    if (!escuelaFound) {
      return new HttpException('Escuela no encontrada', HttpStatus.NOT_FOUND);
    }
    return escuelaFound;
  }
  

  async update(id: number, update: UpdateEscuelaDto) {
    const escuelaFound = await this.escuelaRepository.findOne({ where: { id } });

    if(!escuelaFound){
      return new HttpException('Escuela no encontrada', HttpStatus.NOT_FOUND);
    }
    const updateEscuela = Object.assign(escuelaFound, update);
    return this.escuelaRepository.save(updateEscuela)
  };


  async remove(id: number) {
    const escuelaFound = await this.escuelaRepository.findOne({ where: { id } });
 
    if(!escuelaFound){
      return new HttpException('Escuela no encontrada', HttpStatus.NOT_FOUND);
    }
    return this.escuelaRepository.delete({id});
  }
}
