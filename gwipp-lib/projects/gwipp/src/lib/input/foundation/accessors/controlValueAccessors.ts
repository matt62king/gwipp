import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {forwardRef} from '@angular/core';
import {DropdownSelectionComponent} from '../../components/dropdown-selection/dropdown-selection.component';
import {PasswordFieldComponent} from '../../components/password-field/password-field.component';
import {SwitchComponent} from '../../components/switch/switch.component';
import {TextFieldComponent} from '../../components/text-field/text-field.component';

export const DROPDOWN_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropdownSelectionComponent),
  multi: true
};

export const PASSWORD_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PasswordFieldComponent),
  multi: true
};

export const SWITCH_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
};

export const TEXT_FIELD_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextFieldComponent),
  multi: true
};
