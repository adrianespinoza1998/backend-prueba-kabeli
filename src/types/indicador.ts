export type Indicador = {
  codigo: string;
  nombre: string;
  unidad_medida: string;
  fecha: string;
  valor: number;
};

export type ApiIndicador = {
  version: string;
  autor: string;
  fecha: string;
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

export type ValorFecha = {
  fecha: string;
  valor: number;
};

export type DetalleIndicador = {
  version: string;
  autor: string;
  codigo: string;
  nombre: string;
  unidad_medida: string;
  serie: ValorFecha[];
};
