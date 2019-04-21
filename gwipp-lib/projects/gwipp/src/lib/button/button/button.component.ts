import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HasButtonMode} from '../foundation/mode/has-button-mode';
import {ButtonMode} from '../foundation/mode/button-mode';
import {ButtonConfiguration} from '../foundation/configuation/button-configuration';
import {ButtonStyleBuilder} from '../foundation/util/button-style-builder.service';
import {ButtonEvent} from '../foundation/event/button-event';
import {IconNames} from '../../icon/icon/constants/icon-names';
import {IconAnimation} from '../../icon/icon/constants/icon-animation';
import {ButtonType} from '../foundation/type/button-type';
import {BaseButtonComponent} from '../foundation/base-button/base-button.component';

@Component({
  selector: 'gwipp-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent extends BaseButtonComponent implements OnInit {
  // @Output() click: EventEmitter<ButtonEvent> = new EventEmitter();
  //
  // @Input() enabled = true;
  //
  // config: ButtonConfiguration;
  // buttonStyle: string;
  // buttonMode: ButtonMode = ButtonMode.ACTIVE;
  //
  // spinnerIcon = IconNames.SPINNER;
  // sinnerAnimation = IconAnimation.SPIN;

  errorIcon = IconNames.EXCLAMATION_TRIANGLE;

  constructor(protected styleBuilder: ButtonStyleBuilder) {
    super(styleBuilder);
  }

  ngOnInit() {

  }

  // @Input()
  // public set buttonConfig(bc: ButtonConfiguration) {
  //   this.config = bc;
  //   this.buttonStyle = this.styleBuilder.buildForType(bc.buttonType);
  // }
  //
  // setButtonMode(mode: ButtonMode): void {
  //   this.buttonMode = mode;
  //
  //   if (mode === ButtonMode.ERROR) {
  //     this.buttonStyle = this.styleBuilder.buildForType(ButtonType.DANGER);
  //   } else {
  //     this.buttonStyle = this.styleBuilder.buildForType(this.config.buttonType);
  //   }
  // }
  //
  // onClick(): void {
  //   this.click.emit(new ButtonEvent(this));
  // }
  //
  // isWorking(): boolean {
  //   return this.buttonMode === ButtonMode.WORKING;
  // }
  //
  // hasError(): boolean {
  //   return this.buttonMode === ButtonMode.ERROR;
  // }
  //
  // resolvedLabel(): string {
  //   if (this.buttonMode === ButtonMode.ERROR) {
  //     return this.config.errorLabel;
  //   }
  //
  //   return this.config.label;
  // }
}
