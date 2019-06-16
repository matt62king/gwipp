import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExpandableListComponent} from './expandable-list.component';
import {StyleModule} from '../../foundation/style/style.module';
import {ListTemplatesModule} from '../foundation/templates/list-templates.module';

@NgModule({
  declarations: [
    ExpandableListComponent
  ],
  imports: [
    CommonModule,
    StyleModule,
    ListTemplatesModule
  ],
  exports: [
    ExpandableListComponent,
    ListTemplatesModule
  ]
})
export class ExpandableListModule { }
