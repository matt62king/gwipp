import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleDirective } from './title.directive';
import { DetailDirective } from './detail.directive';

@NgModule({
  declarations: [
    TitleDirective,
    DetailDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleDirective,
    DetailDirective
  ]
})
export class TemplatesModule { }
