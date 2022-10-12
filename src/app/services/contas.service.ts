import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IConta } from '../interfaces/conta';
import { IDeposito } from '../interfaces/deposito';
import { ISaque } from '../interfaces/saque';
import { ITransferencia } from '../interfaces/transferencia';
import { IExtrato } from '../interfaces/extrato';
import { IOperacao } from '../interfaces/operacao';

@Injectable({
  providedIn: 'root'
})
export class ContasService {

  endpoint = 'contas/';
  api = environment.api;

  constructor(private http: HttpClient) { }

  listarTodasContas() {
    return this.http.get<IConta[]>(`${this.api}/${this.endpoint}`);
  }

  buscarContasPorId(id: number) {
    return this.http.get<IConta>(`${this.api}/${this.endpoint}/${id}`);
  }

  cadastrarConta(contas: IConta) {
    return this.http.post(`${this.api}/${this.endpoint}`, contas);
  }

  atualizarContas(contas: IConta) {
    return this.http.put(`${this.api}/${this.endpoint}/${contas.id}`, contas);
  }

  salvarDeposito(deposito: IDeposito) {
    return this.http.put(`${ this.api }/${this.endpoint}deposito`,deposito)

  }

  salvarSaque(saque: ISaque) {
    return this.http.put(`${ this.api }/${this.endpoint}sacar`,saque)

  }

  salvarTransferencia(tranferencia: ITransferencia) {
    return this.http.put(`${ this.api }/${this.endpoint}transferencia`,tranferencia)

  }

  consultarExtrato(extrato: IExtrato) {
    return this.http.post<IOperacao[]>(`${ this.api }/${this.endpoint}consultarExtrato`,extrato)

  }
  excluirContaPorId(id: number) {
    return this.http.delete<IConta>(`${this.api}/${this.endpoint}/${id}`);
  }

}
