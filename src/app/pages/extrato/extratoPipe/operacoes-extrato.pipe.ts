import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DepositoPipe'
})
export class DepositoPipe implements PipeTransform {

  transform(string: any, args?: any): any {
    if(string === 'D') {
      return 'Depósito';
    }
    if(string === 'S') {
      return 'Saque';
    }
    if(string === 'T') {
      return 'Tranferência';
    }
  }

}
