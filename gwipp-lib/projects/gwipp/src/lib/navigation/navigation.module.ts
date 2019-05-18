import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavAttributesModule} from './nav-attributes/nav-attributes.module';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {NavDropMenuComponent} from './nav-items/nav-drop-menu/nav-drop-menu.component';
import {StyleModule} from '../foundation/style/style.module';
import {NavMenuDirective} from './nav-items/nav-drop-menu/nav-menu.directive';
import { NavItemDetailDirective } from './nav-items/nav-item-detail.directive';

@NgModule({
  declarations: [
    NavigationBarComponent,
    NavDropMenuComponent,
    NavMenuDirective,
    NavItemDetailDirective
  ],
  imports: [
    CommonModule,
    NavAttributesModule,
    StyleModule
  ],
  exports: [
    NavigationBarComponent,
    NavAttributesModule,
    NavDropMenuComponent,
    NavItemDetailDirective,
    NavMenuDirective
  ]
})
export class NavigationModule { }
