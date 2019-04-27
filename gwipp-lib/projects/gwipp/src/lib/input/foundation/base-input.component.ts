import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {InputConfiguration} from './configuration/input-configuration';
import {IconNames} from '../../icon/icon/constants/icon-names';

@Component({
  selector: 'gwipp-base-input',
  template: '<div></div>'
})
export class BaseInputComponent implements OnInit {
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('input') inputRef: ElementRef;

  @Input() formControl: FormControl = new FormControl();
  @Input() config: InputConfiguration = new InputConfiguration({});

  disabled: boolean;
  innerValue: any;
  defaultValue: any;
  errors: any[] = [];

  errorIcon = IconNames.EXCLAMATION_TRIANGLE;

  protected changeFunction: (event: Event, value: any) => any;
  protected propagateChange = (_: any) => { };
  protected onTouched = () => {};

  constructor() { }

  ngOnInit() {
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
