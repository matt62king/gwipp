import {ContentChild, Directive, TemplateRef} from '@angular/core';
import {TitleDirective} from '../../../foundation/templates/title.directive';
import {DetailDirective} from '../../../foundation/templates/detail.directive';

@Directive({
  selector: 'gwipp-tab-item'
})
export class TabItemDirective {
  @ContentChild(TitleDirective, {read: TemplateRef})
  title: TemplateRef<any>;

  @ContentChild(DetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;
}
