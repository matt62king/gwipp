import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupAddOnLeftDirective} from './group-add-on-left.directive';
import {GroupAddOnRightDirective} from './group-add-on-right.directive';

@NgModule({
  declarations: [
    GroupAddOnLeftDirective,
    GroupAddOnRightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GroupAddOnRightDirective,
    GroupAddOnLeftDirective
  ]
})
export class InputTemplateModule { }
