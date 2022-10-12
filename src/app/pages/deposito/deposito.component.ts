import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContasService } from '../../services/contas.service';
import { IDeposito } from '../../interfaces/deposito';
import { AlertasService } from '../../services/alertas.service';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  @BlockUI() blockUI!: NgBlockUI;
  constructor(private contasService: ContasService,
    private alertaService: AlertasService,
    private router: Router) { }

  depositoForm = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {
  }

  cadastrar(){
    if(this.depositoForm.valid){
      this.blockUI.start();
      this.contasService.salvarDeposito(this.depositoForm.value as IDeposito).subscribe(() => {
        this.alertaService.alertaMensagem('Depósito realizado');
        this.router.navigateByUrl('contas')
        this.blockUI.stop();
      })
      return;
  }

}}
