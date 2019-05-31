import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplatesModule} from '../../foundation/templates/templates.module';
import {ExpandableListComponent} from './expandable-list.component';
import {StyleModule} from '../../foundation/style/style.module';

@NgModule({
  declarations: [
    ExpandableListComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule,
    StyleModule
  ],
  exports: [
    ExpandableListComponent
  ]
})
export class ExpandableListModule { }
