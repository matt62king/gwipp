import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlaysComponent } from './overlays.component';
import {PortletActionMenuModule} from '../shared/portlet-action-menu/portlet-action-menu.module';
import {PortletModule} from '../../../projects/gwipp/src/lib/views/portlet/portlet.module';
import {ButtonModule} from '../../../projects/gwipp/src/lib/button/button.module';
import {ToastModule} from '../../../projects/gwipp/src/lib/views/toast/toast.module';
import {OverlayModule} from '../../../projects/gwipp/src/lib/views/overlay/overlay.module';

@NgModule({
  declarations: [OverlaysComponent],
  imports: [
    CommonModule,
    PortletActionMenuModule,
    PortletModule,
    ButtonModule,
    ToastModule,
    OverlayModule,
  ],
  exports: [OverlaysComponent]
})
export class OverlaysModule { }
