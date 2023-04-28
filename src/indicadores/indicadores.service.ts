import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ApiIndicador, Indicador } from 'src/types/indicador';

@Injectable()
export class IndicadoresService {
  async getIndicadores(): Promise<ApiIndicador[]> {
    const result = await axios('https://mindicador.cl/api');

    return result.data;
  }
  async getIndicador(indicador: string): Promise<Indicador | null> {
    try {
      const result = await axios(`https://mindicador.cl/api/${indicador}`);

      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
