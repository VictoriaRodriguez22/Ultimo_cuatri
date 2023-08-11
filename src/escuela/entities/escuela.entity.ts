import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('escuelas')
export class Escuela {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public nombre: string;

    @Column()
    public direccion: string;


    @ManyToOne(type => Ciudad, ciudad => ciudad.escuela)
    @JoinColumn()
    public ciudad: Ciudad;
}
