import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastComponent} from './toast-view/toast.component';
import {ToastDetailDirective} from './toast-view/toast-detail.directive';
import {IconModule} from '../../icon/icon.module';

@NgModule({
  declarations: [
    ToastComponent,
    ToastDetailDirective
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    ToastComponent,
    ToastDetailDirective
  ]
})
export class ToastModule { }
