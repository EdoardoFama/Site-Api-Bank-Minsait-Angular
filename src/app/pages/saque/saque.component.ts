import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContasService } from '../../services/contas.service';
import { ISaque } from '../../interfaces/saque';
import { AlertasService } from '../../services/alertas.service';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  @BlockUI() blockUI!: NgBlockUI;
  constructor(private contasService : ContasService,
    private alertaService: AlertasService,
    private router: Router) { }

  saqueForm = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {
  }

  cadastrar(){
    if(this.saqueForm.valid){
      this.blockUI.start();
      this.contasService.salvarSaque(this.saqueForm.value as ISaque).subscribe(() => {
        this.alertaService.alertaMensagem('Saque realizado');
        this.router.navigateByUrl('contas')
        this.blockUI.stop();
      })
      return;
    }
  }

}
