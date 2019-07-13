import { Pipe, PipeTransform } from '@angular/core';
import {SelectionOption} from '../../../foundation/shared/model/selectionOption';

@Pipe({
  name: 'dropdownFilter'
})
export class DropdownFilterPipe implements PipeTransform {

  transform(value: SelectionOption<any>[], args?: string): SelectionOption<any>[] {
    if (args === undefined || args === '') {
      return value;
    }

    const filtered: SelectionOption<any>[] = [];

    value
      .filter((item) => item.filterKey.toLowerCase().includes(args.toLowerCase()))
      .forEach((item) => filtered.push(item));

    return filtered;
  }

}
