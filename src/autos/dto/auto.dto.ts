/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateAutoDto {
  @IsString()
  @IsNotEmpty({ message: 'El campo no puede estar vacio' })
  cedula_propietario: string;

  @IsString()
  @IsNotEmpty({ message: 'El campo no puede estar vacio' })
  matricula: string;

  @IsString()
  @IsNotEmpty({ message: 'El campo no puede estar vacio' })
  marca: string;

  @IsString()
  @IsNotEmpty({ message: 'El campo no puede estar vacio' })
  modelo: string;

  @IsString()
  @IsNotEmpty({ message: 'El campo no puede estar vacio' })
  color: string;

  @IsNumber()
  @IsNotEmpty({ message: 'El campo no puede estar vacio' })
  year: number;
}

export class UpdateAutoDto {
  @IsString()
  @IsOptional()
  cedula_propietario: string;

  @IsString()
  @IsNotEmpty({ message: 'El campo no puede estar vacio' })
  matricula: string;

  @IsString()
  @IsOptional()
  marca: string;

  @IsString()
  @IsOptional()
  modelo: string;

  @IsString()
  @IsOptional()
  color: string;

  @IsNumber()
  @IsOptional()
  year: number;
}
