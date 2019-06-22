import {Component, Input} from '@angular/core';
import {BaseButtonComponent} from '../../foundation/base-button/base-button.component';
import {ButtonStyleBuilder} from '../../foundation/util/button-style-builder.service';
import {IconConfiguration} from '../../../icon/foundation/config/icon-configuration';
import {IconNames} from '../../../icon/icon/constants/icon-names';
import {IconAnimation} from '../../../icon/icon/constants/icon-animation';

@Component({
  selector: 'gwipp-icon-button',
  templateUrl: './icon-button.component.html'
})
export class IconButtonComponent extends BaseButtonComponent {

  @Input() iconConfig: IconConfiguration;

  iconSpinner = IconNames.SPINNER;
  iconAnimation = IconAnimation.SPIN;

  constructor(protected styleBuilder: ButtonStyleBuilder) {
    super(styleBuilder);
  }
}
