import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormEvent} from '../../foundation/event/form-event';
import {FormConfiguration} from '../../foundation/configuration/form-configuration';
import {FormGroup} from '@angular/forms';
import {FormMode} from '../../foundation/consts/form-mode';

@Component({
  selector: 'gwipp-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  @Output() formEvent: EventEmitter<FormEvent> = new EventEmitter();

  @Input() config: FormConfiguration;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set formMode(mode: FormMode) {

  }

  onCancelSubmit(formEvent: FormEvent): void {
    this.formEvent.emit(new FormEvent(this.formGroup.value, this, formEvent.eventType));
  }
}
