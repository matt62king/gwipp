import {Component, Input} from '@angular/core';
import {MenuItemDirective} from '../../menu-items/menu-item.directive';

@Component({
  selector: 'internal-menu-container',
  templateUrl: './internal-menu-container.component.html'
})
export class InternalMenuContainerComponent {
  @Input()
  menuItems: MenuItemDirective[] = [];
}
