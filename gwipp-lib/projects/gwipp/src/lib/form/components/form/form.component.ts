import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormEvent} from '../../foundation/event/form-event';
import {FormGroup} from '@angular/forms';
import {FormMode} from '../../foundation/consts/form-mode';
import {SubmitGroupComponent} from '../submit-group/submit-group.component';
import {ButtonMode} from '../../../button/foundation/mode/button-mode';
import {FormConfiguration} from '../../foundation/configuration/form-configuration';

@Component({
  selector: 'gwipp-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  @ViewChild('submitGroup') submitGroup: SubmitGroupComponent;

  @Output() formEvent: EventEmitter<FormEvent> = new EventEmitter();

  @Input() config: FormConfiguration = new FormConfiguration();
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
