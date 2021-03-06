import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {InputConfiguration} from './configuration/input-configuration';
import {IconNames} from '../../icon/icon/constants/icon-names';
import {Subject} from 'rxjs';
import {GroupAddOnRightDirective} from './templates/group-add-on-right.directive';
import {GroupAddOnLeftDirective} from './templates/group-add-on-left.directive';

@Component({
  selector: 'gwipp-base-input',
  template: '<div></div>'
})
export class BaseInputComponent implements OnDestroy {
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @ContentChild(GroupAddOnRightDirective, {read: TemplateRef})
  rightAddOn: TemplateRef<any>;

  @ContentChild(GroupAddOnLeftDirective, {read: TemplateRef})
  leftAddOn: TemplateRef<any>;

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

  config: InputConfiguration = this.defaultConfig;

  protected destroy$ = new Subject();
  protected changeFunction: (event: Event, value: any) => any;

  protected configFunction = (config: InputConfiguration) => {};
  protected propagateChange = (value: any) => {};
  protected onTouched = () => {};

  @Input()
  set configuration(config: Partial<InputConfiguration>) {
    this.config = {...this.defaultConfig, ...config};
    this.configFunction(config);
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
      this.innerValue = this.valueOrDefault(value);
      this.onChange(value);
    }
  }

  private valueOrDefault(value: any): any {
    if (value == null) {
      return this.defaultValue;
    }

    return value;
  }

  onChange(value: any, event?: Event) {
    this.innerValue = this.valueOrDefault(value);
    this.propagateChange(this.innerValue);
    this.changeFunction(event, value);
  }

  protected updateValue(value: any) {
    this.inputRef.nativeElement.value = this.valueOrDefault(value);
    this.innerValue = this.valueOrDefault(value);
  }
}
