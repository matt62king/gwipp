import {Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {InputConfiguration} from './configuration/input-configuration';
import {IconNames} from '../../icon/icon/constants/icon-names';
import {Subject} from 'rxjs';

@Component({
  selector: 'gwipp-base-input',
  template: '<div></div>'
})
export class BaseInputComponent implements OnDestroy {
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('input') inputRef: ElementRef;

  @Input() formControl: FormControl = new FormControl();

  disabled: boolean;
  innerValue: any;
  defaultValue: any;
  errors: any[] = [];

  errorIcon = IconNames.EXCLAMATION_TRIANGLE;

  private readonly defaultConfig: InputConfiguration = {
    fieldId: '',
    errorLabel: '',
    infoLabel: '',
    label: 'Input Field',
    optional: false,
    inline: false,
    maxLength: 99999,
    noDataLabel: '',
  };

  protected destroy$ = new Subject();
  protected config: InputConfiguration = this.defaultConfig;
  protected changeFunction: (event: Event, value: any) => any;
  protected propagateChange = (_: any) => { };
  protected onTouched = () => {};

  @Input()
  set configuration(config: Partial<InputConfiguration>) {
    this.config = {...this.defaultConfig, ...config};
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  get value(): any {
    return this.innerValue;
  }

  set value(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value || this.defaultValue;
      this.onChange(undefined, value);
    }
  }

  onChange(event: Event, value: any) {
    this.innerValue = value || this.defaultValue;
    this.propagateChange(this.innerValue);
    this.changeFunction(event, value);
  }

  protected updateValue(value: any) {
    this.inputRef.nativeElement.value = value || this.defaultValue;
    this.innerValue = value || this.defaultValue;
  }
}
