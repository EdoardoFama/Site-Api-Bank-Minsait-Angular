import { IConta } from "./conta";

export interface IOperacao {
  dataCadastro?: Date;
  id?: number;
  tipo?: string;
  valorOperacao?: number;
  contaDestino?: IConta;

}
