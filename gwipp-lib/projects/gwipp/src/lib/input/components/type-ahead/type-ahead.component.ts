import {Component, ContentChild, ElementRef, forwardRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BaseInputComponent} from '../../foundation/base-input.component';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {TypeAheadDetailDirective} from './templates/type-ahead-detail.directive';
import {TypeAheadSelectionDirective} from './templates/type-ahead-selection.directive';
import {TypeAheadService} from './service/type-ahead.service';
import {TypeAheadState} from './model/type-ahead-state';
import {InputConfiguration} from '../../foundation/configuration/input-configuration';
import {Observable, of} from 'rxjs';
import {SelectionOption} from '../../foundation/shared/model/selectionOption';

@Component({
  selector: 'gwipp-type-ahead',
  templateUrl: './type-ahead.component.html',
  styleUrls: ['./type-ahead.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TypeAheadComponent),
    multi: true
  }]
})
export class TypeAheadComponent extends BaseInputComponent implements ControlValueAccessor {
  private state: TypeAheadState;

  @ContentChild(TypeAheadDetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;

  @ContentChild(TypeAheadSelectionDirective, {read: TemplateRef})
  selection: TemplateRef<any>;

  @Input() valueKey: string;

  options$: Observable<SelectionOption<any>[]>;
  allOptions: SelectionOption<any>[] = [];
  selectedValue: SelectionOption<any>;
  hasFocus: boolean;
  mouseOver: boolean;

  localChangeFunction = (event: Event, value: any) => {};

  constructor(readonly service: TypeAheadService) {
    super();
    this.configFunction = this.setConfig;
    this.changeFunction = this.localChangeFunction;
  }

  private readonly setConfig = (config: InputConfiguration) => this.state = {fieldId: config.fieldId};

  @Input()
  set options(options: SelectionOption<any>[]) {
    this.allOptions = options;
    this.options$ = of(options);
  }

  shouldDropDown(): boolean {
    return this.hasFocus && this.allOptions.length > 0;
  }

  toggleFocus(): void {
    if (!this.disabled) {
      this.hasFocus = !this.hasFocus;
    }
  }

  toggleMouseOver(): void {
    this.mouseOver = !this.mouseOver;
  }

  onBlur(): void {
    if (!this.mouseOver) {
      this.toggleFocus();
    }
  }

  forwardTextInput(input: string): void {
    this.state = {...this.state, ...{input}};
    this.service.dispatch(this.state);
  }

  selectValue(value: SelectionOption<any>): void {
    this.selectedValue = value;
    this.resetToggles();
    this.forwardChange(this.selectedValue);
  }

  private forwardChange(value: SelectionOption<any>): void {
    this.onChange(this.valueKey ? value.value[this.valueKey] : value.value);
  }

  private resetToggles(): void {
    this.toggleFocus();
    this.toggleMouseOver();
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.hasFocus = false;
    this.mouseOver = false;
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
  }
}
