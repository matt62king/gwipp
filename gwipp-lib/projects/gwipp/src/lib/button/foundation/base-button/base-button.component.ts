import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonEvent} from '../event/button-event';
import {ButtonConfiguration} from '../configuation/button-configuration';
import {ButtonMode} from '../mode/button-mode';
import {IconNames} from '../../../icon/icon/constants/icon-names';
import {IconAnimation} from '../../../icon/icon/constants/icon-animation';
import {ButtonStyleBuilder} from '../util/button-style-builder.service';
import {ButtonType} from '../type/button-type';
import {HasButtonMode} from '../mode/has-button-mode';

@Component({
  selector: 'gwipp-base-button',
  template: '<div></div>'
})
export class BaseButtonComponent implements OnInit, HasButtonMode {
  @Output() buttonClick: EventEmitter<ButtonEvent> = new EventEmitter();

  @Input() enabled = true;

  config: ButtonConfiguration;
  buttonStyle: string;
  buttonMode: ButtonMode = ButtonMode.ACTIVE;

  spinnerIcon = IconNames.SPINNER;
  sinnerAnimation = IconAnimation.SPIN;
  
  constructor(protected styleBuilder: ButtonStyleBuilder) { }

  ngOnInit() {
  }

  @Input()
  public set buttonConfig(bc: ButtonConfiguration) {
    this.config = bc;
    this.buttonStyle = this.styleBuilder.buildForType(bc.buttonType, bc.buttonAction);
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
