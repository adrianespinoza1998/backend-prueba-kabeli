import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IndicadoresModule } from './indicadores/indicadores.module';
import { AppController } from './app.controller';

@Module({
  imports: [ConfigModule.forRoot({}), IndicadoresModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
