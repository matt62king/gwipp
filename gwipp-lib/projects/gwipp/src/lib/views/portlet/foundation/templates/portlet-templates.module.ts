import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortletDetailDirective } from './portlet-detail.directive';
import { PortletTitleDirective } from './portlet-title.directive';

@NgModule({
  declarations: [
    PortletDetailDirective,
    PortletTitleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PortletDetailDirective,
    PortletTitleDirective
  ]
})
export class PortletTemplatesModule { }
