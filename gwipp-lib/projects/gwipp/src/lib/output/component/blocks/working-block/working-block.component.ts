import {Component, ContentChild, TemplateRef} from '@angular/core';
import {IconNames} from '../../../../icon/icon/constants/icon-names';
import {IconAnimation} from '../../../../icon/icon/constants/icon-animation';
import {DetailDirective} from '../../../../foundation/templates/detail.directive';
import {IconSize} from '../../../../icon/icon/constants/icon-size';

@Component({
  selector: 'gwipp-working-block',
  templateUrl: './working-block.component.html'
})
export class WorkingBlockComponent {
  spinnerIcon = IconNames.SPINNER;
  sinnerAnimation = IconAnimation.SPIN;
  spinnerSize = IconSize.LG;

  @ContentChild(DetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;
}
