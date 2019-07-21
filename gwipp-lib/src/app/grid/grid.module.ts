import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BasicGridComponent} from './basic-grid.component';
import {GridModule} from '../../../projects/gwipp/src/lib/grid/grid.module';
import {PortletModule} from '../../../projects/gwipp/src/lib/views/portlet/portlet.module';
import {PortletActionMenuModule} from '../shared/portlet-action-menu/portlet-action-menu.module';

@NgModule({
  declarations: [
    BasicGridComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    PortletModule,
    PortletActionMenuModule
  ],
  exports: [
    BasicGridComponent
  ]
})
export class AppGridModule { }
