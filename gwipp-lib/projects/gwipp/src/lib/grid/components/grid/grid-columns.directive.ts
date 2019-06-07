import {ContentChildren, Directive} from '@angular/core';
import {GridCellDirective} from '../../templates/grid-cell.directive';
import {GridHeaderCellDirective} from '../../templates/grid-header-cell.directive';

@Directive({
  selector: 'gwipp-grid-columns'
})
export class GridColumnsDirective {

  @ContentChildren(GridHeaderCellDirective)
  headers: GridHeaderCellDirective[];

  @ContentChildren(GridCellDirective)
  cells: GridCellDirective[];
}

