import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saquePipe'
})
export class SaquePipePipe implements PipeTransform {

  transform(string: any, args?: any): any {
    if(string = 'T') {
      return 'Cachorro';
      }
  }

}
