import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from './nav-bar.component';
import {NavigationModule} from '../../../projects/gwipp/src/lib/navigation/navigation.module';
import {MenuModule} from '../../../projects/gwipp/src/lib/menus/menu/menu.module';
import {IconModule} from '../../../projects/gwipp/src/lib/icon/icon.module';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    NavigationModule,
    MenuModule,
    IconModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
