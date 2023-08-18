/* eslint-disable prettier/prettier 
import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosController } from "./usuarios.controller";
import { UsuariosService } from './usuarios.service';
import { Model } from 'mongoose';
import { Usuario } from "./interfaces/usuario.interface";
import { CreateUsuarioDto } from "./dto/usuario.dto";

describe('UsuariosController', () => {
  let usuariosController: UsuariosController;
  let usuariosService: UsuariosService;

  beforeEach(async () => {
    usuariosService = {
      getUsuario: jest.fn(), // Mock the getUsuario method
    } as unknown as UsuariosService;

    usuariosController = new UsuariosController(usuariosService);
  });

  describe('findAll', () => {
    it('retorna un array de usuarios', async () => {
      //this is an example of the json
      const result = [[
        {
            "_id": "",
            "cedula": "",
            "nombre": "",
            "apellido": "",
            "telefono": "",
            "email": "",
            "__v": 0
        },

    ]];
      jest.spyOn(usuariosService, 'getUsuario').mockImplementation(() =>
        Promise.resolve(result as unknown as Promise<Usuario>));
        expect(await usuariosController.getUsuario(200, '1027892323'));
    })
    });
  }); */
