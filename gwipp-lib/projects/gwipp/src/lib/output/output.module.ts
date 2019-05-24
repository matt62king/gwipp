import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressBarComponent} from './component/progress-bar/progress-bar.component';
import {IconModule} from '../icon/icon.module';
import {StyleModule} from '../foundation/style/style.module';

@NgModule({
  declarations: [
    ProgressBarComponent,
  ],
  imports: [
    CommonModule,
    IconModule,
    StyleModule
  ],
  exports: [
    ProgressBarComponent,
  ]
})
export class OutputModule { }
