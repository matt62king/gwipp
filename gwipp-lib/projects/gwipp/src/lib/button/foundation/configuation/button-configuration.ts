import {ButtonConfigurationOptions} from './button-configuration-options';
import {ButtonType} from '../type/button-type';
import {ButtonActionType} from '../type/button-action.type';

export class ButtonConfiguration implements ButtonConfigurationOptions {
  errorLabel: string;
  confirmLabel: string;
  label: string;
  buttonType: ButtonType;
  buttonAction: ButtonActionType;

  constructor(options: ButtonConfigurationOptions = {}) {
    this.errorLabel = options.errorLabel || 'Try Again';
    this.confirmLabel = options.confirmLabel || 'Confirm';
    this.label = options.label || '';
    this.buttonType = options.buttonType || ButtonType.PRIMARY;
    this.buttonAction = options.buttonAction;
  }
}
