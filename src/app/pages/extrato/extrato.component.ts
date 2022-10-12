import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContasService } from '../../services/contas.service';
import { IExtrato } from '../../interfaces/extrato';
import { IOperacao } from '../../interfaces/operacao';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  constructor(private contasService: ContasService) { }

  listOperacao: IOperacao[] = [];

  extratoForm = new FormGroup({
    agencia: new FormControl('', Validators.required),
    dataFinal: new FormControl('', Validators.required),
    dataInicial: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  cadastrar(){
    if(this.extratoForm.valid){

      this.contasService.consultarExtrato(this.extratoForm.value as IExtrato).subscribe((res: IOperacao[]) => {
        this.listOperacao = res
      })
    }
  }

}
