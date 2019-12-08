import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputsComponent} from './inputs.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PortletModule} from '../../../projects/gwipp/src/lib/views/portlet/portlet.module';
import {ButtonModule} from '../../../projects/gwipp/src/lib/button/button.module';
import {DropdownSelectionModule} from '../../../projects/gwipp/src/lib/input/components/dropdown-selection/dropdown-selection.module';
import {TypeAheadModule} from '../../../projects/gwipp/src/lib/input/components/type-ahead/type-ahead.module';
import {IconModule} from '../../../projects/gwipp/src/lib/icon/icon.module';
import {PortletActionMenuModule} from '../shared/portlet-action-menu/portlet-action-menu.module';
import {TextFieldModule} from '../../../projects/gwipp/src/lib/input/components/text-field/text-field.module';
import {PasswordFieldModule} from '../../../projects/gwipp/src/lib/input/components/password-field/password-field.module';
import {SwitchModule} from '../../../projects/gwipp/src/lib/input/components/switch/switch.module';

@NgModule({
  declarations: [
    InputsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PortletModule,
    ButtonModule,
    DropdownSelectionModule,
    TypeAheadModule,
    IconModule,
    PortletActionMenuModule,
    TextFieldModule,
    PasswordFieldModule,
    SwitchModule
  ],
  exports: [
    InputsComponent
  ]
})
export class InputsModule { }
