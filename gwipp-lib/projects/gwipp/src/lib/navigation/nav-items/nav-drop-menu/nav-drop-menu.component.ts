import {Component, ContentChild, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NavItemDetailDirective} from '../nav-item-detail.directive';

@Component({
  selector: 'gwipp-nav-drop-menu',
  templateUrl: './nav-drop-menu.component.html'
})
export class NavDropMenuComponent {
  @Input() title: string;

  @ContentChild(NavItemDetailDirective)
  itemDetail: NavItemDetailDirective;

  showMenu: boolean;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
