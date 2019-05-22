import {ContentChild, Directive, TemplateRef} from '@angular/core';
import {DetailDirective} from '../../../foundation/templates/detail.directive';

@Directive({
  selector: 'gwipp-menu-item'
})
export class MenuItemDirective {
  @ContentChild(DetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;
}
