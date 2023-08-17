/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const AutoSchema = new Schema({
  cedula_propietario: {
    type: String,
    required: true,
  },
  matricula: String,
  marca: String,
  modelo: String,
  color: String,
  year: Number,
});
