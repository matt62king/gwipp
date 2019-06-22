import {ContentChild, Directive, Input} from '@angular/core';
import {GridCellDirective} from '../../templates/grid-cell.directive';
import {GridHeaderCellDirective} from '../../templates/grid-header-cell.directive';

@Directive({
  selector: 'gwipp-grid-columns'
})
export class GridColumnsDirective {

  @ContentChild(GridHeaderCellDirective)
  header: GridHeaderCellDirective;

  @ContentChild(GridCellDirective)
  cell: GridCellDirective;

  @Input() columnStyle: string;
}

