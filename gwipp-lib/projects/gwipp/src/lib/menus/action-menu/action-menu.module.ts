import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionMenuComponent } from './action-menu.component';
import {IconModule} from '../../icon/icon.module';
import {StyleModule} from '../../foundation/style/style.module';

@NgModule({
  declarations: [
    ActionMenuComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    StyleModule,
  ],
  exports: [
    ActionMenuComponent,
  ]
})
export class ActionMenuModule { }
