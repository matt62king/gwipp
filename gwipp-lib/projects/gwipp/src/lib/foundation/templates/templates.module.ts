import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleDirective } from './title.directive';
import { DetailDirective } from './detail.directive';
import { ExpandedDetailDirective } from './expanded-detail.directive';

@NgModule({
  declarations: [
    TitleDirective,
    DetailDirective,
    ExpandedDetailDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleDirective,
    DetailDirective,
    ExpandedDetailDirective
  ]
})
export class TemplatesModule { }
