
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEditarComponent } from './pages/clientes/cadastrar/cadastrar.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ContasComponent } from './pages/contas/contas.component';

import { DepositoComponent } from './pages/deposito/deposito.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { CadastrarcontasComponent } from './pages/contas/cadastrarcontas/cadastrarcontas.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'clientes', component: ClientesComponent
  },
  {
    path: 'contas', component: ContasComponent
  },
  {
    path: 'contas/cadastrar/:idCliente', component: CadastrarcontasComponent
  },
  {
    path: 'clientes/cadastrar', component: CadastrarEditarComponent
  },
  {
    path: 'clientes/editar/:id', component: CadastrarEditarComponent
  },
  {
    path: 'contas/editar/:idConta', component: CadastrarcontasComponent
  },
  {
    path: 'deposito', component: DepositoComponent
  },
  {
    path: 'saque', component: SaqueComponent
  },
  {
    path: 'transferencia', component: TransferenciaComponent
  },
  {
    path: 'consultarExtrato', component: ExtratoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
