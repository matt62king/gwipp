import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { GridColumnsDirective } from './components/grid/grid-columns.directive';
import { GridCellDirective } from './templates/grid-cell.directive';
import { GridHeaderCellDirective } from './templates/grid-header-cell.directive';
import { GridFooterDirective } from './templates/grid-footer.directive';

@NgModule({
  declarations: [
    GridComponent,
    GridColumnsDirective,
    GridCellDirective,
    GridHeaderCellDirective,
    GridFooterDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GridComponent,
    GridColumnsDirective,
    GridCellDirective,
    GridHeaderCellDirective,
    GridFooterDirective
  ]
})
export class GridModule { }
