import {ButtonConfigurationOptions} from './button-configuration-options';
import {ButtonType} from '../type/button-type';

export class ButtonConfiguration implements ButtonConfigurationOptions {
  errorLabel: string;
  confirmLabel: string;
  label: string;
  buttonType: ButtonType;

  constructor(options: {
      errorLabel?: string,
      confirmLabel?: string,
      label?: string,
      buttonType?: ButtonType}) {
    this.errorLabel = options.errorLabel || 'Try Again';
    this.confirmLabel = options.confirmLabel || 'Confirm';
    this.label = options.label || '';
    this.buttonType = options.buttonType || ButtonType.PRIMARY;
  }
}
