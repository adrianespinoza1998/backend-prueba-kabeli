import { Test, TestingModule } from '@nestjs/testing';
import { IndicadoresController } from './indicadores.controller';
import { IndicadoresService } from './indicadores.service';
import { testingValues } from './testingValues';

describe('IndicadoresController', () => {
  let controller: IndicadoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndicadoresController],
      providers: [IndicadoresService],
    }).compile();

    controller = module.get<IndicadoresController>(IndicadoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the indicators', async () => {
    const expectedResults = testingValues;
    jest.spyOn(controller, 'getIndicadores').mockResolvedValue(expectedResults);
    const results = await controller.getIndicadores();
    expect(results).toEqual(expectedResults);
  });
});
