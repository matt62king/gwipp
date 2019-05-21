import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabMenuComponent} from './tab-menu.component';
import {StyleModule} from '../../foundation/style/style.module';
import {TabItemDirective} from './tabs/tab-item.directive';

@NgModule({
  declarations: [
    TabMenuComponent,
    TabItemDirective
  ],
  imports: [
    CommonModule,
    StyleModule
  ],
  exports: [
    TabMenuComponent,
    TabItemDirective
  ]
})
export class TabMenuModule { }
