import { Test, TestingModule } from '@nestjs/testing';
import { IndicadoresService } from './indicadores.service';
import { ApiIndicador } from 'src/types/indicador';

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
    const expectedResults = {
      version: '1.7.0',
      autor: 'mindicador.cl',
      fecha: '2023-04-28T13:00:00.000Z',
      uf: {
        codigo: 'uf',
        nombre: 'Unidad de fomento (UF)',
        unidad_medida: 'Pesos',
        fecha: '2023-04-28T04:00:00.000Z',
        valor: 35812.42,
      },
      ivp: {
        codigo: 'ivp',
        nombre: 'Indice de valor promedio (IVP)',
        unidad_medida: 'Pesos',
        fecha: '2023-04-28T04:00:00.000Z',
        valor: 36966.68,
      },
      dolar: {
        codigo: 'dolar',
        nombre: 'Dólar observado',
        unidad_medida: 'Pesos',
        fecha: '2023-04-28T04:00:00.000Z',
        valor: 801.61,
      },
      dolar_intercambio: {
        codigo: 'dolar_intercambio',
        nombre: 'Dólar acuerdo',
        unidad_medida: 'Pesos',
        fecha: '2014-11-13T03:00:00.000Z',
        valor: 758.87,
      },
      euro: {
        codigo: 'euro',
        nombre: 'Euro',
        unidad_medida: 'Pesos',
        fecha: '2023-04-28T04:00:00.000Z',
        valor: 883.61,
      },
      ipc: {
        codigo: 'ipc',
        nombre: 'Indice de Precios al Consumidor (IPC)',
        unidad_medida: 'Porcentaje',
        fecha: '2023-03-01T03:00:00.000Z',
        valor: 1.1,
      },
      utm: {
        codigo: 'utm',
        nombre: 'Unidad Tributaria Mensual (UTM)',
        unidad_medida: 'Pesos',
        fecha: '2023-04-01T03:00:00.000Z',
        valor: 62388,
      },
      imacec: {
        codigo: 'imacec',
        nombre: 'Imacec',
        unidad_medida: 'Porcentaje',
        fecha: '2023-02-01T03:00:00.000Z',
        valor: -0.5,
      },
      tpm: {
        codigo: 'tpm',
        nombre: 'Tasa Política Monetaria (TPM)',
        unidad_medida: 'Porcentaje',
        fecha: '2023-04-28T04:00:00.000Z',
        valor: 11.25,
      },
      libra_cobre: {
        codigo: 'libra_cobre',
        nombre: 'Libra de Cobre',
        unidad_medida: 'Dólar',
        fecha: '2023-04-28T04:00:00.000Z',
        valor: 3.87,
      },
      tasa_desempleo: {
        codigo: 'tasa_desempleo',
        nombre: 'Tasa de desempleo',
        unidad_medida: 'Porcentaje',
        fecha: '2023-02-01T03:00:00.000Z',
        valor: 8.37,
      },
      bitcoin: {
        codigo: 'bitcoin',
        nombre: 'Bitcoin',
        unidad_medida: 'Dólar',
        fecha: '2023-04-25T04:00:00.000Z',
        valor: 28301.71,
      },
    } as ApiIndicador;

    jest.spyOn(service, 'getIndicadores').mockResolvedValue(expectedResults);
    const result = await service.getIndicadores();
    expect(result).toBeDefined();
    expect(result).toEqual(expectedResults);
  });
});
