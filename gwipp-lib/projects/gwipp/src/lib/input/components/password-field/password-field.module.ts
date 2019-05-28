import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordFieldComponent} from './password-field.component';
import {OutputModule} from '../../../output/output.module';
import {IconModule} from '../../../icon/icon.module';

@NgModule({
  declarations: [
    PasswordFieldComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    OutputModule
  ],
  exports: [
    PasswordFieldComponent
  ]
})
export class PasswordFieldModule { }
