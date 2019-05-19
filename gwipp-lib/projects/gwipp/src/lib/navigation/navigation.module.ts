import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavAttributesModule} from './nav-attributes/nav-attributes.module';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {NavMenuItemComponent} from './nav-items/nav-drop-menu/nav-menu-item.component';
import {StyleModule} from '../foundation/style/style.module';
import {NavMenuDirective} from './nav-items/nav-drop-menu/nav-menu.directive';
import { NavItemDetailDirective } from './nav-items/nav-item-detail.directive';
import { NavItemComponent } from './nav-items/nav-item/nav-item.component';

@NgModule({
  declarations: [
    NavigationBarComponent,
    NavMenuItemComponent,
    NavMenuDirective,
    NavItemDetailDirective,
    NavItemComponent
  ],
  imports: [
    CommonModule,
    NavAttributesModule,
    StyleModule
  ],
  exports: [
    NavigationBarComponent,
    NavAttributesModule,
    NavMenuItemComponent,
    NavItemDetailDirective,
    NavMenuDirective,
    NavItemComponent
  ]
})
export class NavigationModule { }
