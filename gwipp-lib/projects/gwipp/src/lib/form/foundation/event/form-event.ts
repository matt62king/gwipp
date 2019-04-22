import {FormEventType} from './form-event-type';
import {GwippEvent} from '../../../foundation/event/gwipp-event';

export class FormEvent implements GwippEvent {
  data: any;
  sender: any;
  public eventType: FormEventType;

  constructor(data: any,
              sender: any,
              eventType: FormEventType) {
    this.eventType = eventType;
    this.sender = sender;
    this.data = data;
  }
}
