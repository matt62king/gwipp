import {Component} from '@angular/core';
import {Grid} from '../../../projects/gwipp/src/lib/grid/foundation/configuration/grid.decorator';
import {GridConfiguration} from '../../../projects/gwipp/src/lib/grid/foundation/configuration/grid-configuration';

@Component({
  selector: 'app-basic-grid',
  templateUrl: './basic-grid.component.html'
})
export class BasicGridComponent {

  rows = [
    {name: 'Storm Trooper', color: 'White'},
    {name: 'Death Trooper', color: 'Black'}
  ];

  @Grid({clickableRows: true})
  gridConfig: GridConfiguration;

  rowClick(row: any): void {
    console.log(row);
  }
}
