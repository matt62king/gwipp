import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortletComponent} from './portlet.component';
import {PortletTemplatesModule} from './foundation/templates/portlet-templates.module';

@NgModule({
  declarations: [
    PortletComponent
  ],
  imports: [
    CommonModule,
    PortletTemplatesModule
  ],
  exports: [
    PortletComponent,
    PortletTemplatesModule
  ]
})
export class PortletModule { }
