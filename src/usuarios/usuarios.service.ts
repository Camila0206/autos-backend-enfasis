import { Injectable } from '@nestjs/common';
import { Usuario } from './interfaces/usuario.interface';
import { CreateUsuarioDto } from './dto/usuario.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose/dist/common';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel('Usuarios') private readonly usuariosModel: Model<Usuario>,
  ) {}

  async getUsuarios(): Promise<Usuario[]> {
    return await this.usuariosModel.find();
  }

  async getUsuario(cedula: string): Promise<Usuario> {
    return await this.usuariosModel.findOne({ cedula }).exec();
  }

  async createUsuario(createUsuarioDTO: CreateUsuarioDto): Promise<Usuario> {
    const usuario = new this.usuariosModel(createUsuarioDTO);
    return await usuario.save();
  }

  async deleteUsuario(cedula: string): Promise<Usuario> {
    return await this.usuariosModel.findOneAndDelete({ cedula });
  }

  async updateUsuario(
    cedula: string,
    createUsuarioDTO: CreateUsuarioDto,
  ): Promise<Usuario> {
    return await this.usuariosModel.findOneAndUpdate(
      { cedula },
      createUsuarioDTO,
      {
        new: true,
      },
    );
  }
}
