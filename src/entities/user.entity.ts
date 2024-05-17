import { IsEmail, IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    name: string;
     
    @Column()
    @IsEmail()
    email: string;

    @Column()
    @IsNotEmpty()
    password: string;

}