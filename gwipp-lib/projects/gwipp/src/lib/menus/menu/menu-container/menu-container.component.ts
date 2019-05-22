import {Component, ContentChildren, OnInit} from '@angular/core';
import {MenuItemDirective} from '../menu-items/menu-item.directive';

@Component({
  selector: 'gwipp-menu',
  templateUrl: './menu-container.component.html'
})
export class MenuContainerComponent implements OnInit {

  menuItems: MenuItemDirective[] = [];

  @ContentChildren(MenuItemDirective)
  set items(templates: MenuItemDirective[]) {
    this.menuItems = templates;
  }

  constructor() { }

  ngOnInit() {
  }

}
