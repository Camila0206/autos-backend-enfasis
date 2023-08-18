/* eslint-disable prettier/prettier 
import { Test, TestingModule } from '@nestjs/testing';
import { AutosController } from './autos.controller';
import { AutosService } from './autos.service';
import { AutoSchema } from './schemas/auto.schema';
import { Auto } from './interfaces/auto.interface';

 describe('AutosController', () => {
  let autosController: AutosController;
  let autosService: AutosService;

  beforeEach(async () => {
    autosService = {
      getAuto: jest.fn(), // Mock the getAuto method
    } as unknown as AutosService;

    autosController = new AutosController(autosService);
  });

  describe('findAll', () => {
    it('deberia retornar un array de autos', async () => {
      //this is an example of the json
      const result = 
      {
          "_id": "64ddba835e56527480c06ee5",
          "cedula_propietario": "1027892323",
          "matricula": "AFC538",
          "marca": "Mazda",
          "modelo": "3",
          "color": "Blanco",
          "year": 2022,
          "__v": 0
      } 
    ;
      jest.spyOn(autosService, 'getAuto').mockImplementation(() =>
        Promise.resolve(result as unknown as Promise<Auto>));

      expect(await autosController.getAuto(200, 'EID283'));
    })
    }); 
  }); */