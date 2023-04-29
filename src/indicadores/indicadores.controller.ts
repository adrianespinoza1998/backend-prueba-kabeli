import { Controller, Get, Param, HttpException } from '@nestjs/common';
import { IndicadoresService } from './indicadores.service';

@Controller('/api/indicadores')
export class IndicadoresController {
  constructor(private indicadoresService: IndicadoresService) {}

  @Get()
  async getIndicadores() {
    return await this.indicadoresService.getIndicadores();
  }

  @Get('/:indicador')
  async getIndicador(@Param('indicador') indicador: string) {
    const result = await this.indicadoresService.getIndicador(indicador);

    if (!result) {
      throw new HttpException(`Indicador ${indicador} no encontrado`, 404);
    }

    return result;
  }
}
