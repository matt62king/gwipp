import {FormConfigurationOptions} from './form-configuration-options';
import {ButtonConfiguration} from '../../../button/foundation/configuation/button-configuration';
import {ButtonType} from '../../../button/foundation/type/button-type';
import {ButtonActionType} from '../../../button/foundation/type/button-action.type';

export class FormConfiguration implements FormConfigurationOptions {
  canCancel: boolean;
  cancelAlwaysEnabled: boolean;
  cancelConfiguration: ButtonConfiguration;
  submitConfiguration: ButtonConfiguration;

  constructor(options: {
    canCancel?: boolean,
    cancelAlwaysEnabled?: boolean,
    cancelConfiguration?: ButtonConfiguration,
    submitConfiguration?: ButtonConfiguration} = {}) {
      this.canCancel = options.canCancel || true;
      this.cancelAlwaysEnabled = options.cancelAlwaysEnabled || true;
      this.cancelConfiguration = options.cancelConfiguration || new ButtonConfiguration({
        label: 'Cancel', buttonType: ButtonType.SECONDARY, buttonAction: ButtonActionType.CANCEL_LINK});

      this.submitConfiguration = options.submitConfiguration || new ButtonConfiguration({label: 'Submit'});
  }
}
