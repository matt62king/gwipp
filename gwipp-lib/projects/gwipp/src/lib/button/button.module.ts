import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { StyleModule } from '../foundation/style/style.module';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    StyleModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
