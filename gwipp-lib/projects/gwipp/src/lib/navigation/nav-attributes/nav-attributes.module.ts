import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarTitleDirective } from './nav-bar-title.directive';
import { NavBarItemDirective } from './nav-bar-item.directive';

@NgModule({
  declarations: [
    NavBarTitleDirective,
    NavBarItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarTitleDirective,
    NavBarItemDirective
  ]
})
export class NavAttributesModule { }
