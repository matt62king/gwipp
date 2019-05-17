import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'gwipp-nav-drop-menu',
  templateUrl: './nav-drop-menu.component.html'
})
export class NavDropMenuComponent implements OnInit {
  @ViewChild('menuContent') menu: ElementRef;

  showMenu: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
