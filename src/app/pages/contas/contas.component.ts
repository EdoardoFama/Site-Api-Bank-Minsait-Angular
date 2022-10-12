import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { IConta } from 'src/app/interfaces/conta';
import { ContasService } from 'src/app/services/contas.service';
import { AlertasService } from '../../services/alertas.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {

  @BlockUI() blockUI!: NgBlockUI;
  constructor(
    private alertaService: AlertasService,
    private contasService: ContasService) { }
  contas: IConta[] = [];
  ngOnInit(): void {
    this.buscarTodasContas();
  }

  buscarTodasContas() {
    this.blockUI.start();
    this.contasService.listarTodasContas().subscribe((contas: IConta[]) => {
      this.contas = contas;
      this.blockUI.stop();
    });
  }
  excluir(id?: number) {
    if (id) {
      this.contasService.excluirContaPorId(id).subscribe(() => {
        this.alertaService.alertaMensagem('Conta excluida');
        this.buscarTodasContas();
      }, (error) => {
        console.error(error);
      })
      return;
    }
  }
}
