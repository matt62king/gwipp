import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockDetailDirective } from './block-detail.directive';

@NgModule({
  declarations: [BlockDetailDirective],
  imports: [
    CommonModule
  ],
  exports: [
    BlockDetailDirective
  ]
})
export class BlockTemplatesModule { }
