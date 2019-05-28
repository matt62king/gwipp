import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropdownSelectionComponent} from './dropdown-selection.component';
import {DropdownFilterPipe} from './util/dropdown-filter.pipe';
import {IconModule} from '../../../icon/icon.module';
import {StyleModule} from '../../../foundation/style/style.module';
import { OptionDetailDirective } from './templates/option-detail.directive';
import { SelectionDetailDirective } from './templates/selection-detail.directive';

@NgModule({
  declarations: [
    DropdownSelectionComponent,
    DropdownFilterPipe,
    OptionDetailDirective,
    SelectionDetailDirective
  ],
  imports: [
    CommonModule,
    IconModule,
    StyleModule
  ],
  exports: [
    DropdownSelectionComponent,
    OptionDetailDirective,
    SelectionDetailDirective
  ]
})
export class DropdownSelectionModule { }
