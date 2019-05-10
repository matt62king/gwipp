import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormEvent} from '../../foundation/event/form-event';
import {FormGroup} from '@angular/forms';
import {FormMode} from '../../foundation/consts/form-mode';
import {FormConfigurationOptions} from '../../foundation/configuration/form-configuration-options';
import {Button} from '../../../foundation/configuration/congifurations';
import {ButtonConfiguration} from '../../../button/foundation/configuation/button-configuration';
import {ButtonType} from '../../../button/foundation/type/button-type';
import {SubmitGroupComponent} from '../submit-group/submit-group.component';
import {ButtonMode} from '../../../button/foundation/mode/button-mode';

@Component({
  selector: 'gwipp-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  @ViewChild('submitGroup') submitGroup: SubmitGroupComponent;

  @Output() formEvent: EventEmitter<FormEvent> = new EventEmitter();

  @Button({label: 'Cancel', buttonType: ButtonType.SECONDARY})
  cancelButton: ButtonConfiguration;

  @Button({label: 'Submit'})
  submitButton: ButtonConfiguration;

  @Input() config: FormConfigurationOptions = {submitConfiguration: this.submitButton, cancelConfiguration: this.cancelButton};
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
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
