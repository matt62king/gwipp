import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonEvent} from '../event/button-event';
import {ButtonMode} from '../mode/button-mode';
import {IconNames} from '../../../icon/icon/constants/icon-names';
import {IconAnimation} from '../../../icon/icon/constants/icon-animation';
import {ButtonStyleBuilder} from '../util/button-style-builder.service';
import {ButtonType} from '../type/button-type';
import {HasButtonMode} from '../mode/has-button-mode';
import {ButtonActionType} from '../type/button-action.type';
import {ButtonConfiguration} from '../configuation/button-configuration';

@Component({
  selector: 'gwipp-base-button',
  template: '<div></div>'
})
export class BaseButtonComponent implements HasButtonMode {

  private readonly defaultConfig: ButtonConfiguration = {
    label: 'Button',
    errorLabel: 'Error',
    confirmLabel: 'Confirm',
    buttonType: ButtonType.PRIMARY,
    buttonAction: ButtonActionType.PROCEED
  };

  @Output() buttonClick: EventEmitter<ButtonEvent> = new EventEmitter();

  @Input() enabled = true;

  config: ButtonConfiguration = this.defaultConfig;
  buttonMode: ButtonMode = ButtonMode.ACTIVE;
  spinnerIcon = IconNames.SPINNER;
  sinnerAnimation = IconAnimation.SPIN;
  buttonStyle: string;

  constructor(protected styleBuilder: ButtonStyleBuilder) { }

  @Input()
  public set buttonConfig(bc: Partial<ButtonConfiguration>) {
    this.config = {...this.defaultConfig, ...bc};
    this.buttonStyle = this.styleBuilder.buildForType(this.config.buttonType, this.config.buttonAction);
  }

  @Input()
  public set mode(mode: ButtonMode) {
    this.setButtonMode(mode);
  }

  setButtonMode(mode: ButtonMode): void {
    this.buttonMode = mode;

    if (mode === ButtonMode.ERROR) {
      this.buttonStyle = this.styleBuilder.buildForType(ButtonType.DANGER, this.config.buttonAction);
    } else {
      this.buttonStyle = this.styleBuilder.buildForType(this.config.buttonType, this.config.buttonAction);
    }
  }

  onClick(): void {
    this.buttonClick.emit(new ButtonEvent(this));
  }

  isActive(): boolean {
    return this.buttonMode === ButtonMode.ACTIVE || this.buttonMode === ButtonMode.COMPLETE || this.buttonMode === ButtonMode.ERROR;
  }

  isWorking(): boolean {
    return this.buttonMode === ButtonMode.WORKING;
  }

  hasError(): boolean {
    return this.buttonMode === ButtonMode.ERROR;
  }

  resolvedLabel(): string {
    if (this.buttonMode === ButtonMode.ERROR) {
      return this.config.errorLabel;
    }
    if (this.buttonMode === ButtonMode.CONFIRM) {
      return this.config.confirmLabel;
    }

    return this.config.label;
  }
}
