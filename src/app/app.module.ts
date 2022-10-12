import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ContasComponent } from './pages/contas/contas.component';
import { CadastrarEditarComponent } from './pages/clientes/cadastrar/cadastrar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { BlockUIModule } from 'ng-block-ui';
import { SaqueComponent } from './pages/saque/saque.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { CadastrarcontasComponent } from './pages/contas/cadastrarcontas/cadastrarcontas.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DepositoPipe } from './pages/extrato/extratoPipe/operacoes-extrato.pipe';
import { SaquePipePipe } from './pages/extrato/extratoPipe/saque-pipe.pipe';
import { HomeComponent } from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';




@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HeaderComponent,
    ContasComponent,
    CadastrarEditarComponent,
    DepositoComponent,
    SaqueComponent,
    TransferenciaComponent,
    ExtratoComponent,
    CadastrarcontasComponent,
    DepositoPipe,
    SaquePipePipe,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BlockUIModule.forRoot(),
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FontAwesomeModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
