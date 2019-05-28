import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextFieldComponent} from './text-field.component';
import {IconModule} from '../../../icon/icon.module';

@NgModule({
  declarations: [
    TextFieldComponent,
  ],
  imports: [
    CommonModule,
    IconModule,
  ],
  exports: [
    TextFieldComponent
  ]
})
export class TextFieldModule { }
