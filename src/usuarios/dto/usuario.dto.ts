/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty({ message: 'El campo no puede estar vacio' })
  id: string;

  @IsString()
  @IsNotEmpty({ message: 'El campo no puede estar vacio' })
  cedula: string;

  @IsString()
  @IsNotEmpty({ message: 'El campo no puede estar vacio' })
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: 'El campo no puede estar vacio' })
  apellido: string;

  @IsString()
  @IsNotEmpty({ message: 'El campo no puede estar vacio' })
  telefono: string;

  @IsString()
  @IsOptional()
  email?: string;
}

export class UpdateUsuarioDto {
  @IsString()
  @IsOptional()
  cedula?: string;

  @IsString()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsOptional()
  apellido?: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsString()
  @IsOptional()
  email?: string;
}
