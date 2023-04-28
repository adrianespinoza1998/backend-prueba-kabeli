export type Indicador = {
  codigo: string;
  nombre: string;
  unidad_medida: string;
  fecha: Date;
  valor: number;
};

export type ApiIndicador = {
  version: string;
  autor: string;
  fecha: Date;
  uf: Indicador;
  ivp: Indicador;
  dolar: Indicador;
  dolar_intercambio: Indicador;
  euro: Indicador;
  ipc: Indicador;
  utm: Indicador;
  imacec: Indicador;
  tpm: Indicador;
  libra_cobre: Indicador;
  tasa_desempleo: Indicador;
  bitcoin: Indicador;
};
