import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Res,
  HttpStatus,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { AutosService } from './autos.service';
import { CreateAutoDto } from './dto/auto.dto';

@Controller('autos')
export class AutosController {
  constructor(private servicioAutos: AutosService) {}

  @Get('/')
  async getAutos(@Res() res) {
    const autos = await this.servicioAutos.getAutos();
    res.status(HttpStatus.OK).json(autos);
  }

  @Get('/:matricula')
  async getAuto(@Res() res, @Param('matricula') matricula: string) {
    const auto = await this.servicioAutos.getAuto(matricula);
    if (auto) {
      return res.status(HttpStatus.OK).json(auto);
    }
    throw new NotFoundException('El auto no existe en la base de datos :(');
  }

  @Post('/create')
  async createAuto(@Res() res, @Body() newAuto: CreateAutoDto) {
    const auto = await this.servicioAutos.createAuto(newAuto);
    res.status(HttpStatus.OK).json({
      message: 'El auto fue creado exitosamente!',
      auto,
    });
  }

  @Delete('delete')
  async deleteAuto(@Res() res, @Query('matricula') matricula: string) {
    const auto = await this.servicioAutos.deleteAuto(matricula);
    if (auto) {
      return res.status(HttpStatus.OK).json({
        message: 'El auto fue eliminado con exito',
        auto,
      });
    }
    throw new NotFoundException(
      'No es posible eliminar este auto debido a que no existe',
    );
  }

  @Patch('/update')
  async updateAuto(
    @Res() res,
    @Body() createAutoDTO: CreateAutoDto,
    @Query('matricula') matricula: string,
  ) {
    const auto = await this.servicioAutos.updateAuto(matricula, createAutoDTO);
    if (auto) {
      return res.status(HttpStatus.OK).json({
        message: 'El auto fue actualizado!',
        auto,
      });
    }
    throw new NotFoundException(
      'No es posible actualizar debido a que no existe',
    );
  }
}
