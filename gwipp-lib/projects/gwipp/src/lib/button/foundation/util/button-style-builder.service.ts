import {Injectable} from '@angular/core';
import {StyleModule} from '../../../foundation/style/style.module';
import {ButtonType} from '../type/button-type';
import {ButtonActionType} from '../type/button-action.type';

@Injectable({providedIn: StyleModule})
export class ButtonStyleBuilder {

  public buildForType(buttonType: ButtonType, buttonAction: ButtonActionType): string {
    return `btn btn-lg  ${this.styleForType(buttonType)} ${this.styleForAction(buttonAction)}`;
  }

  private styleForType(buttonType: ButtonType): string {
    switch (buttonType) {
      case ButtonType.SUCCESS :
        return 'btn-success';
      case ButtonType.SECONDARY :
        return 'btn-secondary';
      case ButtonType.PRIMARY :
        return 'btn-primary';
      case ButtonType.DANGER :
        return 'btn-danger';
      case ButtonType.NONE :
        return '';
      default :
        return '';
    }
  }

  private styleForAction(buttonAction: ButtonActionType): string {
    if (buttonAction === ButtonActionType.ACTION) {
      return 'gwipp-btn-action';
    }

    return '';
  }

}
