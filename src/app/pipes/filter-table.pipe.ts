import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../models/users';

@Pipe({
  name: 'filterTable',
})
export class FilterTablePipe implements PipeTransform {
  transform(array: Users[], value: string) {
    return value
      ? array.filter(
          (item) => item.first_name.toUpperCase() === value.toUpperCase()
        )
      : array;
  }
}
