import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabMenuComponent} from './tab-menu.component';
import {StyleModule} from '../../foundation/style/style.module';

@NgModule({
  declarations: [
    TabMenuComponent
  ],
  imports: [
    CommonModule,
    StyleModule
  ],
  exports: [
    TabMenuComponent
  ]
})
export class TabMenuModule { }
