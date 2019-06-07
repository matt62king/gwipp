import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormEvent} from '../../foundation/event/form-event';
import {FormGroup} from '@angular/forms';
import {FormMode} from '../../foundation/consts/form-mode';
import {SubmitGroupComponent} from '../submit-group/submit-group.component';
import {ButtonMode} from '../../../button/foundation/mode/button-mode';
import {FormConfiguration} from '../../foundation/configuration/form-configuration';
import {ButtonActionType} from '../../../button/foundation/type/button-action.type';
import {ButtonType} from '../../../button/foundation/type/button-type';

@Component({
  selector: 'gwipp-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

  private defaultConfig = {
    canCancel: true,
    cancelAlwaysEnabled: true,
    cancelConfiguration: {label: 'Cancel', buttonAction: ButtonActionType.CANCEL_LINK, buttonType: ButtonType.SECONDARY},
    submitConfiguration: {label: 'Submit'}
  };

  @ViewChild('submitGroup') submitGroup: SubmitGroupComponent;

  @Output() formEvent: EventEmitter<FormEvent> = new EventEmitter();

  @Input() formGroup: FormGroup;

  configuration: FormConfiguration = this.defaultConfig;

  @Input()
  set config(config: FormConfiguration) {
    this.configuration = {...this.defaultConfig, ...config};
  }

  @Input()
  set formMode(mode: FormMode) {
    switch (mode) {
      case FormMode.ERROR :
        this.submitGroup.setMode(ButtonMode.ERROR);
        break;
      case FormMode.IDLE :
        this.submitGroup.setMode(ButtonMode.ACTIVE);
        break;
      case FormMode.SUBMITTING :
        this.submitGroup.setMode(ButtonMode.WORKING);
        break;
    }
  }

  onCancelSubmit(formEvent: FormEvent): void {
    this.formEvent.emit(new FormEvent(this.formGroup.value, this, formEvent.eventType, formEvent.buttonEvent));
  }
}
