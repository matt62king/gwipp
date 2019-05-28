import {Component, forwardRef, OnInit} from '@angular/core';
import {BaseInputComponent} from '../../foundation/base-input.component';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';

export const CUSTOM_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
};

@Component({
  selector: 'gwipp-switch',
  templateUrl: './switch.component.html',
  providers: [CUSTOM_CONTROL_VALUE_ACCESSOR]
})
export class SwitchComponent extends BaseInputComponent implements OnInit, ControlValueAccessor {

  localChangeFunction = (event: Event, value: string) => {};

  constructor() {
    super();

    this.changeFunction = this.localChangeFunction;
  }

  ngOnInit() {
    this.formControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.formControl.value === ''
          || this.formControl.value === false
          || this.formControl.value == null) {
          this.innerValue = false;
          this.inputRef.nativeElement.checked = false;
        }
      }
    );
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: boolean): void {
    this.updateValue(obj);
  }
}
