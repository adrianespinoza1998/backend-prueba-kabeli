import { Test, TestingModule } from '@nestjs/testing';
import { IndicadoresService } from './indicadores.service';
import { ApiIndicador } from 'src/types/indicador';
import { testingValues } from './testingValues';

describe('IndicadoresService', () => {
  let service: IndicadoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndicadoresService],
    }).compile();

    service = module.get<IndicadoresService>(IndicadoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the indicators', async () => {
    const expectedResults = testingValues;

    jest.spyOn(service, 'getIndicadores').mockResolvedValue(expectedResults);
    const result = await service.getIndicadores();
    expect(result).toBeDefined();
    expect(result).toEqual(expectedResults);
  });
});
