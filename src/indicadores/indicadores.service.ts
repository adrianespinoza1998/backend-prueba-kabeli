import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ApiIndicador, Indicador } from 'src/types/indicador';

@Injectable()
export class IndicadoresService {
  async getIndicadores(): Promise<ApiIndicador[]> {
    const result = await axios('https://mindicador.cl/api');

    return result.data;
  }
  async getIndicador(indicador: string): Promise<Indicador> {
    const result = await axios(`https://mindicador.cl/api/${indicador}`);

    return result.data;
  }
}
