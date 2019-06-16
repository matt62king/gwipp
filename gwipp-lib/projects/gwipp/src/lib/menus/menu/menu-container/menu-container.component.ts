import {Component, ContentChildren} from '@angular/core';
import {MenuItemDirective} from '../menu-items/menu-item.directive';

@Component({
  selector: 'gwipp-menu',
  templateUrl: './menu-container.component.html'
})
export class MenuContainerComponent {

  menuItems: MenuItemDirective[] = [];
  childVisible: boolean;

  @ContentChildren(MenuItemDirective)
  set items(templates: MenuItemDirective[]) {
    this.menuItems = templates;
  }

  enterChild() {
    this.childVisible = true;
  }

  leaveChild() {
    this.childVisible = false;
  }

  exitParent() {
    this.childVisible = false;
  }
}
