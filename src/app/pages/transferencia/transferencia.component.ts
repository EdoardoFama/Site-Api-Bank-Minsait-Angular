import { Component, OnInit } from '@angular/core';
import { ContasService } from '../../services/contas.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITransferencia } from '../../interfaces/transferencia';
import { AlertasService } from '../../services/alertas.service';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  @BlockUI() blockUI!: NgBlockUI;
  constructor(private contasService: ContasService,
    private alertaService: AlertasService,
    private router: Router) { }

  transferenciaForm = new FormGroup({
    agenciaDestino: new FormControl('', Validators.required),
    agenciaOrigem: new FormControl('', Validators.required),
    numeroContaDestino: new FormControl('', Validators.required),
    numeroContaOrigem: new FormControl('', Validators.required),
    valor: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {
  }

  cadastrar(){
    if(this.transferenciaForm.valid){
      this.blockUI.start();
      this.contasService.salvarTransferencia(this.transferenciaForm.value as ITransferencia).subscribe(() => {
        this.alertaService.alertaMensagem('Transferência realizada');
        this.router.navigateByUrl('contas')
        this.blockUI.stop();
      })
      return;
    }
  }

}
