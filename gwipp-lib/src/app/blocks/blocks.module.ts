import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BlocksComponent} from './blocks.component';
import {WorkingBlockModule} from '../../../projects/gwipp/src/lib/output/component/blocks/working-block/working-block.module';
import {ErrorBlockModule} from '../../../projects/gwipp/src/lib/output/component/blocks/error-block/error-block.module';
import {PortletModule} from '../../../projects/gwipp/src/lib/views/portlet/portlet.module';
import {PortletActionMenuModule} from '../shared/portlet-action-menu/portlet-action-menu.module';

@NgModule({
  declarations: [
    BlocksComponent
  ],
  imports: [
    CommonModule,
    WorkingBlockModule,
    ErrorBlockModule,
    PortletModule,
    PortletActionMenuModule
  ],
  exports: [
    BlocksComponent
  ]
})
export class BlocksModule { }
