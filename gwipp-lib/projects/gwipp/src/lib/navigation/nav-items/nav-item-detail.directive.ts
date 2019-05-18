import {ContentChild, Directive, Input, TemplateRef} from '@angular/core';
import {NavMenuDirective} from './nav-drop-menu/nav-menu.directive';

@Directive({
  selector: 'nav-item-detail'
})
export class NavItemDetailDirective {
  @Input()
  @ContentChild(NavMenuDirective, {read: TemplateRef})
  menuTemplate?: TemplateRef<any>;
}
