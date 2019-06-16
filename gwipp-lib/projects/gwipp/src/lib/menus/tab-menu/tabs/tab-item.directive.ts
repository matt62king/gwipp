import {ContentChild, Directive, TemplateRef} from '@angular/core';
import {TabItemTitleDirective} from './tab-item-title.directive';
import {TabItemDetailDirective} from './tab-item-detail.directive';

@Directive({
  selector: 'gwipp-tab-item'
})
export class TabItemDirective {
  @ContentChild(TabItemTitleDirective, {read: TemplateRef})
  title: TemplateRef<any>;

  @ContentChild(TabItemDetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;
}
