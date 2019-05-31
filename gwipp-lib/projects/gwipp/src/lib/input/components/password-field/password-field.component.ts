import {Component, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BaseInputComponent} from '../../foundation/base-input.component';
import {Colors} from '../../../foundation/style/colors/colors';
import {IconNames} from '../../../icon/icon/constants/icon-names';
import {ProgressBarComponent} from '../../../output/component/progress-bar/progress-bar.component';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'gwipp-password-field',
  templateUrl: './password-field.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordFieldComponent),
    multi: true
  }]
})
export class PasswordFieldComponent extends BaseInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('strength') strengthRef: ProgressBarComponent;

  @Input() hasStrength: true;

  defaultValue = '';
  isHidden = true;

  eyeIcon = IconNames.EYE;
  eyeSlashIcon = IconNames.EYE_SLASH;

  localChangeFunction = (event: Event, value: string) => {
    this.errors = [];
    for (const key in this.formControl.errors) {
      if (this.formControl.errors.hasOwnProperty(key)) {
        if (key === 'required') {
          this.errors.push('This field is required');
        } else if (key === 'minlength') {
          this.errors.push('This field is not long enough');
        } else {
          this.errors.push(this.formControl.errors[key]);
        }
      }
    }

    this.checkStrength(value);
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

  onShowClick(): void {
    this.isHidden = !this.isHidden;
  }

  private checkStrength(value: string): void {
    this.innerValue = value;
    this.setStrengthIfNeeded(value);
  }

  private setStrengthIfNeeded(text: string): void {
    if (this.strengthRef != null) {
      this.strengthRef.setStatusColor(this.getStrengthColor(text));
      this.strengthRef.setStatusLabel(this.getStrengthLabel(text));
      this.strengthRef.setValue(this.getStrengthValue(text));
    }
  }

  private getStrengthColor(text: string): Colors {
    if (text.length < 8) {
      return Colors.BG_DANGER;
    } else if (text.length >= 8 && text.length < 12) {
      return Colors.BG_WARNING;
    } else if (text.length >= 12) {
      return Colors.BG_SUCCESS;
    }

    return Colors.BG_SUCCESS;
  }

  private getStrengthLabel(text: string): string {
    if (text.length < 8) {
      return 'Bad';
    } else if (text.length >= 8 && text.length < 12) {
      return 'Good';
    } else if (text.length >= 12) {
      return 'Excellent';
    }

    return 'Bad';
  }

  private getStrengthValue(text: string): string {
    if (text.length < 8) {
      return 'w-33';
    } else if (text.length >= 8 && text.length < 12) {
      return 'w-66';
    } else if (text.length >= 12) {
      return 'w-100';
    }

    return 'w-33';
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
