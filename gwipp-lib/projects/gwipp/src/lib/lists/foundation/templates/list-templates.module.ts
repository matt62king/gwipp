import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDetailDirective } from './list-detail.directive';
import { ListExpandedDetailDirective } from './list-expanded-detail.directive';

@NgModule({
  declarations: [ListDetailDirective, ListExpandedDetailDirective],
  exports: [
    ListDetailDirective,
    ListExpandedDetailDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ListTemplatesModule { }
