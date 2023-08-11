import { Escuela } from 'src/escuela/entities/escuela.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm'

@Entity('ciudades')
export class Ciudad {

    @PrimaryGeneratedColumn()
    public id: number; 

    @Column({unique : true})
    public nombre: string;

    @Column()
    public codigoPostal: number;
  
    

    @OneToMany(type => Escuela, escuela =>escuela.ciudad)
    @JoinColumn()
    public escuela : Escuela[];
    
}

    // constructor(id: number, nombre: string) { 
    //     this.idCiudad = id;
    //     this.nombre = nombre;
    // } 

    // public getIdCiudad(): number {
    //     return this.idCiudad;
    // }

    // public setIdCiudad(idCiudad: number): void {
    //     this.idCiudad = idCiudad;
    // }
    // public getNombre(): string {
    //     return this.nombre;
    // }
    // public setNombre(nombre: string): void {
    //     this.nombre = nombre;
    // }
