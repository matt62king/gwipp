import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorBlockComponent} from './error-block.component';
import {IconModule} from '../../../../icon/icon.module';

@NgModule({
  declarations: [
    ErrorBlockComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    ErrorBlockComponent
  ]
})
export class ErrorBlockModule { }
