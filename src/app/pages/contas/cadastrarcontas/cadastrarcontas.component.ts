import { Component, OnInit } from '@angular/core';
import { ContasService } from '../../../services/contas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IConta } from 'src/app/interfaces/conta';
import { AlertasService } from '../../../services/alertas.service';
import { ICliente } from '../../../interfaces/cliente';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-cadastrarcontas',
  templateUrl: './cadastrarcontas.component.html',
  styleUrls: ['./cadastrarcontas.component.css']
})
export class CadastrarcontasComponent implements OnInit {

  @BlockUI() blockUI!: NgBlockUI;
  constructor(
    private contasService: ContasService,
    private route: ActivatedRoute,
    private router: Router,
    private alertaService: AlertasService
  ) { }

    idConta = 0;
    idCliente = 0;

    contasForm = new FormGroup({
      numero: new FormControl(''),
      agencia: new FormControl(''),
      saldo: new FormControl(''),

    });

   ngOnInit(): void {
       this.idConta = Number(this.route.snapshot.paramMap.get('idConta'));
       this.idCliente = Number(this.route.snapshot.paramMap.get('idCliente'));
       if (this.idConta !== 0) {
        this.contasService.buscarContasPorId(this.idConta).subscribe((conta: IConta) => {
          this.idCliente = conta.cliente.id!;
          this.contasForm.setValue({
           numero: conta.numero,
            agencia: conta.agencia,
            saldo: conta.saldo,

          });
        }, (error) => {
         console.error(error);
        });
       }
     }

     cadastrar() {
       const conta: IConta = this.contasForm.value as IConta;
       conta.cliente = {id:this.idCliente}
       if (this.idConta) {
         conta.id = this.idConta;
         this.blockUI.start();
         this.contasService.atualizarContas(conta).subscribe(() => {
           this.alertaService.alertaMensagem('Conta atualizada');
           this.router.navigateByUrl('contas');
           this.blockUI.stop();
         })
         return;
       }
       conta.ativo = true;
       this.blockUI.start();
       this.contasService.cadastrarConta(conta).subscribe(() => {
         this.alertaService.alertaMensagem('Conta cadastrada');
         this.router.navigateByUrl('contas')
         this.blockUI.stop();
       },


       )}}

