import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // To avoid dsiplay Nan to user we check the below condition
    if (!value) {
      return '';
    }

    return value * 1.60934;
  }
}
