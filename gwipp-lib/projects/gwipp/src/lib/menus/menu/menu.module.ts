import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuContainerComponent} from './menu-container/menu-container.component';
import {MenuItemDirective} from './menu-items/menu-item.directive';
import {TemplatesModule} from '../../foundation/templates/templates.module';
import {StyleModule} from '../../foundation/style/style.module';
import {TieredParentDetailDirective} from './menu-items/tiered-parent-detail.directive';
import {IconModule} from '../../icon/icon.module';
import {InternalMenuContainerComponent} from './foundation/internal-menu-container/internal-menu-container.component';
import {ChildMenuDirective} from './foundation/child-menu.directive';

@NgModule({
  declarations: [
    MenuContainerComponent,
    MenuItemDirective,
    TieredParentDetailDirective,
    InternalMenuContainerComponent,
    ChildMenuDirective
  ],
  imports: [
    CommonModule,
    StyleModule,
    TemplatesModule,
    IconModule
  ],
  exports: [
    MenuContainerComponent,
    MenuItemDirective,
    TieredParentDetailDirective,
    ChildMenuDirective
  ]
})
export class MenuModule { }
