import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressBarComponent} from './component/progress-bar/progress-bar.component';
import {ToastComponent} from './component/toast/toast.component';
import {IconModule} from '../icon/icon.module';
import {StyleModule} from '../foundation/style/style.module';
import { ToastDetailDirective } from './component/toast/toast-detail.directive';

@NgModule({
  declarations: [
    ProgressBarComponent,
    ToastComponent,
    ToastDetailDirective
  ],
  imports: [
    CommonModule,
    IconModule,
    StyleModule
  ],
  exports: [
    ProgressBarComponent,
    ToastComponent,
    ToastDetailDirective
  ]
})
export class OutputModule { }
