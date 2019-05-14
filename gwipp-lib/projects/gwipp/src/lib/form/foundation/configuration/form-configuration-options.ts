import {ButtonConfiguration} from '../../../button/foundation/configuation/button-configuration';

export interface FormConfigurationOptions {
  cancelConfiguration?: ButtonConfiguration;
  submitConfiguration?: ButtonConfiguration;
  cancelAlwaysEnabled?: boolean;
  canCancel?: boolean;
}
