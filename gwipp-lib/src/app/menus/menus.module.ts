import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenusComponent} from './menus.component';
import {ActionMenuModule} from '../../../projects/gwipp/src/lib/menus/action-menu/action-menu.module';
import {MenuModule} from '../../../projects/gwipp/src/lib/menus/menu/menu.module';
import {PortletModule} from '../../../projects/gwipp/src/lib/views/portlet/portlet.module';
import {TabMenuModule} from '../../../projects/gwipp/src/lib/menus/tab-menu/tab-menu.module';
import {PortletActionMenuModule} from '../shared/portlet-action-menu/portlet-action-menu.module';

@NgModule({
  declarations: [
    MenusComponent
  ],
  imports: [
    CommonModule,
    ActionMenuModule,
    MenuModule,
    PortletModule,
    TabMenuModule,
    PortletActionMenuModule
  ],
  exports: [
    MenusComponent
  ]
})
export class MenusModule { }
