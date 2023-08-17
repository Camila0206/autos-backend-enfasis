/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Auto extends Document {
  readonly cedula_propietario: string;
  readonly matricula: string;
  readonly marca: string;
  readonly modelo: string;
  readonly color: string;
  readonly year: number;
}
