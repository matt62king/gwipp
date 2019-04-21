import {Component} from '@angular/core';
import {Button, ButtonType, IconAnimation, IconSize} from 'gwipp';
import {ButtonConfiguration} from '../../projects/gwipp/src/lib/button/foundation/configuation/button-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gwipp-lib';
  iconSize = IconSize.TEN_X;
  animation = IconAnimation.SPIN;

  @Button({label: 'Button', buttonType: ButtonType.PRIMARY})
  buttonConfig: ButtonConfiguration;

  @Button({label: 'Confirm Button', buttonType: ButtonType.PRIMARY })
  confirmConfig: ButtonConfiguration;

  @Button({label: 'Cancel', buttonType: ButtonType.SECONDARY})
  cancelConfig: ButtonConfiguration;

  @Button({label: 'Submit', buttonType: ButtonType.PRIMARY})
  submitConfig: ButtonConfiguration;
}
