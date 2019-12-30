import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercar'
})
export class FiltercarPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
