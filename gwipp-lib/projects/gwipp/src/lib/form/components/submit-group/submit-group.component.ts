import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormEvent} from '../../foundation/event/form-event';
import {ButtonConfiguration} from '../../../button/foundation/configuation/button-configuration';
import {ButtonEvent} from '../../../button/foundation/event/button-event';
import {FormEventType} from '../../foundation/event/form-event-type';
import {ButtonMode} from '../../../button/foundation/mode/button-mode';
import {ButtonComponent} from '../../../button/components/button/button.component';

@Component({
  selector: 'gwipp-submit-group',
  templateUrl: './submit-group.component.html'
})
export class SubmitGroupComponent implements OnInit {
  @ViewChild('submitButton') submitButton: ButtonComponent;

  @Output() formEvent: EventEmitter<FormEvent> = new EventEmitter();

  @Input() cancelConfig: ButtonConfiguration;
  @Input() submitConfig: ButtonConfiguration;
  @Input() submitEnabled = true;
  @Input() cancelEnabled = true;
  @Input() canCancel = true;

  constructor() { }

  ngOnInit() {
  }

  public setMode(buttonMode: ButtonMode): void {
    this.submitButton.setButtonMode(buttonMode);
  }

  onCancel(event: ButtonEvent): void {
    this.formEvent.emit(new FormEvent(null, event.sender, FormEventType.CANCEL, event));
  }

  onSubmit(event: ButtonEvent): void {
    this.formEvent.emit(new FormEvent(null, event.sender, FormEventType.SUBMIT, event));
  }
}
