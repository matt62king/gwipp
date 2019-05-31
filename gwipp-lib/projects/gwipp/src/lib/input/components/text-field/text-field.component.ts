import {Component, forwardRef, OnInit} from '@angular/core';
import {BaseInputComponent} from '../../foundation/base-input.component';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'gwipp-text-field',
  templateUrl: './text-field.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextFieldComponent),
    multi: true
  }]
})
export class TextFieldComponent extends BaseInputComponent implements OnInit, ControlValueAccessor {

  defaultValue = '';

  localChangeFunction = (event: Event, value: string) => {
    this.errors = [];
    for (const key in this.formControl.errors) {
      if (this.formControl.errors.hasOwnProperty(key)) {
        if (key === 'required') {
          this.errors.push('This field is required');
        } else if (key === 'email') {
          this.errors.push('This field must be an email');
        } else if (key === 'uniqueEmail') {
          this.errors.push('Email is already assigned to an account');
        } else if (key === 'NaN') {
          this.errors.push('Must be a number');
        } else if (key === 'maxlength') {
          this.errors.push('Can not be longer than ' + this.config.maxLength + ' characters');
        }
      }
    }
  }

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
          this.inputRef.nativeElement.value = '';
        }
      }
    );
  }

  onBlur(event: Event, value: any) {
    this.onChange(event, value);
    this.valueChange.emit(value);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.updateValue(obj);
  }
}
