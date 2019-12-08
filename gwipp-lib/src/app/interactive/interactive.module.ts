import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractiveComponent } from './interactive.component';
import {PortletActionMenuModule} from '../shared/portlet-action-menu/portlet-action-menu.module';
import {PortletModule} from '../../../projects/gwipp/src/lib/views/portlet/portlet.module';
import {ClickToEditModule} from '../../../projects/gwipp/src/lib/interactive/click-to-edit/click-to-edit.module';
import {TextFieldModule} from '../../../projects/gwipp/src/lib/input/components/text-field/text-field.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from '../../../projects/gwipp/src/lib/button/button.module';
import { ClickEditComponent } from './click-edit/click-edit.component';

@NgModule({
  declarations: [
    InteractiveComponent,
    ClickEditComponent
  ],
  imports: [
    CommonModule,
    PortletActionMenuModule,
    PortletModule,
    ClickToEditModule,
    TextFieldModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [
    InteractiveComponent
  ]
})
export class InteractiveModule { }
