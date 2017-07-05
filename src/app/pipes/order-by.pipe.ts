import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {

  transform(value: Object[], args: string[]): any {

    if (!value)
      return value;

    return value.slice().sort((a, b) => {
      
      for (let arg of args) {
        let descending = false;

        if (arg[0] == '-') {
          descending = true;
          arg = arg.substr(1);
        }

        if (a[arg] > b[arg]) {
          return descending ? -1 : 1;
        } else if (a[arg] < b[arg]) {
          return descending ? 1 : -1;
        }
      }
    });
  }
}

