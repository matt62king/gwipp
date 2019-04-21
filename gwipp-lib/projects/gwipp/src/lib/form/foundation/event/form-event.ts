import {FormEventType} from './form-event-type';
import {GwippEvent} from '../../../foundation/event/gwipp-event';

export class FormEvent implements GwippEvent {
  sender: any;
  public eventType: FormEventType;

  constructor(sender: any,
              eventType: FormEventType) {
    this.eventType = eventType;
    this.sender = sender;
  }
}
