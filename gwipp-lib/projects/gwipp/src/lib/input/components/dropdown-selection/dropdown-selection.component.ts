import {
  Component,
  ContentChild, forwardRef,
  Input,
  TemplateRef,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BaseInputComponent} from '../../foundation/base-input.component';
import {IconNames} from '../../../icon/icon/constants/icon-names';
import {SelectionOption} from './model/selectionOption';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
import {OptionDetailDirective} from './templates/option-detail.directive';
import {SelectionDetailDirective} from './templates/selection-detail.directive';

@Component({
  selector: 'gwipp-dropdown-selection',
  templateUrl: './dropdown-selection.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownSelectionComponent),
    multi: true
  }]
})
export class DropdownSelectionComponent extends BaseInputComponent implements ControlValueAccessor {

  @ContentChild(OptionDetailDirective, {read: TemplateRef})
  optionDetail: TemplateRef<any>;

  @ContentChild(SelectionDetailDirective, {read: TemplateRef})
  selectionDetail: TemplateRef<any>;

  @Input() valueKey: string;

  options$: Observable<SelectionOption<any>[]>;
  allOptions: SelectionOption<any>[] = [];
  caretIcon = IconNames.CARET_DOWN;

  selectedValue: SelectionOption<any>;
  hasFocus: boolean;

  localChangeFunction = (event: Event, value: any) => {};

  constructor() {
    super();
    this.changeFunction = this.localChangeFunction;
  }

  @Input()
  set options(options: SelectionOption<any>[]) {
    this.options$ = of(options);
    this.allOptions = options;

    if (options.length === 0) {
      this.setDisabledState(true);
    }
  }

  toggleFocus(): void {
    if (!this.disabled) {
      this.hasFocus = !this.hasFocus;
    }
  }

  selectValue(value: SelectionOption<any>): void {
    this.selectedValue = value;
    this.toggleFocus();
    this.forwardChange(value);
  }

  forwardChange(value: SelectionOption<any>): void {
    this.onChange(this.valueKey ? value.value[this.valueKey] : value.value);
  }

  registerOnChange(fn: (value: any) => void): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    if (obj == null) {
      this.selectedValue = undefined;
      this.onChange(obj);
    } else {
      this.selectedValue = {value: obj};
      this.forwardChange(this.selectedValue);
    }
  }
}
