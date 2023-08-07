import { Injectable } from '@nestjs/common';
import { createCiudadDTO } from './dto/create-ciudad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { updateCiudadDTO } from './dto/update-ciudad.dto';

@Injectable()
export class CiudadService {
  private ciudades: Ciudad[] = [];

  constructor(@InjectRepository(Ciudad) private readonly ciudadRepository: Repository<Ciudad>) { }

  // public async getAllRaw(): Promise<Ciudad[]> {
  //   let datos = await this.ciudadRepository.query("SELECT * FROM ciudades");

  //   datos.forEach(element => {
  //     let ciudad: Ciudad = new Ciudad(element['idCiudad'], element['nombre']);
  //     this.ciudades.push(ciudad);
  //   });
  //   return this.ciudades;
  // }



  createCiudad(ciudad: createCiudadDTO) {
    const newCiudad = this.ciudadRepository.create(ciudad)
    return this.ciudadRepository.save(newCiudad);
  }

  findAll() {
    return this.ciudadRepository.find();

  }

  findOne(id: number) {
    return this.ciudadRepository.findOne({ where: { id } });
  }

  update(id: number, updateCiudad: updateCiudadDTO) {
    return this.ciudadRepository.update({ id }, updateCiudad)

  };


  remove(id: number) {
    return this.ciudadRepository.delete({ id });
  }
}

