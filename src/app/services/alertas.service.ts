import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor() { }


  alertaMensagem(mensagem: string) {
    Swal.fire({
      title: mensagem,
      icon: 'success'
    });
  }
  alertaExcluir(mensagem: string) {
    return Swal.fire({
      title: mensagem,
      text: "A ação não poderá ser desfeita",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apague isso!'
    })
}

  alertaErro(mensagem: string) {
    Swal.fire({
      title: mensagem,
      icon: 'error'
    });
  }
}
