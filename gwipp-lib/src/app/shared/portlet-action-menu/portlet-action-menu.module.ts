import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortletActionMenuComponent } from './portlet-action-menu.component';
import {ActionMenuModule} from '../../../../projects/gwipp/src/lib/menus/action-menu/action-menu.module';
import {MenuModule} from '../../../../projects/gwipp/src/lib/menus/menu/menu.module';
import {MenuTemplatesModule} from '../../../../projects/gwipp/src/lib/menus/foundataion/templates/menu-templates.module';
import {IconModule} from '../../../../projects/gwipp/src/lib/icon/icon.module';

@NgModule({
  declarations: [
    PortletActionMenuComponent
  ],
  imports: [
    CommonModule,
    ActionMenuModule,
    MenuModule,
    MenuTemplatesModule,
    IconModule
  ],
  exports: [
    PortletActionMenuComponent
  ]
})
export class PortletActionMenuModule { }
