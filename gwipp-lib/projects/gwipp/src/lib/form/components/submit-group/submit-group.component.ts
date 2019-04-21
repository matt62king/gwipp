import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormEvent} from '../../foundation/event/form-event';
import {ButtonConfiguration} from '../../../button/foundation/configuation/button-configuration';
import {ButtonEvent} from '../../../button/foundation/event/button-event';
import {FormEventType} from '../../foundation/event/form-event-type';

@Component({
  selector: 'gwipp-submit-group',
  templateUrl: './submit-group.component.html'
})
export class SubmitGroupComponent implements OnInit {
  @Output() formEvent: EventEmitter<FormEvent> = new EventEmitter();

  @Input() cancelConfig: ButtonConfiguration;
  @Input() submitConfig: ButtonConfiguration;
  @Input() canCancel = true;

  constructor() { }

  ngOnInit() {
  }

  onCancel(event: ButtonEvent): void {
    this.formEvent.emit(new FormEvent(event.sender, FormEventType.CANCEL));
  }

  onSubmit(event: ButtonEvent): void {
    this.formEvent.emit(new FormEvent(event.sender, FormEventType.SUBMIT));
  }
}
