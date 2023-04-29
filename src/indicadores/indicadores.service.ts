import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ApiIndicador, Indicador } from 'src/types/indicador';

@Injectable()
export class IndicadoresService {
  async getIndicadores(): Promise<ApiIndicador> {
    const result = await axios(process.env.API_URL);

    return result.data;
  }
  async getIndicador(indicador: string): Promise<Indicador | null> {
    try {
      const result = await axios(`${process.env.API_URL}/${indicador}`);

      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
