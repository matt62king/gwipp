import {Component, ContentChild} from '@angular/core';
import {NavItemDetailDirective} from '../nav-item-detail.directive';

@Component({
  selector: 'gwipp-nav-item',
  templateUrl: './nav-item.component.html'
})
export class NavItemComponent {
  @ContentChild(NavItemDetailDirective)
  itemDetail: NavItemDetailDirective;
}
