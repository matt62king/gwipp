import {ContentChild, Directive, TemplateRef} from '@angular/core';
import {TieredParentDetailDirective} from './tiered-parent-detail.directive';
import {MenuItemDetailDirective} from './menu-item-detail.directive';

@Directive({
  selector: 'gwipp-menu-item'
})
export class MenuItemDirective {
  @ContentChild(MenuItemDetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;

  @ContentChild(TieredParentDetailDirective)
  tieredParent: TieredParentDetailDirective;
}
