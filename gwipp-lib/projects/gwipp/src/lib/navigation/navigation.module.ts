import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavAttributesModule } from './nav-attributes/nav-attributes.module';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    NavigationBarComponent
  ],
  imports: [
    CommonModule,
    NavAttributesModule
  ],
  exports: [
    NavigationBarComponent,
    NavAttributesModule
  ]
})
export class NavigationModule { }
