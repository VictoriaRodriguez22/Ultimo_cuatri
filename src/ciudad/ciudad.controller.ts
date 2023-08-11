import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CiudadService } from './ciudad.service';
import { createCiudadDTO } from './dto/create-ciudad.dto';
import { Ciudad } from './entities/ciudad.entity';
import { updateCiudadDTO } from './dto/update-ciudad.dto';


@Controller('ciudad')
export class CiudadController {
  constructor(private ciudadService: CiudadService) { }

  @Post()
  createCiudad(@Body() createCiudadDto: createCiudadDTO) {
    return this.ciudadService.createCiudad(createCiudadDto);
  }

  @Get()
  findAll(): Promise<Ciudad[]> {
    return this.ciudadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number){
    return this.ciudadService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCiudad: updateCiudadDTO) {
    return this.ciudadService.update(id, updateCiudad);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ciudadService.remove(id);
  }
}