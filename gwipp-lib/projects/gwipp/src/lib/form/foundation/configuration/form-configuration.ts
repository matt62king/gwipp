import {ButtonConfiguration} from '../../../button/foundation/configuation/button-configuration';

export interface FormConfiguration {
  cancelConfiguration?: ButtonConfiguration;
  submitConfiguration?: ButtonConfiguration;
  cancelAlwaysEnabled?: boolean;
  canCancel?: boolean;
}
