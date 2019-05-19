import {Component, ContentChild, OnInit} from '@angular/core';
import {NavItemDetailDirective} from '../nav-item-detail.directive';

@Component({
  selector: 'gwipp-nav-item',
  templateUrl: './nav-item.component.html'
})
export class NavItemComponent implements OnInit {
  @ContentChild(NavItemDetailDirective)
  itemDetail: NavItemDetailDirective;

  constructor() { }

  ngOnInit() {
  }

}
