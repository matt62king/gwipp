import {Component, ContentChild, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NavItemDetailDirective} from '../nav-item-detail.directive';

@Component({
  selector: 'gwipp-nav-menu-item',
  templateUrl: './nav-menu-item.component.html'
})
export class NavMenuItemComponent {
  @Input() title: string;

  @ContentChild(NavItemDetailDirective)
  itemDetail: NavItemDetailDirective;

  showMenu: boolean;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
