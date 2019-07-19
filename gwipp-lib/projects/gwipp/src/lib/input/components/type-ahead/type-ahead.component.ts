import {
  Component,
  ContentChild,
  ElementRef,
  forwardRef,
  Inject,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {BaseInputComponent} from '../../foundation/base-input.component';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {TypeAheadDetailDirective} from './templates/type-ahead-detail.directive';
import {TypeAheadSelectionDirective} from './templates/type-ahead-selection.directive';
import {TypeAheadService} from './service/type-ahead.service';
import {TypeAheadInput} from './model/type-ahead-input';
import {InputConfiguration} from '../../foundation/configuration/input-configuration';
import {Observable, of} from 'rxjs';
import {SelectionOption} from '../../foundation/shared/model/selectionOption';
import {TypeAheadPlaceholderDirective} from './templates/type-ahead-placeholder.directive';
import {TypeAheadNoDataDirective} from './templates/type-ahead-no-data.directive';
import {Consumer, Patch, Set} from 'grippio-gstate';
import {StateKey} from '@angular/platform-browser';
import {GwippStateKey} from '../../../foundation/state/state-keys';
import {TypeAheadOptions} from './model/type-ahead-options';
import {takeUntil} from 'rxjs/operators';

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

  @ContentChild(TypeAheadDetailDirective, {read: TemplateRef})
  detail: TemplateRef<any>;

  @ContentChild(TypeAheadPlaceholderDirective, {read: TemplateRef})
  placeholder: TemplateRef<any>;

  @ContentChild(TypeAheadSelectionDirective, {read: TemplateRef})
  selection: TemplateRef<any>;

  @ContentChild(TypeAheadNoDataDirective, {read: TemplateRef})
  noData: TemplateRef<any>;

  @Consumer(GwippStateKey.TYPE_AHEAD_OPTIONS)
  options$: Observable<TypeAheadOptions>;

  @Input() valueKey: string;

  typeAheadInput: TypeAheadInput = {fieldId: '', input: ''};
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

  private readonly setConfig = (config: InputConfiguration) => this.typeAheadInput = {...this.typeAheadInput, ...{fieldId: config.fieldId}};

  @Input()
  set options(options: SelectionOption<any>[]) {
    this.allOptions = options;
    this.options$ = of({options});
  }

  shouldDropDown(): boolean {
    return this.hasFocus;
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
    this.typeAheadInput = {...this.typeAheadInput, ...{input}};
    this.service.dispatch(this.typeAheadInput);
    this.patchInput(this.typeAheadInput);
  }

  @Patch(GwippStateKey.TYPE_AHEAD_INPUT) patchInput = (input: TypeAheadInput): TypeAheadInput => input;

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
    if (obj == null) {
      this.selectedValue = undefined;
      this.onChange(obj);
    } else {
      this.selectedValue = {value: obj};
      this.forwardChange(this.selectedValue);
    }
  }
}
