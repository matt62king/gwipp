import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuContainerComponent} from './menu-container/menu-container.component';
import {MenuItemDirective} from './menu-items/menu-item.directive';
import {TemplatesModule} from '../../foundation/templates/templates.module';
import {StyleModule} from '../../foundation/style/style.module';

@NgModule({
  declarations: [
    MenuContainerComponent,
    MenuItemDirective
  ],
  imports: [
    CommonModule,
    StyleModule,
    TemplatesModule
  ],
  exports: [
    MenuContainerComponent,
    MenuItemDirective
  ]
})
export class MenuModule { }
