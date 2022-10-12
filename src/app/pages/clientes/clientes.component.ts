import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { AlertasService } from '../../services/alertas.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  @BlockUI() blockUI!: NgBlockUI;
  constructor(private clienteService: ClientesService,
    private alertaService: AlertasService) { }
  clientes: ICliente[] = [];
  ngOnInit(): void {
    this.buscarTodosClientes();
  }

  buscarTodosClientes() {
    this.blockUI.start();
    this.clienteService.listarTodosClientes().subscribe((clientes: ICliente[]) => {
      this.clientes = clientes;
      this.blockUI.stop();
    }, (error) => {
      console.error(error);
    });
  }

  excluir(id?: number) {
    if (id) {
      this.alertaService.alertaExcluir('Excluir cliente?').then((result) => {
        if (result.isConfirmed) {
          this.clienteService.excluirClientePorId(id).subscribe(() => {
            this.buscarTodosClientes();
            this.alertaService.alertaMensagem('Excluido com sucesso')
          }, (error) => {
            console.error(error);
          })
        }
      });
    }
  }

}
