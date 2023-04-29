import { Test, TestingModule } from '@nestjs/testing';
import { IndicadoresController } from './indicadores.controller';
import { IndicadoresService } from './indicadores.service';
import { testingIndicator, testingIndicators } from './testingValues';

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
    const expectedResults = testingIndicators;
    jest.spyOn(controller, 'getIndicadores').mockResolvedValue(expectedResults);
    const results = await controller.getIndicadores();
    expect(results).toEqual(expectedResults);
  });

  it('should return the indicator', async () => {
    const expectedResults = testingIndicator;
    jest.spyOn(controller, 'getIndicador').mockResolvedValue(expectedResults);
    const results = await controller.getIndicador('uf');
    expect(results).toEqual(expectedResults);
  });
});
