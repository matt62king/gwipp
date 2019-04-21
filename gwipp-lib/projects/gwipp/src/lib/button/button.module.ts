import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { StyleModule } from '../foundation/style/style.module';
import { IconModule } from '../icon/icon.module';
import { ConfirmButtonComponent } from './confirm-button/confirm-button.component';
import { BaseButtonComponent } from './foundation/base-button/base-button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ConfirmButtonComponent,
    BaseButtonComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    StyleModule
  ],
  exports: [
    BaseButtonComponent,
    ButtonComponent,
    ConfirmButtonComponent
  ]
})
export class ButtonModule { }
