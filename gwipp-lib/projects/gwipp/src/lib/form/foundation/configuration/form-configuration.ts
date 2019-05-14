import {FormConfigurationOptions} from './form-configuration-options';
import {ButtonConfiguration} from '../../../button/foundation/configuation/button-configuration';
import {ButtonType} from '../../../button/foundation/type/button-type';

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
      this.cancelConfiguration = options.cancelConfiguration || new ButtonConfiguration({label: 'Cancel', buttonType: ButtonType.SECONDARY});
      this.submitConfiguration = options.submitConfiguration || new ButtonConfiguration({label: 'Submit'});
  }
}
