import {Component, ContentChild, TemplateRef} from '@angular/core';
import {IconNames} from '../../../../icon/icon/constants/icon-names';
import {BlockDetailDirective} from '../foundation/templates/block-detail.directive';

@Component({
  selector: 'gwipp-error-block',
  templateUrl: './error-block.component.html'
})
export class ErrorBlockComponent {
  errorIcon = IconNames.EXCLAMATION_TRIANGLE;

  @ContentChild(BlockDetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;
}
