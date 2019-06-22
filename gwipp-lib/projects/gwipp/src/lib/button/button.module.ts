import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { StyleModule } from '../foundation/style/style.module';
import { IconModule } from '../icon/icon.module';
import { ConfirmButtonComponent } from './components/confirm-button/confirm-button.component';
import { BaseButtonComponent } from './foundation/base-button/base-button.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ConfirmButtonComponent,
    BaseButtonComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    StyleModule
  ],
  exports: [
    BaseButtonComponent,
    ButtonComponent,
    ConfirmButtonComponent,
    IconButtonComponent
  ]
})
export class ButtonModule { }
