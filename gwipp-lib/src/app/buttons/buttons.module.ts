import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonsComponent} from './buttons.component';
import {PortletModule} from '../../../projects/gwipp/src/lib/views/portlet/portlet.module';
import {ButtonModule} from '../../../projects/gwipp/src/lib/button/button.module';
import {PortletActionMenuModule} from '../shared/portlet-action-menu/portlet-action-menu.module';

@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    PortletModule,
    ButtonModule,
    PortletActionMenuModule
  ],
  exports: [
    ButtonsComponent
  ]
})
export class ButtonsModule { }
