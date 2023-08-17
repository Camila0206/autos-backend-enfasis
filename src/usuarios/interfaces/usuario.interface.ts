/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Usuario extends Document {
  readonly cedula: string;
  readonly nombre: string;
  readonly apellido: string;
  readonly telefono: string;
  readonly email: string;
}
