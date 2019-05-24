import {Component, ContentChildren, OnDestroy, OnInit} from '@angular/core';
import {MenuItemDirective} from '../menu-items/menu-item.directive';
import {IconNames} from '../../../icon/icon/constants/icon-names';
import {merge, Observable, of, Subject} from 'rxjs';
import {delay, mapTo, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'gwipp-menu',
  templateUrl: './menu-container.component.html'
})
export class MenuContainerComponent {

  menuItems: MenuItemDirective[] = [];
  childVisible: boolean;
  overChild: boolean;

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
