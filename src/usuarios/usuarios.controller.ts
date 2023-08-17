import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private servicioUsuarios: UsuariosService) {}

  @Get('/')
  async getUsuarios(@Res() res) {
    const usuarios = await this.servicioUsuarios.getUsuarios();
    res.status(HttpStatus.OK).json(usuarios);
  }

  @Get('/:cedula')
  async getUsuario(@Res() res, @Param('cedula') cedula: string) {
    const usuario = await this.servicioUsuarios.getUsuario(cedula);
    if (usuario) {
      return res.status(HttpStatus.OK).json(usuario);
    }
    throw new NotFoundException(
      'El usuario no se encuentra en nuestros registros',
    );
  }

  @Post('/create')
  async createUsuario(@Res() res, @Body() newUsuario: CreateUsuarioDto) {
    const usuario = await this.servicioUsuarios.createUsuario(newUsuario);
    res.status(HttpStatus.OK).json({
      message: 'El usuario fue creado exitosamente!',
      usuario,
    });
  }

  @Delete('/delete')
  async deleteUsuario(@Res() res, @Query('cedula') cedula: string) {
    const usuario = await this.servicioUsuarios.deleteUsuario(cedula);
    if (usuario) {
      return res.status(HttpStatus.OK).json({
        message: 'El usuario fue eliminado :(',
        usuario,
      });
    }
    throw new NotFoundException(
      'No es posible actualizar debido a que no existe',
    );
  }

  @Patch('/update')
  async updateUsuario(
    @Res() res,
    @Query('cedula') cedula: string,
    @Body() createUsuarioDTO: CreateUsuarioDto,
  ) {
    const usuario = await this.servicioUsuarios.updateUsuario(
      cedula,
      createUsuarioDTO,
    );
    if (usuario) {
      return res.status(HttpStatus.OK).json({
        message: 'El usuario fue actualizado exitosamente :D',
        usuario,
      });
    }
    throw new NotFoundException(
      'No es posible actualizar debido a que no existe',
    );
  }
}
