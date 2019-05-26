import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorkingBlockComponent} from './working-block.component';
import {IconModule} from '../../../../icon/icon.module';

@NgModule({
  declarations: [
    WorkingBlockComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    WorkingBlockComponent
  ]
})
export class WorkingBlockModule { }
