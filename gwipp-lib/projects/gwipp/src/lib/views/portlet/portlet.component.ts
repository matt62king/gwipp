import {Component, ContentChild, TemplateRef} from '@angular/core';
import {PortletTitleDirective} from './foundation/templates/portlet-title.directive';
import {PortletDetailDirective} from './foundation/templates/portlet-detail.directive';

@Component({
  selector: 'gwipp-portlet',
  templateUrl: './portlet.component.html'
})
export class PortletComponent {
  @ContentChild(PortletTitleDirective, {read: TemplateRef})
  title: TemplateRef<any>;

  @ContentChild(PortletDetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;
}
