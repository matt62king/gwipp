import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonEvent} from '../foundation/event/button-event';
import {ButtonStyleBuilder} from '../foundation/util/button-style-builder.service';
import {ButtonMode} from '../foundation/mode/button-mode';
import {BaseButtonComponent} from '../foundation/base-button/base-button.component';

@Component({
  selector: 'gwipp-confirm-button',
  templateUrl: './confirm-button.component.html'
})
export class ConfirmButtonComponent extends BaseButtonComponent implements OnInit {
  @Output() confirmed: EventEmitter<ButtonEvent> = new EventEmitter();

  constructor(protected styleBuilder: ButtonStyleBuilder) {
    super(styleBuilder);
  }

  ngOnInit() {
  }

  onClick(): void {
    if (this.isActive()) {
      this.buttonMode = ButtonMode.CONFIRM;
    }
  }

  onConfirm(checked: boolean): void {
    if (checked && this.needsConfirmation()) {
      this.confirmed.emit(new ButtonEvent(this));
    }
  }

  needsConfirmation(): boolean {
    return this.buttonMode === ButtonMode.CONFIRM;
  }
}
