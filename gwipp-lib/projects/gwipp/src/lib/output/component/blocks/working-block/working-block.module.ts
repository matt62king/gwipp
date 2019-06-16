import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorkingBlockComponent} from './working-block.component';
import {IconModule} from '../../../../icon/icon.module';
import {BlockTemplatesModule} from '../foundation/templates/block-templates.module';

@NgModule({
  declarations: [
    WorkingBlockComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    BlockTemplatesModule
  ],
  exports: [
    WorkingBlockComponent,
    BlockTemplatesModule
  ]
})
export class WorkingBlockModule { }
