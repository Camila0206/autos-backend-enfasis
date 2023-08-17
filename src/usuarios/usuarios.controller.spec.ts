/* eslint-disable prettier/prettier */

import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { getModelToken } from '@nestjs/mongoose';
import { Usuario } from './interfaces/usuario.interface';
import { CreateUsuarioDto } from './dto/usuario.dto';
import { HttpStatus, NotFoundException } from '@nestjs/common';

describe('UsuariosController', () => {
  let usuariosController: UsuariosController;
  let usuariosService: UsuariosService;

  const usuarioData: Usuario = {
    cedula: '123456789',
    nombre:
    apellido:
    telefono:
    email:
    // Other properties here...
  };

  const createUsuarioDto: CreateUsuarioDto = {
    cedula: '123456789',
    // Other properties here...
  };

  const usuariosServiceMock = {
    getUsuarios: jest.fn(),
    getUsuario: jest.fn(),
    createUsuario: jest.fn(),
    deleteUsuario: jest.fn(),
    updateUsuario: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuariosController],
      providers: [
        {
          provide: UsuariosService,
          useValue: usuariosServiceMock,
        },
        {
          provide: getModelToken('Usuario'),
          useValue: {}, // Mock or actual model if needed
        },
      ],
    }).compile();

    usuariosController = module.get<UsuariosController>(UsuariosController);
    usuariosService = module.get<UsuariosService>(UsuariosService);
  });

  describe('getUsuario', () => {
    it('should return a user by cedula', async () => {
      usuariosServiceMock.getUsuario.mockResolvedValue(usuarioData);

      const result = await usuariosController.getUsuario('123456789');
      
      expect(result).toEqual({
        status: HttpStatus.OK,
        json: usuarioData,
      });
    });

    it('should throw NotFoundException if user is not found', async () => {
      usuariosServiceMock.getUsuario.mockResolvedValue(null);

      await expect(usuariosController.getUsuario('987654321')).rejects.toThrowError(
        new NotFoundException('El usuario no se encuentra en nuestros registros'),
      );
    });
  });

  // Add other test cases for the remaining controller methods (createUsuario, deleteUsuario, updateUsuario) here
});

