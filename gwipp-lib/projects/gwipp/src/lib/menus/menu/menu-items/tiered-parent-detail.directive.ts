import {ContentChild, Directive, Input, TemplateRef} from '@angular/core';
import {ChildMenuDirective} from '../foundation/child-menu.directive';
import {DetailDirective} from '../../../foundation/templates/detail.directive';

@Directive({
  selector: 'tiered-parent-detail'
})
export class TieredParentDetailDirective {
  @ContentChild(DetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;

  @Input()
  @ContentChild(ChildMenuDirective, {read: TemplateRef})
  childMenu: TemplateRef<any>;
}
