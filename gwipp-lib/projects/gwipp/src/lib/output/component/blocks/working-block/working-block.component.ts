import {Component, ContentChild, TemplateRef} from '@angular/core';
import {IconNames} from '../../../../icon/icon/constants/icon-names';
import {IconAnimation} from '../../../../icon/icon/constants/icon-animation';
import {IconSize} from '../../../../icon/icon/constants/icon-size';
import {BlockDetailDirective} from '../foundation/templates/block-detail.directive';

@Component({
  selector: 'gwipp-working-block',
  templateUrl: './working-block.component.html'
})
export class WorkingBlockComponent {
  spinnerIcon = IconNames.SPINNER;
  sinnerAnimation = IconAnimation.SPIN;
  spinnerSize = IconSize.LG;

  @ContentChild(BlockDetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;
}
