import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseInputComponent} from './foundation/base-input.component';
import {TextFieldComponent} from './components/text-field/text-field.component';
import {IconModule} from '../icon/icon.module';
import { PasswordFieldComponent } from './components/password-field/password-field.component';
import {OutputModule} from "../output/output.module";
import { SwitchComponent } from './components/switch/switch.component';

@NgModule({
  declarations: [
    BaseInputComponent,
    TextFieldComponent,
    PasswordFieldComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    OutputModule
  ],
  exports: [
    BaseInputComponent,
    TextFieldComponent,
    PasswordFieldComponent,
    SwitchComponent
  ]
})
export class InputModule { }
