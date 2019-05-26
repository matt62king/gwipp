import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortletComponent} from './portlet.component';

@NgModule({
  declarations: [
    PortletComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PortletComponent
  ]
})
export class PortletModule { }
