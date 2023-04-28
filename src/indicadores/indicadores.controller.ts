import { Controller, Get } from '@nestjs/common';
import { IndicadoresService } from './indicadores.service';

@Controller('indicadores')
export class IndicadoresController {
  constructor(private indicadoresService: IndicadoresService) {}

  @Get()
  async getIndicadores() {
    return await this.indicadoresService.getIndicadores();
  }
}
