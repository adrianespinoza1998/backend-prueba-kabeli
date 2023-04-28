import { Module } from '@nestjs/common';
import { IndicadoresModule } from './indicadores/indicadores.module';
import { AppController } from './app.controller';

@Module({
  imports: [IndicadoresModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
