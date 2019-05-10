import {FormEventType} from './form-event-type';
import {GwippEvent} from '../../../foundation/event/gwipp-event';
import {ButtonEvent} from '../../../button/foundation/event/button-event';

export class FormEvent implements GwippEvent {
  public data: any;
  public sender: any;
  public eventType: FormEventType;
  public buttonEvent: ButtonEvent;

  constructor(data: any,
              sender: any,
              eventType: FormEventType,
              buttonEvent: ButtonEvent) {
    this.eventType = eventType;
    this.buttonEvent = buttonEvent;
    this.sender = sender;
    this.data = data;
  }
}
