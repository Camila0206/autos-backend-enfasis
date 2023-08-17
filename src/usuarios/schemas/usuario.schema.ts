/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const UsuarioSchema = new Schema({
  cedula: {
    type: String,
    required: true,
  },
  nombre: String,
  apellido: String,
  telefono: String,
  email: String,
});
