import { Injectable } from '@nestjs/common';
import { CreateAutoDto } from './dto/auto.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Auto } from './interfaces/auto.interface';
import { Usuario } from 'src/usuarios/interfaces/usuario.interface';

@Injectable()
export class AutosService {
  constructor(
    @InjectModel('Autos') private readonly autoModel: Model<Auto>,
    @InjectModel('Usuarios') private readonly userModel: Model<Usuario>,
  ) {}

  async getAutos(): Promise<Auto[]> {
    return await this.autoModel.find();
  }

  async getAuto(matricula: string): Promise<Auto> {
    return await this.autoModel.findOne({ matricula }).exec();
  }

  async createAuto(createAutoDTO: CreateAutoDto): Promise<Auto> {
    const person = await this.userModel
      .findOne({ cedula: createAutoDTO.cedula_propietario })
      .exec();
    if (person) {
      return await new this.autoModel(createAutoDTO).save();
    }
    return null;
  }

  async deleteAuto(matricula: string): Promise<Auto> {
    return await this.autoModel.findOneAndDelete({ matricula });
  }

  async updateAuto(
    matricula: string,
    createAutoDTO: CreateAutoDto,
  ): Promise<Auto> {
    return await this.autoModel.findOneAndUpdate({ matricula }, createAutoDTO, {
      new: true,
    });
  }
}
