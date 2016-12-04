import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, [term = '']): any {
    return value.filter((item) => {return item.value.toLowerCase().startsWith(term)});
  }
}