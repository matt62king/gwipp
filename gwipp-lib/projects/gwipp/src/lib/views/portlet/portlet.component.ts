import {Component, ContentChild, TemplateRef} from '@angular/core';
import {TitleDirective} from '../../foundation/templates/title.directive';
import {DetailDirective} from '../../foundation/templates/detail.directive';

@Component({
  selector: 'gwipp-portlet',
  templateUrl: './portlet.component.html'
})
export class PortletComponent {
  @ContentChild(TitleDirective, {read: TemplateRef})
  title: TemplateRef<any>;

  @ContentChild(DetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;
}
