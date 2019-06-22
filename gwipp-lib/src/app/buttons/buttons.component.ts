import {Component} from '@angular/core';
import {Button} from '../../../projects/gwipp/src/lib/button/decorators/button.decorator';
import {ButtonType} from '../../../projects/gwipp/src/lib/button/foundation/type/button-type';
import {ButtonConfiguration} from '../../../projects/gwipp/src/lib/button/foundation/configuation/button-configuration';
import {ButtonActionType} from '../../../projects/gwipp/src/lib/button/foundation/type/button-action.type';
import {Icon} from '../../../projects/gwipp/src/lib/icon/decorators/icon.decorator';
import {IconNames} from '../../../projects/gwipp/src/lib/icon/icon/constants/icon-names';
import {IconSize} from '../../../projects/gwipp/src/lib/icon/icon/constants/icon-size';
import {IconConfiguration} from '../../../projects/gwipp/src/lib/icon/foundation/config/icon-configuration';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  @Button({label: 'Button', buttonType: ButtonType.PRIMARY})
  buttonConfig: ButtonConfiguration;

  @Button({label: 'Confirm Button', buttonType: ButtonType.DANGER })
  confirmConfig: ButtonConfiguration;

  @Button({label: 'Action', buttonType: ButtonType.PRIMARY, buttonAction: ButtonActionType.ACTION})
  actionButton: ButtonConfiguration;

  @Button({label: 'Outline', buttonType: ButtonType.PRIMARY, buttonAction: ButtonActionType.CANCEL_OUTLINE})
  outlineButton: ButtonConfiguration;

  @Button({label: 'Link', buttonType: ButtonType.PRIMARY, buttonAction: ButtonActionType.CANCEL_LINK})
  linkButton: ButtonConfiguration;

  @Icon({name: IconNames.TRASH, size: IconSize.LG})
  trashIcon: IconConfiguration;
}
