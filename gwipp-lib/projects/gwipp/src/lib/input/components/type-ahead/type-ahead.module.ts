import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TypeAheadComponent} from './type-ahead.component';
import { TypeAheadDetailDirective } from './templates/type-ahead-detail.directive';
import { TypeAheadSelectionDirective } from './templates/type-ahead-selection.directive';
import {InputServicesModule} from '../../input-services.module';
import {StyleModule} from '../../../foundation/style/style.module';

@NgModule({
  declarations: [
    TypeAheadComponent,
    TypeAheadDetailDirective,
    TypeAheadSelectionDirective
  ],
  imports: [
    CommonModule,
    InputServicesModule,
    StyleModule
  ],
  exports: [
    TypeAheadComponent,
    TypeAheadDetailDirective,
    TypeAheadSelectionDirective
  ]
})
export class TypeAheadModule { }
