import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypeAheadComponent} from './type-ahead.component';
import {TypeAheadDetailDirective} from './templates/type-ahead-detail.directive';
import {TypeAheadSelectionDirective} from './templates/type-ahead-selection.directive';
import {InputServicesModule} from '../../input-services.module';
import {StyleModule} from '../../../foundation/style/style.module';
import {TypeAheadPlaceholderDirective} from './templates/type-ahead-placeholder.directive';
import {TypeAheadNoDataDirective} from './templates/type-ahead-no-data.directive';
import {InputTemplateModule} from '../../foundation/templates/input-template.module';

@NgModule({
  declarations: [
    TypeAheadComponent,
    TypeAheadDetailDirective,
    TypeAheadSelectionDirective,
    TypeAheadPlaceholderDirective,
    TypeAheadNoDataDirective
  ],
  imports: [
    CommonModule,
    InputServicesModule,
    InputTemplateModule,
    StyleModule
  ],
  exports: [
    TypeAheadComponent,
    TypeAheadDetailDirective,
    TypeAheadSelectionDirective,
    TypeAheadPlaceholderDirective,
    TypeAheadNoDataDirective
  ]
})
export class TypeAheadModule { }
