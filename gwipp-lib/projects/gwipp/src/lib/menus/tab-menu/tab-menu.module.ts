import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabMenuComponent} from './tab-menu.component';
import {StyleModule} from '../../foundation/style/style.module';
import {TabItemDirective} from './tabs/tab-item.directive';
import { TabItemDetailDirective } from './tabs/tab-item-detail.directive';
import { TabItemTitleDirective } from './tabs/tab-item-title.directive';

@NgModule({
  declarations: [
    TabMenuComponent,
    TabItemDirective,
    TabItemDetailDirective,
    TabItemTitleDirective
  ],
  imports: [
    CommonModule,
    StyleModule
  ],
  exports: [
    TabMenuComponent,
    TabItemDirective,
    TabItemDetailDirective,
    TabItemTitleDirective
  ]
})
export class TabMenuModule { }
