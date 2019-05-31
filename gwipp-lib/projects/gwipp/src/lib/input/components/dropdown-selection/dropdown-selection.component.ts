import {
  Component,
  ContentChild, forwardRef,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BaseInputComponent} from '../../foundation/base-input.component';
import {takeUntil} from 'rxjs/operators';
import {IconNames} from '../../../icon/icon/constants/icon-names';
import {SelectionOption} from './model/selectionOption';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
import {OptionDetailDirective} from './templates/option-detail.directive';
import {SelectionDetailDirective} from './templates/selection-detail.directive';
// import {DROPDOWN_CONTROL_VALUE_ACCESSOR} from '../../foundation/accessors/controlValueAccessors';

@Component({
  selector: 'gwipp-dropdown-selection',
  templateUrl: './dropdown-selection.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownSelectionComponent),
    multi: true
  }]
})
export class DropdownSelectionComponent extends BaseInputComponent implements OnInit, ControlValueAccessor {

  @ContentChild(OptionDetailDirective, {read: TemplateRef})
  optionDetail: TemplateRef<any>;

  @ContentChild(SelectionDetailDirective, {read: TemplateRef})
  selectionDetail: TemplateRef<any>;

  options$: Observable<SelectionOption<any>[]>;
  allOptions: SelectionOption<any>[] = [];
  caretIcon = IconNames.CARET_DOWN;

  selectedValue: SelectionOption<any>;
  hasFocus: boolean;

  propagateChange = (value: any) => {};
  onTouched = () => {};
  localChangeFunction = (event: Event, value: any) => {};

  constructor() {
    super();
    this.changeFunction = this.localChangeFunction;
  }

  ngOnInit() {
    this.formControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.formControl.value === '' || this.formControl.value == null) {
          this.innerValue = '';
        }
      }
    );
  }

  @Input()
  set options(options: SelectionOption<any>[]) {
    this.options$ = of(options);
    this.allOptions = options;
  }

  toggleFocus(): void {
    this.hasFocus = !this.hasFocus;
  }

  selectValue(value: SelectionOption<any>): void {
    this.selectedValue = value;
    this.toggleFocus();
    this.onChange(undefined, value);
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
    } else {
      this.selectedValue = {value: obj};
    }
  }
}
