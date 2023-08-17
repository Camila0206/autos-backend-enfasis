import { Test, TestingModule } from '@nestjs/testing';
import { AutosController } from './autos.controller';
import { AutosService } from './autos.service';
import { Auto } from './auto.entity';

describe('AutosController', () => {
  let autosController: AutosController;
  let autosService: AutosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutosController],
      providers: [AutosService],
    }).compile();

    autosController = module.get<AutosController>(AutosController);
    autosService = module.get<AutosService>(AutosService);
  });

  describe('getAutos', () => {
    it('should return an array of autos', async () => {
      const autos: Auto[] = [
        {
          id: '2',
          cedula_propietario: '111111',
          matricula: 'ABC123',
          marca: 'BMW',
          modelo: 'M3 GTR',
          color: 'Gris',
          year: 2013,
        },
      ];

      // Create a mock instance of AutosService
      const autosServiceMock = {
        getAutos: jest.fn().mockResolvedValue(autos),
      };

      jest.spyOn(autosServiceMock, 'getAutos'); // Optional, if you want to track function calls

      const module: TestingModule = await Test.createTestingModule({
        controllers: [AutosController],
        providers: [
          {
            provide: AutosService,
            useValue: autosServiceMock,
          },
        ],
      }).compile();

      autosController = module.get<AutosController>(AutosController);

      expect(await autosController.getAutos()).toBe(autos);
    });
  });

  // Similar test cases for other methods can be written
});
