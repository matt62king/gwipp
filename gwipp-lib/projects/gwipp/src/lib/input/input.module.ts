import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseInputComponent} from './foundation/base-input.component';
import {TextFieldComponent} from './components/text-field/text-field.component';
import {IconModule} from '../icon/icon.module';

@NgModule({
  declarations: [
    BaseInputComponent,
    TextFieldComponent
  ],
  imports: [
    CommonModule,
    IconModule,
  ],
  exports: [
    BaseInputComponent,
    TextFieldComponent
  ]
})
export class InputModule { }
