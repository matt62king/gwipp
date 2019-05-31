import {Component, OnInit} from '@angular/core';
import {BaseInputComponent} from '../../foundation/base-input.component';
import {ControlValueAccessor} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {SWITCH_CONTROL_VALUE_ACCESSOR} from '../../foundation/accessors/controlValueAccessors';



@Component({
  selector: 'gwipp-switch',
  templateUrl: './switch.component.html',
  providers: [SWITCH_CONTROL_VALUE_ACCESSOR]
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
