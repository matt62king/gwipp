import {ContentChild, Directive, Input, TemplateRef} from '@angular/core';
import {NavMenuDirective} from './nav-drop-menu/nav-menu.directive';
import {NavBarTitleDirective} from '../nav-attributes/nav-bar-title.directive';
import {NavBarItemDirective} from '../nav-attributes/nav-bar-item.directive';

@Directive({
  selector: 'nav-item-detail'
})
export class NavItemDetailDirective {
  @Input()
  @ContentChild(NavBarTitleDirective, {read: TemplateRef})
  titleTemplate?: TemplateRef<any>;

  @Input()
  @ContentChild(NavBarItemDirective, {read: TemplateRef})
  itemTemplate?: TemplateRef<any>;

  @Input()
  @ContentChild(NavMenuDirective, {read: TemplateRef})
  menuTemplate?: TemplateRef<any>;
}
