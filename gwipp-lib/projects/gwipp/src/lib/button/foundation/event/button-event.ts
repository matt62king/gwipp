import {GwippEvent} from '../../../foundation/event/gwipp-event';

export class ButtonEvent implements GwippEvent {
  sender: any;

  constructor(sender: any) {
    this.sender = sender;
  }

}
