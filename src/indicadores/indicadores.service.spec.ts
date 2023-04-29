import { Test, TestingModule } from '@nestjs/testing';
import { IndicadoresService } from './indicadores.service';
import { testingIndicator, testingIndicators } from './testingValues';

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
    const expectedResults = testingIndicators;

    jest.spyOn(service, 'getIndicadores').mockResolvedValue(expectedResults);
    const result = await service.getIndicadores();
    expect(result).toBeDefined();
    expect(result).toEqual(expectedResults);
  });

  it('should return the indicator', async () => {
    const expectedResults = testingIndicator;

    jest.spyOn(service, 'getIndicador').mockResolvedValue(expectedResults);
    const result = await service.getIndicador('uf');
    expect(result).toBeDefined();
    expect(result).toEqual(expectedResults);
  });
});
