import {ButtonType} from '../type/button-type';
import {ButtonActionType} from '../type/button-action.type';

export interface ButtonConfigurationOptions {
  label?: string;
  confirmLabel?: string;
  errorLabel?: string;
  buttonType?: ButtonType;
  buttonAction?: ButtonActionType;
}
