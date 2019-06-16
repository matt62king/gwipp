import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorBlockComponent} from './error-block.component';
import {IconModule} from '../../../../icon/icon.module';
import {BlockTemplatesModule} from '../foundation/templates/block-templates.module';

@NgModule({
  declarations: [
    ErrorBlockComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    BlockTemplatesModule
  ],
  exports: [
    ErrorBlockComponent,
    BlockTemplatesModule
  ]
})
export class ErrorBlockModule { }
