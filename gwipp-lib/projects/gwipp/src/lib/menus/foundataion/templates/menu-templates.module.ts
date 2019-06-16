import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropMenuDirective} from './drop-menu.directive';
import { DropMenuDetailDirective } from './drop-menu-detail.directive';

@NgModule({
  declarations: [
    DropMenuDirective,
    DropMenuDetailDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropMenuDirective,
    DropMenuDetailDirective
  ]
})
export class MenuTemplatesModule { }
